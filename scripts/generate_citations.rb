# Generate static citation assets from publication front matter before Jekyll builds.
require 'yaml'
require 'date'
require 'fileutils'
Dir.chdir(File.expand_path('..', __dir__))
output = 'files/citations'
FileUtils.mkdir_p(output)
papers = Dir['_publications/*.md'].map do |path|
  YAML.safe_load(File.read(path).split(/^---\s*$
/, 3)[1], permitted_classes: [Date, Time])
end.select { |d| d['type'] == 'journal' }.sort_by { |d| d.fetch('date').to_s }.reverse
citations = {}
all = []
      papers.each do |paper|
        d = paper
        key = "huo-#{d.fetch('doi').gsub(/[^a-zA-Z0-9]/, '-')}"
        authors = d.fetch('authors').split(',').map { |a| a.strip.sub(/^&\s*/, '') }.reject(&:empty?).map do |a|
          surname, _, initials = a.rpartition(' ')
          "#{surname}, #{initials}"
        end
        year = Date.parse(d.fetch('date').to_s).year.to_s
        fields = {'title' => "{#{d['title']}}", 'author' => authors.join(' and '), 'journal' => d['venue'], 'year' => year,
                  'volume' => d['volume'], 'pages' => d['pages'], 'eid' => d['article_number'], 'doi' => d['doi'], 'url' => "https://doi.org/#{d['doi']}"}.reject { |_, v| v.nil? || v.to_s.empty? }
        bib = "@article{#{key},\n" + fields.map { |k, v| "  #{k} = {#{v}}," }.join("\n") + "\n}\n"
        ris = "TY  - JOUR\n" + authors.map { |a| "AU  - #{a}\n" }.join + "TI  - #{d['title']}\nJO  - #{d['venue']}\nPY  - #{year}\nDO  - #{d['doi']}\nUR  - https://doi.org/#{d['doi']}\n"
        ris += "VL  - #{d['volume']}\n" if d['volume']
        ris += "SP  - #{d['article_number'] || d['pages']}\n" if d['article_number'] || d['pages']
        ris += "ER  - \n"
        d['bibtex_url'] = "/files/citations/#{key}.bib"
        d['ris_url'] = "/files/citations/#{key}.ris"
        d['citation_text'] = "#{d['authors']} (#{year}). #{d['title']}. #{d['venue']}. https://doi.org/#{d['doi']}"
        d['bibtex'] = bib
        {"#{key}.bib" => bib, "#{key}.ris" => ris}.each { |name, content| File.write(File.join(output, name), content) }
        citations[d.fetch('doi')] = d.slice('bibtex_url', 'ris_url', 'citation_text', 'bibtex')
        all << bib
      end
      File.write(File.join(output, 'wendong-huo-publications.bib'), all.join("\n"))
File.write('_data/citations.yml', citations.to_yaml)
puts "Generated #{papers.size} BibTeX and RIS records."

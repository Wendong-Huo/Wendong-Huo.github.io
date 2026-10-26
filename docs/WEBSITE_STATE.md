# Website refresh — 2026-10-26

## Scope
Refresh the existing Jekyll academic website, repair broken resources and duplicate routes, improve research presentation and mobile behavior, and verify the generated site before publication.

## Baseline
- Local starting commit: `e8c176b`, originally on `master`; work branch: `codex/website-refresh`.
- Fetched `origin/main`: only the About page differs from the local baseline. Its substantive current appointment and research scope are retained in the new copy.
- Live checks confirmed missing `/images/profile.png`, both CV PDFs, and `/sitemap/`. Existing six paper PDFs, thesis, and defense slides returned HTTP 200.
- Three duplicate post URL groups affected eight source documents.

## Decisions
- Keep existing public navigation URLs; labels become Research, Publications, Experience, Notes, CV, Links.
- Use existing publication evidence for project summaries; no numerical performance claims added.
- Research thumbnails are rendered crops from paper 5 Figure 27 (PDF page 23), paper 4 Figure 10 (page 15), and paper 3 Figure 25 (page 26). All figure panels are preserved. Provenance is visible on project pages.
- Missing CVs are not invented. The page provides a factual web profile and requests by email. Actual English/Chinese PDF CVs can be added later.
- Do not invent Ph.D. award date or postdoc start date. The November 18, 2025 date refers only to thesis manuscript finalization.
- Incomplete portfolio sources and five clearly duplicate/incomplete or placeholder posts remain in the repository with `published: false`. No source files deleted. Git baseline retains earlier page wording and project inventory.
- Existing translation PDF under `files/temp` stays published because a real post references it; other scratch directories are excluded.
- Publication ordering uses explicit `type` and date, not positional offsets.
- Third-party Misc widgets replaced by direct academic profile links. No external analytics/comments configured.
- No public deployment is performed as part of local editing.

## Verification
Passed:
- Final production build: `bundle exec jekyll build`, Ruby 3.2 under local WSL Ubuntu; 84.036 seconds, exit 0. Log: `tmp/jekyll-build-final.log` (excluded from publication).
- Generated-site validation: 62 HTML pages and 59 explicit source URLs; no duplicate published URLs, missing local links/resources, missing image alt attributes, or excluded scratch paths in output.
- Browser checks at 320px: all seven main pages have one H1, no horizontal overflow, and no failed loaded images. Actual content viewport 305px after the scrollbar.
- At 390px: homepage, publications, CV, and research detail showed no overflow. Mobile menu opens and exposes all navigation entries.
- At 768px: research cards render in the responsive layout without overflow.
- Desktop: homepage reviewed visually; working portrait, current identity, research links, and new styling. Canonical URL verified as the production URL while previewing locally.
- Publications: six journal article cards and one thesis card, each with accessible document links.
- `git diff --check`: passed (only Git line-ending conversion advisories).
- Screenshot: `docs/previews/home-desktop.png`.

The first link-check run found additional theme favicon references to missing files; replaced these with a local SVG monogram and reran validation successfully. The first WSL dependency installation attempt needed root and a writable root log path; resolved locally. Bundler dependencies are now locked in `Gemfile.lock`.

Not run: public deployment/remote Actions execution, exhaustive external-link checks, physical phone tests, and Lighthouse scoring. CV PDFs and exact appointment/degree dates still require author-provided source information. No invented records or PDFs were added.

Preview: local HTTP server bound to 127.0.0.1:4000 serving `_site`; no public network binding. Source changes remain in the working tree on `codex/website-refresh`.

## Maintenance
- Main publishing workflow builds on `main`; PR builds validate without deploying.
- Run `bundle exec jekyll build`, then `python3 scripts/check_site.py`.
- Review the rendered site at 390px and desktop width before merging.
- Add journal articles to `_publications` with `type: journal`, a unique permalink, DOI, and existing PDF path.
- Add research cards in `_data/research.yml`; use attributed, verified figures.
- Add exact appointment/degree dates only when supplied by the author.

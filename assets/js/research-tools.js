/* Progressive enhancements: figures, publication tools and opt-in 3D. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  // Native modal supplies focus containment, Escape and background inertness.
  const figures = $$('[data-lightbox]');
  $$('.research-figure img').forEach(img => {
    if (img.closest('a')) return;
    const link = document.createElement('a');
    link.href = img.currentSrc || img.src;
    link.dataset.lightbox = '';
    link.dataset.caption = img.closest('figure')?.querySelector('figcaption')?.textContent || img.alt;
    link.setAttribute('aria-label', `Enlarge: ${img.alt}`);
    img.replaceWith(link);
    link.append(img);
    figures.push(link);
  });
  if (figures.length && typeof HTMLDialogElement !== 'undefined') {
    const dialog = document.createElement('dialog');
    dialog.className = 'figure-dialog';
    dialog.setAttribute('aria-label', 'Research image viewer');
    dialog.innerHTML = '<div class="figure-toolbar"><button type="button" data-action="prev" aria-label="Previous image">←</button><button type="button" data-action="next" aria-label="Next image">→</button><button type="button" data-action="zoom">Zoom in</button><a class="figure-original" target="_blank" rel="noopener">Open original ↗</a><button type="button" data-action="close" autofocus>Close ×</button></div><div class="figure-viewport"><img alt=""></div><p class="figure-caption" aria-live="polite"></p>';
    document.body.append(dialog);
    let index = 0, origin, previousOverflow;
    const show = n => {
      index = (n + figures.length) % figures.length;
      const link = figures[index];
      $('.figure-viewport', dialog).classList.remove('is-zoomed');
      $('[data-action="zoom"]', dialog).textContent = 'Zoom in';
      $('img', dialog).src = link.href;
      $('img', dialog).alt = $('img', link)?.alt || 'Research figure';
      $('.figure-caption', dialog).textContent = `${index + 1} / ${figures.length} · ${link.dataset.caption || $('img', dialog).alt}`;
      $('.figure-original', dialog).href = link.href;
    };
    figures.forEach((link, i) => link.addEventListener('click', e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); origin = link; show(i);
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden'; dialog.showModal();
    }));
    dialog.addEventListener('click', e => {
      const action = e.target.closest('[data-action]')?.dataset.action;
      if (action === 'close' || e.target === dialog) dialog.close();
      if (action === 'prev') show(index - 1);
      if (action === 'next') show(index + 1);
      if (action === 'zoom') {
        const zoomed = $('.figure-viewport', dialog).classList.toggle('is-zoomed');
        e.target.textContent = zoomed ? 'Fit image' : 'Zoom in';
      }
    });
    dialog.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault(); show(index + (e.key === 'ArrowRight' ? 1 : -1));
      }
    });
    dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; origin?.focus(); });
  }

  const papers = $$('.journal-paper');
  if (papers.length) {
    const search = $('#paper-search'), year = $('#paper-year'), journal = $('#paper-journal');
    const addOptions = (select, values) => values.forEach(value => select.add(new Option(value, value)));
    addOptions(year, [...new Set(papers.map(p => p.dataset.year))].sort().reverse());
    addOptions(journal, [...new Set(papers.map(p => p.dataset.journal))].sort());
    const filter = () => {
      const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      papers.forEach(p => {
        const text = p.textContent.toLowerCase();
        p.hidden = !!((year.value && p.dataset.year !== year.value) || (journal.value && p.dataset.journal !== journal.value) || !terms.every(t => text.includes(t)));
      });
      const count = papers.filter(p => !p.hidden).length;
      $('#paper-count').textContent = `${count} of ${papers.length} journal articles`;
      $('#no-papers').hidden = count !== 0;
      $('#export-papers').disabled = count === 0;
    };
    $('.publication-tools').hidden = false;
    [search, year, journal].forEach(input => input.addEventListener('input', filter));
    $('#reset-papers').addEventListener('click', () => { search.value = year.value = journal.value = ''; filter(); });
    $('#export-papers').addEventListener('click', () => {
      const text = papers.filter(p => !p.hidden).map(p => $('.bibtex-source', p).textContent).join('\n');
      const url = URL.createObjectURL(new Blob([text], {type: 'application/x-bibtex;charset=utf-8'}));
      const a = document.createElement('a'); a.href = url; a.download = 'wendong-huo-selected-publications.bib';
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    papers.forEach(p => {
      const button = $('.copy-citation', p); button.hidden = false;
      button.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText($('.citation-text', p).textContent); button.textContent = 'Copied'; }
        catch { $('.citation-details', p).open = true; button.textContent = 'Select the citation below to copy'; }
        setTimeout(() => { button.textContent = 'Copy citation'; }, 3000);
      });
    });
    filter();
  }

  const stage = $('.surface-stage');
  if (stage) {
    const load = $('.load-surface', stage), status = $('.surface-status', stage);
    load.hidden = false;
    let viewer, loading = false;
    load.addEventListener('click', async () => {
      if (loading) return;
      loading = true; load.disabled = true; status.textContent = 'Loading interactive surface…';
      try {
        if (!customElements.get('model-viewer')) await import(stage.dataset.viewerScript);
        viewer = document.createElement('model-viewer');
        viewer.src = stage.dataset.modelSrc;
        viewer.alt = (stage.dataset.modelAlt || 'Optimized curved shell');
        viewer.setAttribute('camera-controls', '');
        viewer.setAttribute('touch-action', 'pan-y');
        viewer.setAttribute('camera-orbit', '35deg 55deg auto');
        viewer.setAttribute('shadow-intensity', '0.5');
        viewer.setAttribute('interaction-prompt', 'none');
        viewer.setAttribute('loading', 'eager');
        viewer.addEventListener('load', () => {
          $('.surface-placeholder', stage).hidden = true;
          $('.surface-controls', stage).hidden = false;
          status.textContent = 'Drag to rotate · Scroll or pinch to zoom · Arrow keys rotate when focused';
        });
        viewer.addEventListener('error', () => {
          viewer.remove(); loading = false; load.disabled = false;
          $('.surface-placeholder', stage).hidden = false;
          $('.surface-controls', stage).hidden = true;
          status.textContent = '3D could not load in this browser. Retry or use the GLB download above.';
        });
        stage.prepend(viewer);
      } catch {
        loading = false; load.disabled = false;
        status.textContent = '3D could not load. Please retry or download the GLB above.';
      }
    });
    $('.rotate-surface', stage).addEventListener('click', e => {
      const on = !viewer.hasAttribute('auto-rotate');
      viewer.toggleAttribute('auto-rotate', on); e.target.setAttribute('aria-pressed', String(on));
      e.target.textContent = on ? 'Pause rotation' : 'Auto-rotate';
    });
    $('.reset-surface', stage).addEventListener('click', () => {
      viewer.setAttribute('camera-orbit', '35deg 55deg auto');
      viewer.setAttribute('camera-target', 'auto auto auto');
      viewer.setAttribute('field-of-view', 'auto');
      viewer.removeAttribute('auto-rotate');
      const rotate = $('.rotate-surface', stage); rotate.setAttribute('aria-pressed', 'false'); rotate.textContent = 'Auto-rotate';
    });
    const switchModel = optimized => {
      status.textContent = 'Loading selected geometry…';
      viewer.src = optimized ? stage.dataset.modelSrc : stage.dataset.originalSrc;
      viewer.alt = optimized ? (stage.dataset.modelAlt || 'Optimized curved shell') : (stage.dataset.originalAlt || 'Original design surface');
      $('.show-optimized', stage).setAttribute('aria-pressed', String(optimized));
      $('.show-original', stage).setAttribute('aria-pressed', String(!optimized));
    };
    $('.show-optimized', stage).addEventListener('click', () => {
      if ($('.show-optimized', stage).getAttribute('aria-pressed') !== 'true') switchModel(true);
    });
    $('.show-original', stage).addEventListener('click', () => {
      if ($('.show-original', stage).getAttribute('aria-pressed') !== 'true') switchModel(false);
    });
  }
})();

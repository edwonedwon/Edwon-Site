(function () {
  'use strict';

  var FILTER_KEY = 'edwon_filter';
  var SCROLL_KEY = 'edwon_scroll';

  // ── Category Filter ────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    var list     = document.querySelector('[fs-cmsfilter-element="list"]');
    var resetBtn = document.querySelector('[fs-cmsfilter-element="reset"]');
    // Attach to labels so the full click area (radio circle + text) works
    var filterLabels = document.querySelectorAll(
      '[fs-cmsfilter-element="filters"] .category-radio-buttons-container'
    );

    if (!list || !filterLabels.length) return;

    var items = list.querySelectorAll('.works-collection-item');

    function itemCategories(item) {
      var cats = [];
      item.querySelectorAll('[fs-cmsfilter-field="Category"]').forEach(function (el) {
        var t = el.textContent.trim();
        if (t) cats.push(t);
      });
      return cats;
    }

    function setActive(category) {
      filterLabels.forEach(function (label) {
        var span = label.querySelector('[fs-cmsfilter-field="Category"]');
        var dot  = label.querySelector('.category-radio-button');
        if (dot) dot.classList.toggle('w--redirected-checked', !!(span && span.textContent.trim() === category));
      });
    }

    function showAll() {
      items.forEach(function (item) { item.style.display = ''; });
      setActive(null);
      try { sessionStorage.removeItem(FILTER_KEY); } catch (e) {}
    }

    function filterBy(category) {
      items.forEach(function (item) {
        item.style.display = itemCategories(item).indexOf(category) !== -1 ? '' : 'none';
      });
      setActive(category);
      try { sessionStorage.setItem(FILTER_KEY, category); } catch (e) {}
    }

    // Click on label (whole area: radio circle + text)
    filterLabels.forEach(function (label) {
      label.addEventListener('click', function (e) {
        e.preventDefault();
        var span = label.querySelector('[fs-cmsfilter-field="Category"]');
        var cat  = span ? span.textContent.trim() : null;
        if (!cat) return;
        var current;
        try { current = sessionStorage.getItem(FILTER_KEY); } catch (e) {}
        // Toggle off if clicking the already-active filter
        current === cat ? showAll() : filterBy(cat);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showAll();
      });
    }

    // ── Restore filter from sessionStorage (persists across bfcache reload) ──

    var savedFilter;
    try { savedFilter = sessionStorage.getItem(FILTER_KEY); } catch (e) {}
    if (savedFilter) filterBy(savedFilter);

    // ── Restore scroll position ───────────────────────────────────────────────

    var savedScroll;
    try { savedScroll = sessionStorage.getItem(SCROLL_KEY); } catch (e) {}
    if (savedScroll) {
      requestAnimationFrame(function () {
        window.scrollTo(0, parseInt(savedScroll, 10) || 0);
      });
      try { sessionStorage.removeItem(SCROLL_KEY); } catch (e) {}
    }

    // Save scroll position before leaving the page
    window.addEventListener('beforeunload', function () {
      try { sessionStorage.setItem(SCROLL_KEY, String(window.scrollY || 0)); } catch (e) {}
    });
  });

  // ── Hover Overlay Reset ────────────────────────────────────────────────────
  // On bfcache restore, Webflow IX2's internal state machine still thinks
  // elements are "hovered". Re-initialising IX2 resets both the inline styles
  // and the state machine so the first hover works correctly again.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    try {
      window.Webflow.require('ix2').init();
    } catch (err) {}
  });

}());

(function () {

  // ── Category Filter ─────────────────────────────────────────────
  // Finsweet reads radio `value` attributes ("Radio") to match items,
  // but the Webflow export sets all values to the placeholder "Radio".
  // We handle filtering ourselves using the visible label text instead.
  document.addEventListener('DOMContentLoaded', function () {
    var list = document.querySelector('[fs-cmsfilter-element="list"]');
    var resetBtn = document.querySelector('[fs-cmsfilter-element="reset"]');
    var filterBtns = document.querySelectorAll(
      '[fs-cmsfilter-element="filters"] [fs-cmsfilter-field="Category"]'
    );

    if (!list || !filterBtns.length) return;

    var items = list.querySelectorAll('.works-collection-item');

    function showAll() {
      items.forEach(function (item) { item.style.display = ''; });
    }

    function filterBy(category) {
      items.forEach(function (item) {
        var catEls = item.querySelectorAll('[fs-cmsfilter-field="Category"]');
        var match = false;
        catEls.forEach(function (el) {
          if (el.textContent.trim() === category) match = true;
        });
        item.style.display = match ? '' : 'none';
      });
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBy(btn.textContent.trim());
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showAll();
      });
    }
  });

  // ── Hover Overlay Reset ─────────────────────────────────────────
  // Force a fresh load on back navigation so Webflow hover state
  // is always clean.
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) window.location.reload();
  });

}());

/* ============================================================
   EDWON.TV — archive.js
   Renders the archive grid from data/archive.json.
   Items with a youtube URL open in a new tab; others are inert.
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('archive-grid');
  if (!grid) return;

  try {
    const items = await fetchJSON('data/archive.json');
    grid.innerHTML = items.map(archiveCard).join('');
  } catch (err) {
    grid.innerHTML = `<div class="loading">Could not load archive.</div>`;
    console.error(err);
  }
});

function archiveCard(item) {
  const href   = item.youtube || '#';
  const extras = item.youtube ? 'target="_blank" rel="noopener"' : '';

  return `
    <a href="${href}" ${extras} class="archive-card" title="${item.title}">
      <div class="card-thumb">
        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="card-overlay">
        <h3 class="card-title">${item.title}</h3>
      </div>
    </a>
  `;
}

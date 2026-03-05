/* ============================================================
   EDWON.TV — creations.js
   Renders the portfolio grid from data/projects.json
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  try {
    const projects = await fetchJSON('data/projects.json');
    grid.innerHTML = projects.map(projectCard).join('');
  } catch (err) {
    grid.innerHTML = `<div class="loading">Could not load projects.</div>`;
    console.error(err);
  }
});

function projectCard(p) {
  return `
    <a href="project.html?slug=${p.id}" class="portfolio-card" title="${p.title}">
      <div class="card-thumb">
        <img src="${p.thumbnail}" alt="${p.thumbnailAlt || p.title}" loading="lazy" />
      </div>
      <div class="card-overlay">
        <h3 class="card-title">${p.title}</h3>
        <span class="card-category">${p.category}</span>
      </div>
    </a>
  `;
}

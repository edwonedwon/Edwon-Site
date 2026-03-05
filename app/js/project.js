/* ============================================================
   EDWON.TV — project.js
   Renders a project detail page from data/projects.json
   using the ?slug= URL parameter.
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const slug = new URLSearchParams(location.search).get('slug');
  const root = document.getElementById('project-root');

  if (!slug || !root) { renderNotFound(root); return; }

  try {
    const projects = await fetchJSON('data/projects.json');
    const project  = projects.find(p => p.id === slug);
    if (!project) { renderNotFound(root); return; }

    document.title = `${project.title} — EDWON`;
    root.innerHTML = renderProject(project);
  } catch (err) {
    if (root) root.innerHTML = `<div class="loading">Could not load project data.</div>`;
    console.error(err);
  }
});

function renderProject(p) {
  const metaFields = [
    { label: 'Year',   value: p.year   },
    { label: 'Client', value: p.client },
    { label: 'Role',   value: p.role   },
    { label: 'Tools',  value: p.tools  },
  ];

  return `
    <div class="project-page">

      <a href="index.html" class="project-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Creations
      </a>

      <div class="project-header">
        <div class="project-category">${p.category}</div>
        <h1 class="project-title">${p.title}</h1>
        <div class="project-meta">
          ${metaFields.filter(f => f.value).map(f => `
            <div class="project-meta-item">
              <span class="label">${f.label}</span>
              <span class="value">${f.value}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="project-media-item" style="margin-bottom:24px">
        <img src="${p.thumbnail}" alt="${p.thumbnailAlt || p.title}" />
      </div>

      ${p.media?.length ? `
        <div class="project-media">
          ${p.media.map(mediaItem).join('')}
        </div>` : ''}

      ${p.description ? `
        <div class="project-description">
          ${p.description.split('\n').filter(s => s.trim()).map(s => `<p>${s.trim()}</p>`).join('')}
        </div>` : ''}

      ${p.links?.length ? `
        <div class="project-links">
          ${p.links.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener" class="btn btn-outline">
              ${l.label} ↗
            </a>`).join('')}
        </div>` : ''}

      ${p.credits?.length ? `
        <div class="project-credits">
          <h3>Credits</h3>
          ${p.credits.map(c => `
            <div class="credit-row">
              <span class="role">${c.role}</span>
              <span class="name">${c.name}</span>
            </div>`).join('')}
        </div>` : ''}

    </div>
  `;
}

function mediaItem(m) {
  if (m.type === 'youtube') {
    return `
      <div class="project-media-item">
        <iframe
          src="https://www.youtube.com/embed/${m.id}"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>`;
  }
  if (m.type === 'image') {
    return `
      <div class="project-media-item">
        <img src="${m.src}" alt="${m.alt || ''}" loading="lazy" />
      </div>`;
  }
  return '';
}

function renderNotFound(root) {
  if (!root) return;
  document.title = '404 — EDWON';
  root.innerHTML = `
    <div class="not-found">
      <h1>404</h1>
      <p>Project not found.</p>
      <a href="index.html" class="btn">← Back to Creations</a>
    </div>
  `;
}

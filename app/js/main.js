/* ============================================================
   EDWON.TV — main.js
   Shared: nav injection, footer injection, active state,
   hamburger toggle, fetchJSON utility
   ============================================================ */

const NAV_HTML = `
  <a href="index.html" class="nav-logo" aria-label="EDWON Home">
    <img src="assets/logo.svg" alt="EDWON" />
  </a>
  <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-links">
    <a href="index.html">Creations</a>
    <a href="about.html">About</a>
    <a href="apps.html">Apps</a>
    <a href="archive.html">Archive</a>
  </div>
`;

const FOOTER_HTML = `
  <footer class="site-footer">
    <img src="assets/waving-waba.gif" alt="Waving Waba" class="footer-waba" />
    <div class="footer-social social-icons">
      <a href="mailto:edwon@edwon.tv" aria-label="Email">
        <img src="assets/icons/email.png" alt="Email" />
      </a>
      <a href="https://www.youtube.com/edwon" target="_blank" rel="noopener" aria-label="YouTube">
        <img src="assets/icons/youtube.png" alt="YouTube" />
      </a>
      <a href="https://twitter.com/edwonedwon" target="_blank" rel="noopener" aria-label="Twitter">
        <img src="assets/icons/twitter.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/edwon.tv" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="assets/icons/instagram.png" alt="Instagram" />
      </a>
      <a href="https://lensstudio.snapchat.com/creator/profile/5Dp9s1sORWb-hPPXTqgJoA" target="_blank" rel="noopener" aria-label="Snapchat">
        <img src="assets/icons/snapchat.png" alt="Snapchat" />
      </a>
    </div>
    <p class="footer-copy">© ${new Date().getFullYear()} Edwon / Cuteness Technology</p>
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl    = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl)    navEl.innerHTML    = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  setActiveNav();
  initHamburger();
});

function setActiveNav() {
  const slug = location.pathname.replace(/\/$/, '').split('/').pop().replace(/\.html$/, '') || 'index';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const linkSlug = a.getAttribute('href').replace(/\.html$/, '').split('/').pop() || 'index';
    a.classList.toggle('active', linkSlug === slug);
  });
}

function initHamburger() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

/* Used by creations.js, archive.js, project.js */
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} loading ${url}`);
  return res.json();
}

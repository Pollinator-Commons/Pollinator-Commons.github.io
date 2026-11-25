// ---- Section navigation -------------------------------------
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Update nav link active state
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.section === id);
  });

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile nav if open
  document.getElementById('main-nav').classList.remove('open');
}

// ---- Mobile nav toggle --------------------------------------
document.getElementById('nav-toggle').addEventListener('click', function () {
  document.getElementById('main-nav').classList.toggle('open');
});

// ---- Handle hash on load ------------------------------------
function handleHash() {
  const hash = window.location.hash.replace('#', '');
  const valid = ['home', 'about', 'team', 'research', 'publications', 'news', 'contact'];
  if (hash && valid.includes(hash)) {
    showSection(hash);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  handleHash();
  // Intercept nav link clicks to prevent default jump, then show section
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const section = this.dataset.section;
      history.pushState(null, '', '#' + section);
      showSection(section);
    });
  });
  // Also hook the hero buttons
  document.querySelectorAll('[onclick]').forEach(el => {
    // onclick handlers already set via HTML — no-op here
  });
});

window.addEventListener('hashchange', handleHash);

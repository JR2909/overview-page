async function loadServices() {
  try {
    const res = await fetch('data/services.json');
    const services = await res.json();
    renderGrid(services);
  } catch (err) {
    console.error('Fehler beim Laden der Services:', err);
  }
}

function renderGrid(services) {
  const grid = document.getElementById('app-grid');

  services.forEach(service => {
    const card = document.createElement('a');
    card.href = service.url;
    card.className = 'card';
    card.setAttribute('aria-label', service.name + ' öffnen');

    // Per-card color via CSS custom properties
    const r = parseInt(service.color.slice(1, 3), 16);
    const g = parseInt(service.color.slice(3, 5), 16);
    const b = parseInt(service.color.slice(5, 7), 16);
    card.style.setProperty('--card-color', `rgba(${r},${g},${b},0.18)`);
    card.style.setProperty('--card-glow',  `rgba(${r},${g},${b},0.25)`);

    card.innerHTML = `
      <div class="icon-wrap">
        <img src="${service.icon}" alt="${service.name} Logo" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-name">${service.name}</div>
        <div class="card-desc">${service.description}</div>
      </div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadServices);

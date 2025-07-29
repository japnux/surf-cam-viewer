import { spots } from './spots.js';

const grid = document.getElementById('grid');
const search = document.getElementById('search');

function render(list) {
  grid.innerHTML = '';
  list.forEach((s, i) => {
    const delay = i * 0.05; // décalage animation
    grid.insertAdjacentHTML(
      'beforeend',
      `<a href="spot.html?id=${encodeURIComponent(s.id)}"
          class="card" style="--d:${delay}s">
          <figure>
            <img src="${s.poster}" alt="Miniature ${s.name}" loading="lazy" decoding="async" />
            <figcaption>
              <h3>${s.name}</h3>
              <div class="subtitle">${s.city}</div>
            </figcaption>
          </figure>
        </a>`
    );
  });
}

// première passe
render(spots);

// filtrage temps-réel
search.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  render(
    spots.filter(s =>
      `${s.name} ${s.city} ${s.dep}`.toLowerCase().includes(q)
    )
  );
});

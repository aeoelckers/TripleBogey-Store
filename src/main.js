const products = [
  { name: 'Guante Grip Control', price: '$9.990', tag: 'Más vendido', description: 'Cuero sintético suave, palma reforzada y ajuste respirable para rondas largas.' },
  { name: 'Toalla Microfibra Pro', price: '$7.490', tag: 'Selección TBS', description: 'Limpieza rápida para palos y pelotas, con clip metálico para enganchar al bolso.' },
  { name: 'Pack Tees Bamboo', price: '$4.990', tag: 'Eco friendly', description: 'Set de tees resistentes en bambú para entrenamientos y salidas de fin de semana.' },
  { name: 'Marcador Magnético', price: '$5.990', tag: 'Nuevo', description: 'Diseño minimalista, imán firme y terminación premium para el green.' },
];

const grid = document.querySelector('#product-grid');

grid.innerHTML = products.map((product) => `
  <article class="product-card">
    <span class="tag">${product.tag}</span>
    <div class="mini-visual">▰</div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="buy-row"><strong>${product.price}</strong><button type="button" aria-label="Agregar ${product.name}">Agregar</button></div>
  </article>
`).join('');

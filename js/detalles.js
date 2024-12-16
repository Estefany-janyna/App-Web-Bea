const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');
const productosUrl = "../Api/api.json";

function cargarDetalles() {
  fetch(productosUrl)
    .then(response => response.json())
    .then(data => {
      const producto = data.productos.find(p => p.id == productoId);
      const productoNombre = document.getElementById("producto-nombre");
      const productoDetalle = document.getElementById("producto-detalle");

      productoNombre.textContent = producto.nombre;

      // Enlace de WhatsApp dinámico
      const whatsappLink = `https://wa.me/51987654321?text=Hola%2C%20quiero%20comprar%20el%20producto%20${encodeURIComponent(producto.nombre)}%20con%20la%20descripción%20${encodeURIComponent(producto.descripcion)}%20y%20el%20precio%20de%20$${producto.precio}`;

      productoDetalle.innerHTML = `
        <div class="w-1/3">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-auto object-cover rounded-lg">
        </div>
        <div class="w-2/3">
          <h4 class="text-2xl font-bold mt-4">Descripción</h4>
          <p>${producto.descripcion}</p>
          <h4 class="text-xl font-bold mt-4">Precio: $${producto.precio}</h4>
          <button class="bg-pink-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-pink-700">
            Añadir al carrito
          </button>
          <!-- Botón de WhatsApp -->
          <a href="${whatsappLink}" target="_blank" class="bg-green-500 text-white px-6 py-3 mt-4 ml-4 rounded-lg hover:bg-green-700">
            Comprar via WhatsApp
          </a>
        </div>
      `;
    });
}

window.onload = cargarDetalles;

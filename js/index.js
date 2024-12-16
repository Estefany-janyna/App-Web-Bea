// Llamar a los productos desde el archivo JSON
const productosUrl = "../Api/api.json";

function cargarProductos() {
  fetch(productosUrl)
    .then(response => response.json())
    .then(data => {
      const productosLista = document.getElementById("productos-lista");
      productosLista.innerHTML = "";

      data.productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto-card", "bg-white", "p-6", "rounded-lg", "shadow-lg", "mb-6");

        productoDiv.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-48 object-cover rounded-lg mb-4">
          <h4 class="text-xl font-bold mt-4 mb-2">${producto.nombre}</h4>
          <p class="text-lg text-gray-600 mb-4">${producto.categoria}</p>
          <p class="mb-6">${producto.descripcion}</p>
          <!-- Línea horizontal para separar el contenido -->
          <hr class="border-t-2 border-gray-200 my-6">
          <!-- Añadir margen superior para separar el botón -->
          <a href="detalles.html?id=${producto.id}" class="bg-pink-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-pink-700">Ver Detalles</a>
        `;
        productosLista.appendChild(productoDiv);
      });
    });
}

window.onload = cargarProductos;



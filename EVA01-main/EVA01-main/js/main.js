document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  // Toggle navbar visibility on small screens
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Get the featured products container
  const featuredContainer = document.getElementById("featuredProducts");

  if (featuredContainer) {
    // Fetch product data from JSON file
    fetch("js/productos.json")
      .then((response) => response.json())
      .then((products) => {
        // Select 3 random products
        const randomProducts = products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        // Generate HTML for each product
        const html = randomProducts
          .map(
            (p) => `
        <div class="producto">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>${p.price} USD</p>
          <a href="productos.html?id=${p.id}" class="btn">View Details</a>
        </div>
      `,
          )
          .join("");

        // Display them on the page
        featuredContainer.innerHTML = html;
      })
      .catch(() => {
        featuredContainer.innerHTML =
          "<p>An error occurred while loading products.</p>";
      });
  }
});




/* productos */


document.addEventListener("DOMContentLoaded", function () {
  // The previous code remains the same

  // Get the products container element
  const productsContainer = document.getElementById("productsContainer");

  if (productsContainer) {
    // Fetch product data from the JSON file
    fetch("js/productos.json")
      .then((response) => response.json())
      .then((products) => {
        // Generate HTML for each product
        const html = products
          .map(
            (p) => `
        <div class="producto">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>${p.price} USD</p>
          <a href="product.html?id=${p.id}" class="btn">View Details</a>
        </div>
      `,
          )
          .join("");

        // Display the products on the page
        productsContainer.innerHTML = html;
      })
      .catch(() => {
        productsContainer.innerHTML =
          "<p>An error occurred while loading products.</p>";
      });
  }
});


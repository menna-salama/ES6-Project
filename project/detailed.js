 const url = location.href;
    const parts = url.split("id=");
    const productId = parts.length > 1 ? parts[1].split("&")[0] : null;

    if (productId && window.products[productId]) {
        const product = window.products[productId];

        document.getElementById("product-name").innerHTML = `Name : ${product.name}`;
        document.getElementById("product-price").innerHTML = `Price : $${product.price}`;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-description").innerHTML = `Description: ${product.description}`;
        document.getElementById("quantity").innerHTML = `Quantity: ${product.quantity}`;

        document.querySelector(".btn2").addEventListener("click", function () {
            addToCart(productId);
        });
    } else {
        document.getElementById("product-container").innerHTML = "<h2>Product Not Found</h2>";
    }

    function addToCart(productId) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      let productIndex = cart.findIndex(item => item.id == productId);
      if (productIndex !== -1) {
          cart[productIndex].quantity += 1;
      } else {
          let product = window.products[productId];
          if (!product) {
              alert("Error: Product not found!");
              return;
          }
  
          cart.push({
              id: productId,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1
          });
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
  }
  
 

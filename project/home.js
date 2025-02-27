//////////////////////////////------------slideer-------
let currentIndex = 0;  
const slides = document.querySelectorAll(".slide"); 
const totalSlides = slides.length; 
function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;  
    } else if (index >= totalSlides) {
        currentIndex = 0;  
    } else {
        currentIndex = index;
    }
    let offset = -currentIndex * 100; 
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
setInterval(() => {
    nextSlide();
}, 2500);
/////////////////////////////////////////////////
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let productIndex = cart.findIndex(item => item.id == productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        let product = products[productId];
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


 //////////////////////////////////////////////////////arrow
const scrollTopBtn = document.getElementById("scrollTopBtn");

addEventListener("scroll", function () {
    if ( scrollY > 300) {
        scrollTopBtn.style.display = "flex";  
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    scrollTo({
        top: 0,
    });
});



/////////////////////////////////////////
function filterProducts(category) {
    let productColumns = document.querySelectorAll(".col-lg-3");
    productColumns.forEach(column => {
        let productCard = column.querySelector(".product-card");
        
        if (category === "all" || productCard.getAttribute("data-category") === category) {
            column.classList.remove("d-none");  
        } else {
            column.classList.add("d-none");  
        }
    });
}



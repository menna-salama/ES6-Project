function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return decodeURIComponent(cookie[1]); 
        }
    }
    return null;
}
let firstName = getCookie("firstName");
let usernameSpan = document.querySelector(".username");
if (firstName && usernameSpan) {
    usernameSpan.textContent = firstName;
} 


/////////////////////////////////////////////////////////
window.products = {
    "1": { name: "Wooden Chair", price: 65, image: "images/arrivals1.png", description: "Comfortable and stylish wooden chair.", quantity: 7 },
    "2": { name: "Stylish Chair", price: 80, image: "images/arrivals2.png", description: "A stylish chair for modern interiors.", quantity: 8 },
    "3": { name: "Armchair", price: 40, image: "images/arrivals3.png", description: "A cozy armchair for relaxing moments.", quantity: 3 },
    "4": { name: "Wooden Armchair", price: 100, image: "images/arrivals4.png", description: "Premium wooden armchair with elegant design.", quantity: 5 },
    "5": { name: "Wooden Chair", price: 65, image: "images/arrivals5.png", description: "A durable and comfortable wooden chair for your home.", quantity: 10 },
    "6": { name: "Stylish Chair", price: 80, image: "images/arrivals6.png", description: "A modern stylish chair that enhances any room's aesthetic.", quantity: 2 },
    "7": { name: "Armchair", price: 40, image: "images/arrivals7.png", description: "A cozy and compact armchair, perfect for small spaces.", quantity: 8 },
    "8": { name: "Wooden Armchair", price: 100, image: "images/arrivals8.png", description: "Elegant wooden armchair with superior craftsmanship.", quantity: 7 }
};
///////////////////////////////////////////
function goToCart() {
    window.location.href = "cart.html";
  }

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
/////////////////////////////////

 
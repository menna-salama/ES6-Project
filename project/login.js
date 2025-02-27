let loginForm = document.getElementById("loginForm");
let signUpButton = document.getElementById("sign");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let emailInput = document.querySelector("#email");
        let passwordInput = document.querySelector("#password");
        let messageBox = document.getElementById("message");
        let email = emailInput.value.trim();
        let password = passwordInput.value;
        let storedEmail = getCookie("email")?.trim();
        let storedPassword = getCookie("password")?.trim();
        if (!storedEmail || !storedPassword) {
            messageBox.innerHTML = "Don't have account";
            messageBox.style.color = "red";
            return;
        }
        if (email === storedEmail && password === storedPassword) {
            messageBox.innerHTML = "success";
            messageBox.style.color = "green";
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
        } else {
            messageBox.innerHTML = "Incorrect Email or Password";
            messageBox.style.color = "red";
        }
    });
}
if (signUpButton) {
    signUpButton.addEventListener("click", function () {
        location.href = "register.html";
    });
}
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0].trim() === name) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return null;
}

let register = document.getElementById("registerForm");

if (register) {
    register.addEventListener("submit", function(event) {
        event.preventDefault();  

        let firstName = document.getElementById("firstName").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let messageBox = document.getElementById("message");
        let nameRegex = /^[A-Za-z\u0600-\u06FF]{3,}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

        let errors = [];

        if (!nameRegex.test(firstName)) {
            errors.push("Name must be at least 3 letters.");
        }
        if (!emailRegex.test(email)) {
            errors.push("Not  allowed ");
        }
        if (!passwordRegex.test(password)) {
            errors.push("Please enter a strong password");
        }
        if (password !== confirmPassword) {
            errors.push(" Passwords do not match. ");
        }

        
        messageBox.innerHTML = "";
        if (errors.length > 0) {
            messageBox.style.color = "red";
            let errorList = document.createElement("ul");
            errors.forEach(error => {
                let item = document.createElement("li");
                item.textContent = error;
                errorList.appendChild(item);
            });

            messageBox.appendChild(errorList);
        } else {
            messageBox.innerHTML = "Register succes";
            messageBox.style.color = "green";
            document.cookie = `firstName=${encodeURIComponent(firstName)}; expires=${getCookieExpiration(30)}; path=/`;
            document.cookie = `email=${encodeURIComponent(email)}; expires=${getCookieExpiration(30)}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; expires=${getCookieExpiration(30)}; path=/`;
 
            setTimeout(() => {
                window.location.href = "login.html";
            }, 500);
        }
    });
}
 
function getCookieExpiration(days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}

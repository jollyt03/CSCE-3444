function handleRegisterSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("register-email").value;
    const pwd = document.getElementById("register-password").value;

    console.log(email, pwd);
    const data = {
        email: email,
        password: pwd,
    };

    fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            if (data.success) {
                // Successful registration, redirect to login page
                // window.location.href = "/login";
                alert("Registration successful");
                window.location.href = "/public/login.html";
            } else {
                // Handle registration error
                alert("Email already exists");
            }
        })
        .catch((error) => {
            console.error(error);
            // Handle registration error
        });
}

const registerForm = document.getElementById("registerform");
registerForm.addEventListener("submit", handleRegisterSubmit);

const login = localStorage.getItem("login");
// hode login btn if login is true
if (login === "true") {
    const loginBtn = document.getElementById("login-btn");
    const register = document.getElementById("register");
    loginBtn.style.display = "none";
    register.style.display = "none";
} else {
    const logoutBtn = document.getElementById("logout");
    logoutBtn.style.display = "none";
}

// logout
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("login");
    window.location.href = "login.html";
});

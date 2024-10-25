function handleLoginSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const pwd = document.getElementById("login-password").value;

    console.log(email, pwd);
    const data = {
        email: email,
        password: pwd,
    };

    fetch("http://localhost:3000/api/login", {
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
                alert("Login succes");
                localStorage.setItem("login", "true")
                // Successful login, redirect to dashboard   or home page
                window.location.href = "/public/items.html";
            } else {
                // Handle login error
                alert("Invalid email or password");
            }
        })
        .catch((error) => {
            console.error(error);
            // Handle login error
        });
}

// Attach event listeners to forms
const loginForm = document.getElementById("loginform");
loginForm.addEventListener("submit", handleLoginSubmit); 


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


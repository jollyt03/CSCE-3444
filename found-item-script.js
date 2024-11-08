
function saveFoundItems(item) {
    // make fetch call to save item
    fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Found item reported successfully!");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// Handle form submission for reporting lost item
document.getElementById("reportFoundForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-description").value;
    const itemLocation = document.getElementById("item-location").value;
    const itemDate = document.getElementById("item-date").value;
    const contactInfo = document.getElementById("contact-info").value;
    const itemImage = document.getElementById("item-image").files[0];

    // Create a new lost item object
    const newItem = {
        id: Date.now(),
        name: itemName,
        description: itemDescription,
        location: itemLocation,
        date: itemDate,
        contact: contactInfo,
        image: itemImage.name,
        status: "found",
    };

    // Save the updated list back to localStorage
    saveFoundItems(newItem);

    // Clear the form
    // document.getElementById("reportFoundForm").reset();

});

const login = localStorage.getItem("login");
// hode login btn if login is true
if (login === 'true') {
    const loginBtn = document.getElementById("login-btn");
    const register = document.getElementById("register");
    loginBtn.style.display = "none";
    register.style.display = "none";
} else {
    const logoutBtn = document.getElementById("logout");
    logoutBtn.style.display = "none";
}

document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("login");
    window.location.href = "login.html";
});
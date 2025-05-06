document.addEventListener("DOMContentLoaded", function () { 
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get input values
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Validate fields (ensure all fields are filled)
            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return; // Stop execution if fields are empty
            }

            // Redirect to dashboard
            window.location.href = "dashboard.html";
        });
    }

    // Redirect to "Forgot Password" page when clicking the link
    const forgotPasswordLink = document.querySelector(".forgot-password");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = "forgotPswrd.html"; // Redirect to Forgot Password page
        });
    }
});

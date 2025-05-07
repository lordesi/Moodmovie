
/* Error filling out the form */



const form = document.querySelector("form");
const email =  document.getElementById("email");
const password =  document.getElementById("password");
const errorElement = document.getElementById("error-message");

form.addEventListener("submit", function(e) { e.preventDefault(); 
    if (!emaSil.value.trim() || !password.value.trim()) {
        errorElement.textContent = "Please fill out all fields.";
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }
});
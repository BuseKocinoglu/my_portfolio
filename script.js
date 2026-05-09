let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// --- CV MODAL KONTROLLERİ ---
const modal = document.getElementById("cvModal");
const inputField = document.getElementById("cvCode");
const errorMsg = document.getElementById("error-msg");

function accessCV() {
    modal.style.display = "block";
    inputField.value = ""; 
    errorMsg.style.display = "none";
    inputField.focus(); 
}

function closeModal() {
    modal.style.display = "none";
}

function checkCode() {
    const secretCode = "systembus26ceng"; 
    
    if (inputField.value === secretCode) {
        window.open("buse_kocinoglu.pdf", "_blank");
        closeModal();
    } else {
        errorMsg.style.display = "block";
        inputField.style.border = "2px solid #ff4d4d"; 
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});
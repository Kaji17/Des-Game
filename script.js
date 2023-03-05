function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
window.onclick = function (event) {
    if (event.target.className === "form-popup") {
        event.target.style.display = "none";
    }
};

window.load(openForm())
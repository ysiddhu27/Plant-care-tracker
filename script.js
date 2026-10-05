const button = document.querySelector("button");

button.addEventListener("click", function () {
    button.textContent = "✓ Watered Today";
    button.style.backgroundColor = "#1b5e20";
    alert("🌱 Money Plant has been watered!");
});
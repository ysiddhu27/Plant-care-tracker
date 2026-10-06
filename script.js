const addPlantBtn = document.getElementById("addPlantBtn");

const plantList = document.getElementById("plantList");


addPlantBtn.addEventListener("click", function () {

    const plantName = prompt("Enter plant name:");

    if (plantName === null || plantName.trim() === "") {
        return;
    }

    const plantCard = document.createElement("div");

    plantCard.className = "plant-card";

    plantCard.innerHTML = `
        <h2>🌱 ${plantName}</h2>

        <p>💧 Water: Every 3 days</p>

        <p>☀️ Sunlight: Partial sunlight</p>

        <p>📅 Next Care: October 8</p>

        <button class="water-btn">Mark as Watered</button>
    `;

    plantList.appendChild(plantCard);

    alert("🌱 " + plantName + " has been added!");
});


document.addEventListener("click", function (event) {

    if (event.target.classList.contains("water-btn")) {

        event.target.textContent = "✓ Watered Today";

        alert("🌱 Plant has been watered!");

    }

});
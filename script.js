const addPlantBtn = document.getElementById("addPlantBtn");
const plantList = document.getElementById("plantList");

// Add Plant
addPlantBtn.addEventListener("click", function () {

    const name = prompt("Enter plant name:");

    if (!name) {
        return;
    }

    const water = prompt("How often should you water it?", "Every 3 days");

    const sunlight = prompt("Enter sunlight requirement:", "Partial sunlight");

    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";

    plantCard.innerHTML = `
        <h2>🌱 ${name}</h2>

        <p>💧 Water: ${water}</p>

        <p>☀️ Sunlight: ${sunlight}</p>

        <p>📅 Next Care: Today</p>

        <button class="water-btn">Mark as Watered</button>

        <button class="edit-btn">✏️ Edit</button>

        <button class="delete-btn">🗑️ Delete</button>
    `;

    plantList.appendChild(plantCard);

    addButtonFunctions(plantCard);
});


// Edit and Delete functions
function addButtonFunctions(plantCard) {

    const editBtn = plantCard.querySelector(".edit-btn");
    const deleteBtn = plantCard.querySelector(".delete-btn");
    const waterBtn = plantCard.querySelector(".water-btn");

    // Edit
    editBtn.addEventListener("click", function () {

        const currentName = plantCard.querySelector("h2").textContent
            .replace("🌱", "")
            .trim();

        const newName = prompt("Enter new plant name:", currentName);

        if (newName) {
            plantCard.querySelector("h2").textContent = "🌱 " + newName;
        }
    });


    // Delete
    deleteBtn.addEventListener("click", function () {

        const confirmDelete = confirm("Do you want to delete this plant?");

        if (confirmDelete) {
            plantCard.remove();
        }
    });


    // Water
    waterBtn.addEventListener("click", function () {

        waterBtn.textContent = "✓ Watered Today";
    });
}


// Enable buttons for the existing plant
document.querySelectorAll(".plant-card").forEach(function (plantCard) {
    addButtonFunctions(plantCard);
});
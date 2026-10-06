const addPlantBtn = document.getElementById("addPlantBtn");
const plantList = document.getElementById("plantList");

// Add Plant
addPlantBtn.addEventListener("click", function () {

    const name = prompt("Enter plant name:");

    if (!name) return;

    const water = prompt(
        "How often should you water it?",
        "Every 3 days"
    );

    const sunlight = prompt(
        "Enter sunlight requirement:",
        "Partial sunlight"
    );

    const plantCard = document.createElement("div");

    plantCard.className = "plant-card";

    plantCard.innerHTML = `
        <h2>🌱 ${name}</h2>

        <p>💧 Water: ${water}</p>

        <p>☀️ Sunlight: ${sunlight}</p>

        <p>📅 Next Care: Today</p>

        <button class="water-btn">💧 Mark as Watered</button>

        <button class="edit-btn">✏️ Edit</button>

        <button class="delete-btn">🗑️ Delete</button>
    `;

    plantList.appendChild(plantCard);

    addButtonFunctions(plantCard);
});


// Edit, Delete and Water functions
function addButtonFunctions(plantCard) {

    const editBtn = plantCard.querySelector(".edit-btn");
    const deleteBtn = plantCard.querySelector(".delete-btn");
    const waterBtn = plantCard.querySelector(".water-btn");


    // EDIT
    editBtn.addEventListener("click", function () {

        const heading = plantCard.querySelector("h2");

        const currentName = heading.textContent
            .replace("🌱", "")
            .trim();

        const newName = prompt(
            "Enter new plant name:",
            currentName
        );

        if (newName && newName.trim() !== "") {

            heading.textContent = "🌱 " + newName.trim();

        }

    });


    // DELETE
    deleteBtn.addEventListener("click", function () {

        const confirmDelete = confirm(
            "Do you want to delete this plant?"
        );

        if (confirmDelete) {

            plantCard.remove();

        }

    });


    // WATER
    waterBtn.addEventListener("click", function () {

        waterBtn.textContent = "✓ Watered Today";

    });

}


// Enable buttons for existing plants
document
    .querySelectorAll(".plant-card")
    .forEach(function (plantCard) {

        addButtonFunctions(plantCard);

    });
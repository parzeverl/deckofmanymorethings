particlesJS('particles-js', {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 1100 
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle', 
            stroke: {
                width: 3,
                color: '#ffffff'
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 10, 
            random: true,
            anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: '#f700ef',
            opacity: 0,
            width: 3,
        },
        move: {
            enable: true,
            speed: 3, 
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'grab' 
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            }
        }
    },
    retina_detect: true
});

let frameCount = 0;
let lastTime = performance.now();

function updateFPS() {
    let now = performance.now();
    let deltaTime = now - lastTime;
    frameCount++;
    if (deltaTime >= 1000) {
        let fps = frameCount;
        document.getElementById("fpsCounter").innerText = `FPS: ${fps}`;
        frameCount = 0;
        lastTime = now;
    }
    requestAnimationFrame(updateFPS);
}

requestAnimationFrame(updateFPS);
function showOverlay() {
  document.getElementById("alert").style.display = "block";
}
function hideOverlay() {
  document.getElementById("alert").style.display = "none";
}
 <script>
      const fullDeck = [
    { name: "Aberration" },
    { name: "Angel" },
    { name: "Beast" },
    { name: "Book" },
    { name: "Bridge" },
    { name: "Campfire" },
    { name: "Cavern" },
    { name: "Celestial" },
    { name: "Clock" },
    { name: "Construct" },
    { name: "Corpse" },
    { name: "Crossroads" },
    { name: "Crown" },
    { name: "Door" },
    { name: "Dragon" },
    { name: "Elemental" },
    { name: "Expert" },
    { name: "Fey" },
    { name: "Fiend" },
    { name: "Fountain" },
    { name: "Gambler" },
    { name: "Giant" },
    { name: "Guardian" },
    { name: "Heart" },
    { name: "Humanoid" },
    { name: "Jester" },
    { name: "Key" },
    { name: "Lance" },
    { name: "Mage" },
    { name: "Map" },
    { name: "Maze" },
    { name: "Mine" },
    { name: "Mirror" },
    { name: "Monstrosity" },
    { name: "Mountain" },
    { name: "Ooze" },
    { name: "Path" },
    { name: "Pit" },
    { name: "Plant" },
    { name: "Priest" },
    { name: "Prisoner" },
    { name: "Ring" },
    { name: "Rogue" },
    { name: "Scroll" },
    { name: "Shield" },
    { name: "Ship" },
    { name: "Skull" },
    { name: "Snake" },
    { name: "Sorcerer" },
    { name: "Staff" },
    { name: "Stairway" },
    { name: "Statue" },
    { name: "Storm" },
    { name: "Sword" },
    { name: "Tavern" },
    { name: "Temple" },
    { name: "Throne" },
    { name: "Tomb" },
    { name: "Tower" },
    { name: "Trade" },
    { name: "Tree" },
    { name: "Undead" },
    { name: "Warrior" },
    { name: "Waterfall" },
    { name: "Well" },
    { name: "Wheel" },
    { name: "Wish" }
];


        let currentDeck = [...fullDeck]; // Clone full deck to current deck

        function updateDropdown() {
            let dropdown = document.getElementById("remove-card");
            dropdown.innerHTML = '<option value="">Select a card</option>'; // Reset dropdown
            currentDeck.forEach(card => {
                let option = document.createElement("option");
                option.value = card.name;
                option.textContent = card.name;
                dropdown.appendChild(option);
            });
        }

        function drawCard() {
            if (currentDeck.length === 0) {
                alert("The deck is empty! Reset the deck to draw more cards.");
                return;
            }

            let cardIndex = Math.floor(Math.random() * currentDeck.length);
            let card = currentDeck[cardIndex];

            document.getElementById("card").textContent = card.name;
            document.getElementById("card-description").textContent = card.description;
            document.getElementById("card").classList.add("show");

            currentDeck.splice(cardIndex, 1); // Remove drawn card from deck
            updateDropdown(); // Update dropdown after removal
        }

        function removeSelectedCard() {
            let dropdown = document.getElementById("remove-card");
            let selectedCardName = dropdown.value;

            if (!selectedCardName) {
                alert("Please select a card to remove.");
                return;
            }

            currentDeck = currentDeck.filter(card => card.name !== selectedCardName);
            updateDropdown();
        }

        function resetDeck() {
            currentDeck = [...fullDeck]; // Restore full deck
            document.getElementById("card").textContent = "";
            document.getElementById("card-description").textContent = "";
            document.getElementById("card").classList.remove("show");
            updateDropdown();
        }
		function viewAllCards() {
			let cardsListContainer = document.getElementById("cards-list-container");
			let cardsList = document.getElementById("cards-list");

			cardsList.innerHTML = ''; // Clear the list before populating it
			fullDeck.forEach((card, index) => {
			let listItem = document.createElement("li");
			listItem.textContent = `${index + 1}. ${card.name}: ${card.description}`;
			cardsList.appendChild(listItem);
			});

			cardsListContainer.style.display = "block"; // Show the list
		}


        function closeCardsList() {
            document.getElementById("cards-list-container").style.display = "none"; // Hide the list
        }

        // Initialize dropdown on page load
        updateDropdown();


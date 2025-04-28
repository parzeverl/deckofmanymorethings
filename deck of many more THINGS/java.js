  const initialDeck = [
      { name: "Aberration", description: "You gain telepathy within a range of 90 feet." },
      { name: "Balance*", description: "Your mind suffers a wrenching alteration, causing your alignment to change. Lawful become chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you." },
      { name: "Beast", description: "You immediately transform into a random Beast with a CR of 5 or lower. Your game statistics—including your ability scores, hit points, and possible actions—are replaced by the Beast’s game statistics, and any nonmagical equipment you’re wearing or carrying melds into your new form and can’t be used. Any magic items you’re carrying drop in an unoccupied space within 5 feet of your new form.\n\nYou remain transformed in this way for 2d12 days; nothing can alter your form while you’re under the effects of this card, but the Wish spell can end the transformation early. When you revert to your normal form, you return to the same state you were in when you initially transformed." },
      { name: "Book", description: "You gain the ability to speak, read, and write 1d6 + 2 languages of your choice." },
      { name: "Bridge", description: "You gain the ability to cast the Time Stop spell 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)." },
      { name: "Campfire", description: "You immediately gain the benefits of finishing a long rest." },
      { name: "Cavern", description: "You gain a climbing speed equal to your walking speed. You also gain the ability to move up, down, across vertical surfaces, and along ceilings, while leaving your hands free." },
      { name: "Celestial", description: "You sprout a pair of softly luminescent, feathered wings from your back and gain a flying speed of 30 feet." },
      { name: "Comet*", description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect." },
      { name: "Construct", description: "A homunculus appears in an unoccupied space within 5 feet of you. The appearance of the homunculus is determined by the DM, and the homunculus treats you as its creator." },
      { name: "Corpse", description: "You immediately drop to 0 hit points, have the unconscious condition, and must begin making death saving throws. Spells and other magical effects that restore hit points have no effect on you until you are stabilized. If you fail three death saving throws, you die and can be resurrected only by the Wish spell." },
      { name: "Crossroads", description: "Roll a d20. If the roll is even, you age 1d10 years. If the roll is odd, you become younger by 1d10 years, to a minimum of 1 year. This effect can be undone only by the Wish spell, divine intervention, or similar magic." },
      { name: "Donjon*", description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a Wish spell can reveal the location of your prison. You draw no more cards." },
      { name: "Door", description: "You gain the ability to cast the Gate spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)." },
      { name: "Dragon", description: "A dragon egg appears at your feet and immediately hatches into a dragon wyrmling. The type of dragon is chosen by the DM. The wyrmling views you as its parent and is staunchly loyal to you and your allies." },
      { name: "Elemental", description: "You become immune to one of the following damage types (choose immediately upon drawing this card): acid, cold, fire, lightning, or thunder." },
      { name: "Euryale*", description: "The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse." },
      { name: "Expert", description: "Your Dexterity score increases by 2, to a maximum of 22." },
      { name: "Fates*", description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die." },
      { name: "Fey", description: "A fey crossing opens into the Feywild, and you’re immediately pulled through it, disappearing in a flash of rainbow-colored light. You draw no more cards." },
      { name: "Fiend", description: "A powerful Fiend appears in a nearby unoccupied space and offers you a deal. The precise nature of this deal is up to the DM, but usually the Fiend offers some material reward in exchange for you and your allies completing a task for the Fiend. The Fiend is indifferent to you and can be bargained with; it keeps its side of any bargain it makes, though it might twist the wording of any agreement to suit its purposes. If attacked, or if negotiations fail and you refuse the Fiend’s offer, it returns to its home plane." },
      { name: "Flames*", description: "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies." },
      { name: "Fool*", description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level." },
      { name: "Gem", description: "You gain a massive gem worth 50,000 gold pieces." },
      { name: "Ghost", description: "You gain the ability to cast the Ghost Walk spell once. The spell lasts for 1 hour." },
      { name: "Giant", description: "You immediately gain the effects of the Giant's Strength spell. For 1 hour, your Strength score becomes 25." },
      { name: "Gold", description: "You gain 25,000 gold pieces, which appear in a bag at your feet." },
      { name: "Hunger", description: "You gain a great hunger for knowledge, magic, or artifacts. You are compelled to find a specific magic item or magical knowledge—this can lead to an ongoing quest." },
      { name: "Jester", description: "You gain 10,000 XP, or you can draw two cards from the deck of many things, keeping both results." },
      { name: "Key", description: "You gain a magical key that can open any locked door or chest in the world, and the key's power lasts for one year." },
      { name: "Knight", description: "You gain a loyal knight or paladin, bound to you for one year." },
      { name: "Moon", description: "You gain the ability to cast the Wish spell once without needing to pay the material component cost." },
      { name: "Ruin", description: "All your wealth and possessions are destroyed or stolen by the forces of fate. You lose half of all your money, magic items, and any other material possessions." },
      { name: "Skull", description: "A powerful undead creature is summoned and forced to attack you." },
      { name: "Star", description: "Your Wisdom score increases by 2, to a maximum of 22." },
      { name: "Sun", description: "You immediately gain the benefits of a long rest, and you are cured of all ailments, curses, or diseases." },
      { name: "Throne", description: "You gain the ability to rule a domain of your choice, such as a city, a keep, or a kingdom." },
      { name: "Vizier", description: "You gain a powerful advisor who can provide insight on any subject or problem you face." },
      { name: "The Fates*", description: "You are granted the ability to undo one event of your choosing, allowing you to reshape fate itself." },
      { name: "The Moon", description: "You gain the ability to change your form at will, becoming any creature you have seen before." },
      { name: "The Void", description: "A black hole opens and devours you, sending you to a distant dimension where you cannot be found." },
      { name: "The Fool", description: "You draw no more cards. You cannot be sure if this is good or bad." },
      { name: "The Dragon", description: "You gain a dragon's hoard! The DM decides how much treasure you obtain, but it’s a large amount of valuable items and gold!" },
      { name: "The Stars", description: "The next time you make an attack roll, saving throw, or ability check, you gain advantage on the roll." },
      { name: "The Crown", description: "You gain a powerful magical crown that grants you increased power and leadership abilities." },
      { name: "The Guild", description: "You become the leader of a powerful guild or faction with followers and influence." }
    ];

let deck = [...initialDeck];
const pullCardBtn = document.getElementById('pull-card-btn');
const resetDeckBtn = document.getElementById('reset-deck-btn');
const showDescriptionBtn = document.getElementById('show-description-btn');
const pulledCardDiv = document.getElementById('pulled-card');
const descriptionBox = document.getElementById('description-box');
const cardDescription = document.getElementById('card-description');


function pullCard() {
    if (deck.length === 0) {
        pulledCardDiv.innerHTML = `<h2>No cards left to pull!</h2>`;
        return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const pulledCard = deck.splice(randomIndex, 1)[0]; 

   
    pulledCardDiv.innerHTML = `
        <h2>You Pulled: ${pulledCard.name}</h2>
    `;
    pulledCardDiv.style.display = 'block'; 

  
    resetDeckBtn.style.display = 'block';
    showDescriptionBtn.style.display = 'block';

   
    cardDescription.innerHTML = pulledCard.description;
    descriptionBox.style.display = 'none'; 
}


function toggleDescription() {
    if (descriptionBox.style.display === 'none' || descriptionBox.style.display === '') {
        descriptionBox.style.display = 'block'; 
        showDescriptionBtn.innerHTML = 'Hide Description';
    } else {
        descriptionBox.style.display = 'none'; 
        showDescriptionBtn.innerHTML = 'Show Description'; 
    }
}


function resetDeck() {
    deck = [...initialDeck]; 
    resetDeckBtn.style.display = 'none'; 
    pulledCardDiv.style.display = 'none'; 
    showDescriptionBtn.style.display = 'none';
    descriptionBox.style.display = 'none';
}


pullCardBtn.addEventListener('click', pullCard);


resetDeckBtn.addEventListener('click', resetDeck);


showDescriptionBtn.addEventListener('click', toggleDescription);

const CLIENT_ID = '852529225824-euev19uv25vbh40d7usck444p4rq89q2.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDSzszuSSxPmry48Vf0aQwcnCEGWLHUwBg';


const SCOPES = 'https://www.googleapis.com/auth/drive.file';


function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
    }).then(() => {
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        } else {
            gapi.auth2.getAuthInstance().signIn();
        }
    });
}

function saveToGoogleDrive(gameData) {
    const fileMetadata = {
        'name': 'deckOfManyThings.json',
        'mimeType': 'application/json'  
    };

    const media = {
        mimeType: 'application/json',
        body: JSON.stringify(gameData)
    };

    gapi.client.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
    }).then((response) => {
        console.log('File uploaded successfully', response);
    }).catch((error) => {
        console.error('Error uploading file', error);
    });
}

function pullCard() {
    if (deck.length === 0) {
        pulledCardDiv.innerHTML = `<h2>No cards left to pull!</h2>`;
        return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const pulledCard = deck.splice(randomIndex, 1)[0]; 

    // Display the pulled card
    pulledCardDiv.innerHTML = `
      <h2>You Pulled: ${pulledCard.name}</h2>
      <p>${pulledCard.description}</p>
    `;
    pulledCardDiv.style.display = 'block'; 

    // Save the updated game state
    const gameState = { deck: deck, pulledCard: pulledCard }; 
    saveToGoogleDrive(gameState); 
}

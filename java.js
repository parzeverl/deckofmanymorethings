  const initialDeck = [
      { name: "Aberration", description: "You gain telepathy within a range of 90 feet.",  image: "assets/aberration.png"  },
      { name: "Balance", description: " Your mind suffers a wrenching alteration, causing your alignment to change. Lawful become chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.",  image: "assets/ballance.png"  },
      { name: "Beast", description: "You immediately transform into a random Beast with a CR of 5 or lower. Your game statistics—including your ability scores, hit points, and possible actions—are replaced by the Beast’s game statistics, and any nonmagical equipment you’re wearing or carrying melds into your new form and can’t be used. Any magic items you’re carrying drop in an unoccupied space within 5 feet of your new form.<br>You remain transformed in this way for 2d12 days; nothing can alter your form while you’re under the effects of this card, but the Wish spell can end the transformation early. When you revert to your normal form, you return to the same state you were in when you initially transformed.",  image: "assets/beast.png"  },
      { name: "Book", description: "You gain the ability to speak, read, and write 1d6 + 2 languages of your choice.",  image: "assets/book.png"  },
      { name: "Bridge", description: "You gain the ability to cast the Time Stop spell 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",  image: "assets/bridge.png"  },
      { name: "Campfire", description: "You immediately gain the benefits of finishing a long rest.",  image: "assets/campfire.png"  },
      { name: "Cavern", description: "You gain a climbing speed equal to your walking speed. You also gain the ability to move up, down, across vertical surfaces, and along ceilings, while leaving your hands free.",  image: "assets/cavern.png"  },
      { name: "Celestial", description: "You sprout a pair of softly luminescent, feathered wings from your back and gain a flying speed of 30 feet.",  image: "assets/celestial.png"  },
      { name: "Comet", description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.",  image: "assets/comet.png"  },
      { name: "Construct", description: "A homunculus appears in an unoccupied space within 5 feet of you. The appearance of the homunculus is determined by the DM, and the homunculus treats you as its creator.",  image: "assets/construct.png"  },
      { name: "Corpse", description: "You immediately drop to 0 hit points, have the unconscious condition, and must begin making death saving throws. Spells and other magical effects that restore hit points have no effect on you until you are stabilized. If you fail three death saving throws, you die and can be resurrected only by the Wish spell.",  image: "assets/corpse.png"  },
      { name: "Crossroads", description: "Roll a d20. If the roll is even, you age 1d10 years. If the roll is odd, you become younger by 1d10 years, to a minimum of 1 year. This effect can be undone only by the Wish spell, divine intervention, or similar magic.",  image: "assets/crossroads.png"  },
      { name: "Donjon", description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a Wish spell can reveal the location of your prison. You draw no more cards.",  image: "assets/donjon.png"  },
      { name: "Door", description: "You gain the ability to cast the Gate spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).You gain the ability to cast the Gate spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",  image: "assets/door.png"  },
      { name: "Dragon", description: "A dragon egg appears at your feet and immediately hatches into a dragon wyrmling. The type of dragon is chosen by the DM. The wyrmling views you as its parent and is staunchly loyal to you and your allies.",  image: "assets/dragon.png"  },
      { name: "Elemental", description: "You become immune to one of the following damage types (choose immediately upon drawing this card): acid, cold, fire, lightning, or thunder.",  image: "assets/elemental.png"  },
      { name: "Euryale", description: "The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.",  image: "assets/euryale.png"  },
      { name: "Expert", description: "Your Dexterity score increases by 2, to a maximum of 22.",  image: "assets/expert.png"  },
      { name: "Fates", description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.",  image: "assets/fates.png"  },
      { name: "Fey", description: " A fey crossing opens into the Feywild, and you’re immediately pulled through it, disappearing in a flash of rainbow-colored light. You draw no more cards. <br>The fey crossing appears as a shimmering fractal of light above the deck, and it remains open for 1 minute after the card is drawn. The precise location in the Feywild to which the fey crossing leads is determined by the DM.",  image: "assets/fey.png"  },
      { name: "Fiend", description: "A powerful Fiend appears in a nearby unoccupied space and offers you a deal. The precise nature of this deal is up to the DM, but usually the Fiend offers some material reward in exchange for you and your allies completing a task for the Fiend. The Fiend is indifferent to you and can be bargained with; it keeps its side of any bargain it makes, though it might twist the wording of any agreement to suit its purposes. If attacked, or if negotiations fail and you refuse the Fiend’s offer, it returns to its home plane.",  image: "assets/fiend.png"  },
      { name: "Flames", description: "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.",  image: "assets/flame.png"  },
      { name: "Fool", description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.",  image: "assets/fool.png"  },
      { name: "Gem", description: "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.",  image: "assets/gem.png"  },
      { name: "Giant", description: "You immediately grow 2d10 inches in height, and your hit point maximum and current hit points both increase by 20.",  image: "assets/giant.png"  },
      { name: "Humanoid", description: "You can immediately choose to stop drawing from the deck, regardless of how many cards you initially declared.",  image: "assets/humanoid.png"  },
      { name: "Jester", description: "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.",  image: "assets/jester.png"  },
      { name: "Key", description: "A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon.",  image: "assets/key.png"  },
      { name: "Knight", description: "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.",  image: "assets/knight.png"  },
      { name: "Lance", description: "All your ability scores increase by 1, to a maximum of 20.",  image: "assets/lance.png"  },
      { name: "Mage", description: "Your Intelligence score increases by 2, to a maximum of 22.",  image: "assets/mage.png"  },
      { name: "Map", description: "At any time you choose within 1 year of drawing this card, you can mentally name or describe an object or individual that is familiar to you. You immediately know the location of the object or individual, as well as the distance between you and the object or individual, even if the object or individual is on a different plane of existence. If you named an individual, you know if they are alive and any conditions they have. If you named an object, you know if it is broken or not. If you named a magic item that has charges, you know how many charges it has remaining.",  image: "assets/map.png"  },
      { name: "Maze", description: "You gain 1d3 levels of exhaustion.",  image: "assets/maze.png"  },
      { name: "Mine", description: "A pile of 2d6 gems (each worth 5,000 gp) and 1d10 chunks of precious ore (each worth 2,500 gp) appears at your feet.",  image: "assets/mine.png"  },
      { name: "Monstrosity", description: "A Large or larger Monstrosity with a challenge rating of 10 or less (chosen by the DM) appears in an unoccupied space within 15 feet of you. The creature is hostile toward you and attacks immediately. The creature disappears when it is killed or when you are reduced to 0 hit points. If there isn’t enough space for a Large or larger creature to appear, this card has no effect.",  image: "assets/monstrosity.png"  },
      { name: "Moon", description: "You are granted the ability to cast the Wish spell 1d3 times.",  image: "assets/moon.png"  },
      { name: "Ooze", description: "A gelatinous cube immediately appears in your space and engulfs you. The gelatinous cube is hostile and remains until it is destroyed. If there isn’t enough space for the gelatinous cube to appear, this card has no effect.",  image: "assets/ooze.png"  },
      { name: "Path", description: "Your walking speed increases by 10 feet.",  image: "assets/path.png"  },
      { name: "Pit", description: " A pit opens beneath you. You plummet 3d6 × 10 feet, take damage from the fall, and have the prone condition.",  image: "assets/pit.png"  },
      { name: "Plant", description: "You gain the ability to cast Speak with Plants without using a spell slot; you must finish a long rest before you can cast it this way again. If you have spell slots of 3rd level or higher, you can cast this spell using them. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",  image: "assets/plant.png"  },
      { name: "Priest", description: "Your Wisdom score increases by 2, to a maximum of 22.",  image: "assets/priest.png"  },
      { name: "Prisoner", description: "Glowing chains made of magical force appear and wrap around you. You have the restrained condition until the chains are destroyed or you are freed. While you have this condition, you can’t cast spells, and any magic items you’re wearing or carrying have their properties suppressed. You draw no more cards. The chains are immune to damage and can’t be dispelled using the Dispel Magic spell or similar magic. However, a Disintegrate spell destroys the chains instantly, freeing you. Another creature can also free you by succeeding on a DC 30 Dexterity check using thieves’ tools.",  image: "assets/prisoner.png"  },
      { name: "Puzzle", description: "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",  image: "assets/puzzle.png"  },
      { name: "Ring", description: "A rare or rarer magic ring appears on your finger. If you have the attunement slots available, you’re automatically attuned to the ring when it appears. The DM chooses the ring.",  image: "assets/ring.png"  },
      { name: "Rogue", description: "A nonplayer character of the DM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a Wish spell or divine intervention can end the NPC's hostility toward you.",  image: "assets/rouge.png"  },
      { name: "Ruin", description: " All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.",  image: "assets/ruin.png"  },
      { name: "Sage", description: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.",  image: "assets/sage.png"  },
      { name: "Shield", description: " A rare or rarer suit of magic armor that you are proficient with appears in your hands. The DM chooses the armor. If you lack proficiency with any armor, your base AC instead now equals 12 + your Dexterity modifier while you aren’t wearing armor.",  image: "assets/shield.png"  },
      { name: "Ship", description: "You gain proficiency in three skills chosen by the DM.",  image: "assets/ship.png"  },
      { name: "Skull", description: "You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.",  image: "assets/skull.png"  },
      { name: "Staff", description: "A rare or rarer magic rod, staff, or wand appears in your hands. The DM chooses the item.",  image: "assets/staff.png"  },
      { name: "Stairway", description: "You can choose to either decrease your number of declared draws by two or receive a rare or rarer wondrous item, which appears in your hands. The DM chooses the item.",  image: "assets/stairway.png"  },
      { name: "Star", description: " Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24.",  image: "assets/star.png"  },
      { name: "Statue", description: "You immediately have the petrified condition as your body is transformed into marble. The petrification lasts until you are freed with the Greater Restoration spell or similar magic.",  image: "assets/statue.png"  },
      { name: "Sun", description: "You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.",  image: "assets/sun.png"  },
      { name: "Talons", description: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish.",  image: "assets/talons.png"  },
      { name: "Tavern", description: "Your Charisma score increases by 2 to a maximum of 22.",  image: "assets/tavern.png"  },
      { name: "Temple", description: "A deity or entity of similar power becomes bound to aid you. At any point in time between drawing the card and when you die, you can use your action to call on this entity for divine intervention, and the entity is bound to answer. The parameters and nature of this intervention are chosen by the DM. If you die without having used this intervention, the deity fulfills its obligation by casting the Resurrection spell on you. Once the entity has answered your call for divine intervention or resurrected you, the entity is no longer bound to aid you.",  image: "assets/temple.png"  },
      { name: "Throne", description: " You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours.",  image: "assets/throne.png"  },
      { name: "Tomb", description: " At any time you choose within 1 year of drawing this card, you can cast the True Resurrection spell once without expending a spell slot or requiring material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",  image: "assets/tomb.png"  },
      { name: "Tower", description: "Draw two additional cards beyond your declared number of draws. The magic of these cards doesn’t immediately take effect; instead, choose one of the two additional cards to keep, returning the other to the deck. The magic of the card you keep takes effect immediately thereafter.",  image: "assets/tower.png" },
      { name: "Tree", description: "Your skin immediately becomes rough, like tree bark. Your base AC now equals 15 + your Dexterity modifier while you aren’t wearing armor, but you have vulnerability to fire damage. This transformation can be undone only by the Wish spell, divine intervention, or similar magic.",  image: "assets/tree.png"  },
      { name: "Undead", description: "Somewhere on the Material Plane, a revenant rises. This revenant blames you for its existence and relentlessly hunts you to exact its revenge. The revenant exists until either 1 year passes, the revenant kills you, or you use a Wish spell to banish it permanently to the afterlife.",  image: "assets/undead.png"  },
      { name: "Void", description: "This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A Wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.",  image: "assets/void.png"  },
      { name: "Warrior", description: "Your Strength score increases by 2 to a maximum of 22.",  image: "assets/warrior.png"  },
      { name: "Well", description: " You learn three cantrips of your choice from any spell list.",  image: "assets/well.png"  }
    ];

let deck = [...initialDeck];
const pullCardBtn = document.getElementById('pull-card-btn');
const resetDeckBtn = document.getElementById('reset-deck-btn');
const showDescriptionBtn = document.getElementById('show-description-btn');
const pulledCardDiv = document.getElementById('pulled-card');
const descriptionBox = document.getElementById('description-box');
const cardDescription = document.getElementById('card-description');
const axios = require('axios');
const GITHUB_TOKEN = 'your_personal_access_token';
const REPO_OWNER = 'your_github_username';
const REPO_NAME = 'your_repo_name';
const FILE_PATH = 'logs/card_pulls.txt';
const COMMIT_MESSAGE = 'Log new card pull';
const CARD_NAME = 'Dragon';
const BRANCH = 'main';

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
        showDescriptionBtn.style.display = 'none';
        return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const pulledCard = deck.splice(randomIndex, 1)[0];


    pulledCardDiv.innerHTML = `
        <h2>You Pulled: ${pulledCard.name}</h2>
        <img src="${pulledCard.image}" alt="${pulledCard.name}" style="max-width: 300px; display: block; margin: 1rem 0;">
    `;
    pulledCardDiv.style.display = 'block';


    showDescriptionBtn.style.display = 'inline-block';
    resetDeckBtn.style.display = 'inline-block';


    cardDescription.innerHTML = pulledCard.description;


    const gameState = { deck: deck, pulledCard: pulledCard };
    saveToGoogleDrive(gameState);
}
async function logCardPull(cardName) {
  const logMessage = `${new Date().toISOString()} - Pulled card: ${cardName}\n`;

  // First: Get the existing file's SHA (needed for updating)
  let sha = null;
  try {
    const getRes = await axios.get(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    sha = getRes.data.sha;
  } catch (error) {
    if (error.response && error.response.status !== 404) {
      console.error('Failed to fetch file:', error.response.data);
      return;
    }
  }

  // Prepare content (base64 encode)
  const contentRes = await axios.put(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
    message: COMMIT_MESSAGE,
    content: Buffer.from(logMessage).toString('base64'),
    branch: BRANCH,
    sha: sha
  }, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  console.log('Card pull logged successfully:', contentRes.data.commit.sha);
}

logCardPull(CARD_NAME);

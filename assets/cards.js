// Instantiating card lists and pack lists
var cardList = [];
var EOSD = [];
var PCB = [];
var IN = [];
var POFV = [];
var MOF = [];
var SA = [];
var UFO = [];
var TD = [];
var DDC = [];
var LOLK = [];
var HSIFS = [];
var WBAWC = [];

// Constructor function for creating cards
function card(name, faction, classification, cardID, cost, offense, durability, rarity, effect){
	this.name = name;
	this.faction = faction;
	this.classification = classification;
	this.cardID = cardID;
	this.cost = cost;
	this.offense = offense;
	this.durability = durability;
	this.rarity = rarity;
	this.effect = effect;
	cardList.push(this);
}
// var 
var MYSTIC_BS = new card("Divine Fervor", "Mytic", "BASE-SKILL","BASE-MYSTIC", null, null, null, "Rare EX", "Gain 1 faith each time one of your minions is granted a buff.");
var ARCANE_BS = new card("Ingenuity", "Arcane", "BASE-Skill", "BASIC-ARCANE", null, null, null, "Rare EX", "Gain 1 faith when you activate a spell.");
var SPIRIT_BS = new card("Spirit Channeling", "Spirit", "BASE-Skill", "BASE-SPIRIT", null, null, null, "Rare EX", "Gain 1 faith when a minion is vanquished, unless it was 'Lost Spirit'.");
var SUMMONER_BS = new card("Loyal Units", "Summoner", "BASE-Skill", "BASE-SUMMONER", null, null, null, "Rare EX", "Gain 1 faith when you invoke a minion.");
// var ADEPT_BS = new card("")
// var NATURE_BS = new card("")

var EOSD01 = new card("Rumia", "Trickster", "Minion", "EOSD01", 4, 4, 3, "Rare EX", "Launch: Consume 1 faith to vanquish one enemy minion.");
var EOSD02 = new card("Cirno", "Common", "Minion", "EOSD02", 4, 3, 3, "Rare EX", "Skill effects are nullified.");
var EOSD03 = new card("Hong Meiling", "Adept", "Minion", "EOSD03", 3, 2, 3, "Rare EX", "Guardian. Legacy: Check your deck and add one skill to your hand.");
var EOSD04 = new card("Patchouli Knowledge", "Arcane", "Minion", "EOSD04", 5, 5, 3, "Rare EX", "Launch: Draw a card for each spell you used this turn.");
var EOSD05 = new card("Sakuya Izayoi", "Adept", "Minion", "EOSD05", 10, 5, 5, "Rare EX", "Initiative. Launch: Vanquish one of your skills to skip the next turn.");
var EOSD06 = new card("Remilia Scarlet", "Common", "Minion", "EOSD06", 8, 6, 7, "Rare EX", "At the end of your turn, gain 2 life and inflict 2 damage to your enemy.");
var EOSD07 = new card("Flandre Scarlet", "Trickster", "Minion", "EOSD07", 3, 2, 2, "Rare EX", "Breaker. Initiative.");
var EOSD08 = new card("Fairy", "Common", "Minion", "EOSD08", 1, 1, 2, "Rare 1", "");
var EOSD09 = new card("Demarcation", "Trickster", "Spell", "EOSD09", 2, null, null, "Rare 2", "Grant one of your minions 'Breaker'.");
var EOSD10 = new card("Frost Columns", "Arcane", "Spell", "EOSD10", 4, null, null, "Rare 3", "Invoke two 0/2 'Ice Statues' with 'Guardian'.");
var EOSD11 = new card("Angered Tome", "Arcane", "Minion", "EOSD11", 4, 3, 3, "Rare 2", "Legacy: Check your deck and add one spell that costs 5 or more mana to your hand.");
var EOSD12 = new card("Agni Shrine", "Arcane", "Spell", "EOSD12", 8, null, null, "Rare 4", "Infict 5 damage to your enemy. Check your deck and add one 'Agni Shrine' to your hand.");
var EOSD13 = new card("Indiscriminate", "Adept", "Skill", "EOSD13", 7, null, null, "Rare 5", "Inflict 4 damage to all allied and enemy minions.");
var EOSD14 = new card("Adaptability", "Adept", "Skill", "EOSD14", 4, null, null, "Rare 6", "Vanquish one of your skills to draw 2 cards.");
var EOSD15 = new card("Arcane Charge", "Arcane", "Skill", "EOSD15", 4, null, null, "Rare 4", "Consume 2 faith to check your deck and add one spell that costs 5 or more mana to your hand.");
// var Adaptability = new card("Adaptability", "Adept", "Skill", "EOSD12", 4, null, null, "Rare 6", "Vanquish one of your skills to draw 2 cards. Legacy: Add one 'Adaptability' to your hand.");
// var Lightless = new card("Lightless", "Wicked", "Skill", "EOSD01", 3, null, null, "Rare 2", "Grant one of your minions 'Hidden'.");
// var Inner_Strength = new card("Inner Strength", "Adept", "Skill", "EOSD03", 2, null, null, "Rare 3", "Grant one of your minions +1/+1.");
// var Arcane_Charge = new card("Arcane Charge", "Arcane", "Skill", "EOSD04", 4, null, null, "Rare 4", "Check your deck. Add one spell that costs 5 or more mana to your hand.");
// var Time_Stop = new card("Time, Stop!", "Adept", "Skill", "EOSD05", 10, null, null, "Rare ,EX", "Skip your opponent's next turn. You start with 0 mana on your next turn.");
// var Scarlet_Charisma = new card("Scarlet Charisma", "Wicked", "Skill", "EOSD06", 7, null, null, "Rare 6", "Grant all your minions +1/+1.");
// var Common_Fairy = new card("Common Fairy", "Common", "Minion", "EOSD07", 1, 1, 2, "Rare 1", "");
// var Indiscriminate = new card("Indiscriminate", "Adept", "Spell", "EOSD08", 7, null, null, "Rare 5", "Inflict 4 damage to all minions.");
// var Moonlight_Ray = new card("Moonlight Ray", "Wicked", "Spell", "EOSD09", 1, null, null, "Rare 1", "Inflict damage to your opponent equal to the attack stat of one of your 'Hidden' minions.");
// var Perfect_Freeze = new card("Perfect Freeze", "Magical", "Spell", "EOSD10", 8, null, null, "Rare 4", "No minions can attack next turn.");
// var Frost_Columns = new card("Frost Columns", "Common", "Spell", "EOSD11", 3, null, null, "Rare 4", "Invoke: two 0/2 'Ice Statues' with 'Guardian'.");
// var Agni_Shrine = new card("Agni Shrine", "Magical", "Spell", "EOSD12", 8, null, null, "Rare 3", "Inflict: 5 damage to your opponent. Check your deck. Add one 'Agni Shrine' to your hand.");
// var Angered_Tome = new card("Angered Tome", "Magical", "Minion", "EOSD13", 4, 3, 3, "Rare 2", "Legacy: Check your deck. Add one spell that costs 5 or more to your hand.");

var PCB01 = new card("Letty Whiterock", "Nature", "Minion", "PCB01", 1, 1, 2, "Rare 1", "");
var PCB02 = new card("Chen", "Summoner", "Minion", "PCB02", 2, 2, 2, "Rare 2", "");
var PCB03 = new card("Alice Margatroid", "Summoner", "Minion", "PCB03", 3, 2, 2, "Rare 3", "");
var PCB04 = new card("Lyrica Prismriver", "Spirit", "Minion", "PCB04", 4, 2, 3, "Rare 4", "");
var PCB05 = new card("Lunasa Prismriver", "Spirit", "Minion", "PCB05", 5, 3, 3, "Rare 5", "");
var PCB06 = new card("Merlin Prismriver", "Spirit", "Minion", "PCB06", 6, 3, 3, "Rare 6", "");
var PCB07 = new card("Youmu Konpaku", "Spirit", "Minion", "PCB07", 7, 5, 4, "Rare EX", "");

for (i = 0; i < cardList.length; i++){
	if (cardList[i].cardID.includes("EOSD")){
		EOSD.push(cardList[i]);
	}
	if (cardList[i].cardID.includes("PCB")){
		PCB.push(cardList[i]);
	}
}



function openPack(Pack){
	packCards = [];
	for (i = 0; i < 5; i++){
		var chosenrarity = pickrarity();
		var tempArr = [];
		for (j = 0; j < Pack.length; j++){
			if (Pack[j].rarity == chosenrarity){
				tempArr.push(Pack[j]);
			}
		}
		packCards.push(tempArr[Math.floor(Math.random()*tempArr.length)]);
	}
	return packCards;
}


// Choses a rarity, will reach undefined if the pack does not have at least one card of each rarity
function pickrarity(){
	var rarityList = ["Rare 1", "Rare 2", "Rare 3", "Rare 4", "Rare 5", "Rare 6", "Rare EX"];
	var rarityWeighting = [0.3, 0.2, 0.15, 0.125, 0.1, 0.075, 0.05];
	var weightedSum = 0;
	var rarityIndex = 0;
	var rand = Math.random();
	while (weightedSum < rand){
		weightedSum += rarityWeighting[rarityIndex];
		rarityIndex++;
	}
	return(rarityList[rarityIndex-1]);
}
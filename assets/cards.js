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
function card(Name, Faction, Classification, CardID, Cost, Offense, Durability, Rarity, Effect){
	this.Name = Name;
	this.Faction = Faction;
	this.Classification = Classification;
	this.CardID = CardID;
	this.Cost = Cost;
	this.Offense = Offense;
	this.Durability = Durability;
	this.Rarity = Rarity;
	this.Effect = Effect;
	cardList.push(this);
}
// var 
var Ingenuity = new card("Ingenuity", "Arcane", "BASE-Skill", "BASIC-ARCANE", 2, null, null, "Rare EX", "Take 1 damage. Place one counter on this card. Spells in your hand have costs reduced by the number of counters on this card (Costs cannot go below 0).");
// var 

var Lightless = new card("Lightless", "Wicked", "Skill", "EOSD01", 3, null, null, "Rare 2", "Grant one of your minions 'Hidden'.");
var Inner_Strength = new card("Inner Strength", "Adept", "Skill", "EOSD03", 2, null, null, "Rare 3", "Grant one of your minions +1/+1.");
var Arcane_Charge = new card("Arcane Charge", "Arcane", "Skill", "EOSD04", 4, null, null, "Rare 4", "Check your deck. Add one spell that costs 5 or more mana to your hand.");
var Time_Stop = new card("Time, Stop!", "Adept", "Skill", "EOSD05", 10, null, null, "Rare EX", "Skip your opponent's next turn. You start with 0 mana on your next turn.");
var Scarlet_Charisma = new card("Scarlet Charisma", "Wicked", "Skill", "EOSD06", 7, null, null, "Rare 6", "Grant all your minions +1/+1.");
var Common_Fairy = new card("Common Fairy", "Common", "Minion", "EOSD07", 1, 1, 2, "Rare 1", "");
var Indiscriminate = new card("Indiscriminate", "Adept", "Spell", "EOSD08", 7, null, null, "Rare 5", "Inflict: 4 damage to all minions.");
var Moonlight_Ray = new card("Moonlight Ray", "Wicked", "Spell", "EOSD09", 1, null, null, "Rare 1", "Inflict: damage to your opponent equal to one the attack stat of your 'Hidden' minions.");
var Perfect_Freeze = new card("Perfect Freeze", "Magical", "Spell", "EOSD10", 8, null, null, "Rare 4", "No minions can attack next turn.");
var Frost_Columns = new card("Frost Columns", "Common", "Spell", "EOSD11", 3, null, null, "Rare 4", "Invoke: two 0/2 'Ice Statues' with 'Guardian'.");
var Agni_Shrine = new card("Agni Shrine", "Magical", "Spell", "EOSD12", 6, null, null, "Rare 3", "Inflict: 5 damage to your opponent. Check your deck. Add one 'Agni Shrine' to your hand.");
var Angered_Tome = new card("Angered Tome", "Magical", "Minion", "EOSD13", 4, 3, 3, "Rare 2", "Legacy: Check your deck. Add one spell that costs 5 or more to your hand.");

for (i = 0; i < cardList.length; i++){
	if (cardList[i].CardID.includes("EOSD")){
		EOSD.push(cardList[i]);
	}
}



function openPack(Pack){
	packCards = [];
	for (i = 0; i < 5; i++){
		var chosenRarity = pickRarity();
		var tempArr = [];
		for (j = 0; j < Pack.length; j++){
			if (Pack[j].Rarity == chosenRarity){
				tempArr.push(Pack[j].Name);
			}
		}
		packCards.push(tempArr[Math.floor(Math.random()*tempArr.length)]);
	}
	return packCards;
}


// Choses a rarity, will reach undefined if the pack does not have at least one card of each rarity
function pickRarity(){
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
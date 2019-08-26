function card(name, faction, classification, cardID, cost, offense, durability, rarity, effect, cardfunc){
	this.name = name;
	this.faction = faction;
	this.classification = classification;
	this.cardID = cardID;
	this.cost = cost;
	this.offense = offense;
	this.durability = durability;
	this.rarity = rarity;
	this.effect = effect;
	this.cardfunc = cardfunc;
	// cardList.push(this);
}
function EOSD08_effect(){
	return ("All minions take 4 damage");
}
var Indiscriminate = new card("Indiscriminate", "Adept", "Spell", "EOSD08", 7, null, null, "Rare 5", "Inflict 4 damage to all minions.", EOSD08_effect());

console.log(Indiscriminate.cardfunc);
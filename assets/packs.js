$("#EOSD").click(function(){
	var packSet = openPack(EOSD);
	document.getElementById("card1").innerHTML = (packSet[0].name);
	document.getElementById("card2").innerHTML = (packSet[1].name);
	document.getElementById("card3").innerHTML = (packSet[2].name);
	document.getElementById("card4").innerHTML = (packSet[3].name);
	document.getElementById("card5").innerHTML = (packSet[4].name);
	// console.log("Hello");
});
$("#PCB").click(function(){
	var packSet = openPack(PCB);
	document.getElementById("card1").innerHTML = (packSet[0].name);
	document.getElementById("card2").innerHTML = (packSet[1].name);
	document.getElementById("card3").innerHTML = (packSet[2].name);
	document.getElementById("card4").innerHTML = (packSet[3].name);
	document.getElementById("card5").innerHTML = (packSet[4].name);
	// console.log("Hello");
});
$(document).ready(function() { 
	$("#card1").mouseover(function() {
		var x = document.getElementById("card1").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].name == x){
				document.getElementById("description").innerHTML = cardList[i].effect;	
				document.getElementById("cost").innerHTML = cardList[i].cost;
				if (cardList[i].classification == "Minion"){
					document.getElementById("stats").innerHTML = cardList[i].offense + "/" + cardList[i].durability;
				}
				else{
					document.getElementById("stats").innerHTML = "";
				}	
			}
		}
	});
	$("#card2").mouseover(function() {
		var x = document.getElementById("card2").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].name == x){
				document.getElementById("description").innerHTML = cardList[i].effect;
				document.getElementById("cost").innerHTML = cardList[i].cost;
				if (cardList[i].classification == "Minion"){
					document.getElementById("stats").innerHTML = cardList[i].offense + "/" + cardList[i].durability;
				}
				else{
					document.getElementById("stats").innerHTML = "";
				}			
			}
		}
	});
	$("#card3").mouseover(function() {
		var x = document.getElementById("card3").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].name == x){
				document.getElementById("description").innerHTML = cardList[i].effect;
				document.getElementById("cost").innerHTML = cardList[i].cost;
				if (cardList[i].classification == "Minion"){
					document.getElementById("stats").innerHTML = cardList[i].offense + "/" + cardList[i].durability;
				}
				else{
					document.getElementById("stats").innerHTML = "";
				}			
			}
		}
	});
	$("#card4").mouseover(function() {
		var x = document.getElementById("card4").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].name == x){
				document.getElementById("description").innerHTML = cardList[i].effect;	
				document.getElementById("cost").innerHTML = cardList[i].cost;
				if (cardList[i].classification == "Minion"){
					document.getElementById("stats").innerHTML = cardList[i].offense + "/" + cardList[i].durability;
				}
				else{
					document.getElementById("stats").innerHTML = "";
				}	
			}
		}
	});
	$("#card5").mouseover(function() {
		var x = document.getElementById("card5").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].name == x){
				document.getElementById("description").innerHTML = cardList[i].effect;
				document.getElementById("cost").innerHTML = cardList[i].cost;
				if (cardList[i].classification == "Minion"){
					document.getElementById("stats").innerHTML = cardList[i].offense + "/" + cardList[i].durability;
				}
				else{
					document.getElementById("stats").innerHTML = "";
				}		
			}
		}
	}); 
});
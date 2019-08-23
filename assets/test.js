$("#first").click(function(){
	var packSet = openPack(EOSD);
	document.getElementById("card1").innerHTML = (packSet[0].Name);
	document.getElementById("card2").innerHTML = (packSet[1].Name);
	document.getElementById("card3").innerHTML = (packSet[2].Name);
	document.getElementById("card4").innerHTML = (packSet[3].Name);
	document.getElementById("card5").innerHTML = (packSet[4].Name);
	// console.log("Hello");
});
$(document).ready(function() { 
	$("#card1").mouseover(function() {
		var x = document.getElementById("card1").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].Name == x){
				document.getElementById("description").innerHTML = cardList[i].Effect;		
			}
		}
	});
	$("#card2").mouseover(function() {
		var x = document.getElementById("card2").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].Name == x){
				document.getElementById("description").innerHTML = cardList[i].Effect;		
			}
		}
	});
	$("#card3").mouseover(function() {
		var x = document.getElementById("card3").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].Name == x){
				document.getElementById("description").innerHTML = cardList[i].Effect;		
			}
		}
	});
	$("#card4").mouseover(function() {
		var x = document.getElementById("card4").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].Name == x){
				document.getElementById("description").innerHTML = cardList[i].Effect;		
			}
		}
	});
	$("#card5").mouseover(function() {
		var x = document.getElementById("card5").innerHTML;
		for (i = 0; i < cardList.length; i++){
			if (cardList[i].Name == x){
				document.getElementById("description").innerHTML = cardList[i].Effect;		
			}
		}
	}); 
});
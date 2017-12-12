window.onload = function(){
	console.log("js is working");
	// grabs current position, starting line
	var pos2 = 0;
	var pos = 0;
	// grabs player one globally
	var p1 = document.getElementById("player1"); 
	var p2 = document.getElementById("player2");

document.addEventListener("keydown", function(event) { 
	var keyName = event.key;
	console.log(keyName);

	// if statements to create keys to press and race
	if (keyName == "f"){
	console.log("player1");
	pos+=100;
	console.log(pos);
	p1.style.marginLeft = pos + "px";
	} else if (keyName == "j") {
	console.log("player2");
	pos2+=100;
	console.log(pos2);
	p2.style.marginLeft = pos2 + "px";
	}

	// winner rational
	if ( pos == 900 && pos2 <= 899) {
	console.log("player 1 wins");
	alert("Player 1 Wins!!");
	} else if (pos2 == 900 && pos <= 899) {
	console.log("player 2 wins");
	alert("Player 2 Wins!!");
	}
});
// 	---------------			GRAVE YARD 				------------------- //
// document.getElementById("player1").onkeydown = function letsMove() {
// 	console.log("keydown");
// 	
// 	
// 	var id = setInterval(frame,5);
// function frame() {
// 	if (pos == 970) {
// 		clearInterval(id);

// 	} else {
// 		pos++;
		
// 	}
// }
// };

	// 
	// var pos = 0;
	// var id = setInterval(frame,5);


// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d"); 
// 	context.fillStyle = "rgb(100, 200, 120)";
// 	context.fillRect(-50, 10, 55, 50);

};
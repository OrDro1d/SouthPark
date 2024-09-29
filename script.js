let step = 0;

function draw(context) {
	function sky(context) {
		context.fillStyle = "rgb(175, 238, 238)";
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(1000, 0);
		context.lineTo(1000, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.fill();
	}

	function background(context) {
		// Горы
		context.fillStyle = "rgb(60, 179, 113)";
		context.beginPath();
		context.moveTo(0, 360);
		context.lineTo(500, 60);
		context.lineTo(900, 360);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();

		context.fillStyle = "rgb(46, 139, 87)";
		context.beginPath();
		context.moveTo(500, 360);
		context.lineTo(880, 60);
		context.lineTo(1000, 200);
		context.lineTo(1000, 360);
		context.closePath();
		context.stroke();
		context.fill();

		context.fillStyle = "rgb(34, 139, 34)";
		context.beginPath();
		context.moveTo(0, 160);
		context.lineTo(200, 80);
		context.lineTo(600, 360);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();
		// Земля
		context.fillStyle = "rgb(245,245,245)";
		context.beginPath();
		context.moveTo(0, 360);
		context.lineTo(1000, 360);
		context.lineTo(1000, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();
	}

	function hill(context) {
		context.fillStyle = "rgb(255,255,255)";
		context.strokeStyle = "rgb(0,0,0)";
		context.beginPath();
		context.moveTo(0, 200);
		context.lineTo(350, 380);
		context.lineTo(700, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();
	}

	sky(context);
	background(context);
	hill(context);
}

let roll = document.querySelector("#roll");
context = document.querySelector("#drawing").getContext("2d");

draw(context);
roll.addEventListener("click", () => {
	step += 10;
	draw(context);
	context.fillStyle = "rgb(255,255,255)";
	context.strokeStyle = "rgb(0,0,0)";
	context.beginPath();
	context.arc(60 + 4 * step, 260 + step, 20 + step, 0, 2 * Math.PI);
	context.closePath();
	context.stroke();
	context.fill();
});

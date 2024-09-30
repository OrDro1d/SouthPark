let step = 10;

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
		context.fillStyle = "rgb(240,240,240)";
		context.beginPath();
		context.moveTo(0, 360);
		context.lineTo(1000, 360);
		context.lineTo(1000, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();
		// Снежные вершины
		context.fillStyle = "rgb(255,255,255)";

		context.beginPath();
		context.moveTo(350, 145);
		context.lineTo(500, 50);
		context.lineTo(650, 170);
		context.lineTo(580, 150);
		context.lineTo(520, 180);
		context.lineTo(450, 140);
		context.closePath();
		context.stroke();
		context.fill();

		context.beginPath();
		context.moveTo(770, 140);
		context.lineTo(880, 50);
		context.lineTo(950, 140);
		context.lineTo(950, 160);
		context.lineTo(880, 180);
		context.lineTo(830, 150);
		context.closePath();
		context.stroke();
		context.fill();

		context.beginPath();
		context.moveTo(40, 140);
		context.lineTo(200, 80);
		context.lineTo(375, 200);
		context.lineTo(270, 170);
		context.lineTo(180, 200);
		context.lineTo(140, 140);
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

	function snowball(context) {
		context.fillStyle = "rgb(255,255,255)";
		context.strokeStyle = "rgb(0,0,0)";
		context.beginPath();
		context.arc(40 + 4 * step, 260 + step, 20 + 1.5 * step, 0, 2 * Math.PI);
		context.closePath();
		context.stroke();
		context.fill();
	}

	function children(context) {
		function Kyle(context, position = 500) {
			// Руки
			context.fillStyle = "rgb(255, 140, 0)";

			context.beginPath();
			context.ellipse(position - 5, 465, 16, 6, -Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position + 55, 465, 16, 6, Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(50, 205, 50)";

			context.beginPath();
			context.arc(position + 60, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 55, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 10, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 5, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(position, 450);
			context.lineTo(position + 50, 450);
			context.lineTo(position + 50, 490);
			context.lineTo(position, 490);
			context.lineTo(position, 450);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 25, 450);
			context.lineTo(position + 25, 490);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "gray";
			context.beginPath();
			context.moveTo(position + 50, 490);
			context.lineTo(position + 50, 500);
			context.lineTo(position, 500);
			context.lineTo(position, 490);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(position + 10, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.ellipse(position + 40, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Шарф
			context.beginPath();
			context.fillStyle = "rgb(50, 205, 50)";
			context.arc(position + 23, 438, 28, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.arc(position + 25, 425, 35, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(position + 15, 425, 12, 10, -Math.PI / 3, 0, 2 * Math.PI);
			context.ellipse(position + 35, 425, 12, 10, Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(position + 30, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 20, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.arc(position + 25, 445, 5, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(50, 205, 50)";

			context.beginPath();
			context.moveTo(position - 10, 410);
			context.lineTo(position + 60, 410);
			context.lineTo(position + 60, 380);
			context.lineTo(position - 10, 380);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position - 10, 420, 20, 6, -Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position + 60, 420, 20, 6, Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "rgb(34, 139, 34)";
			context.beginPath();
			context.moveTo(position, 410);
			context.lineTo(position + 50, 410);
			context.lineTo(position + 50, 390);
			context.lineTo(position, 390);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(position + 5, 415);
			context.lineTo(position + 20, 405);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 45, 415);
			context.lineTo(position + 30, 405);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Stan(context, position = 600) {
			// Руки
			context.fillStyle = "rgb(160, 82, 45)";

			context.beginPath();
			context.ellipse(position - 5, 465, 16, 6, -Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position + 55, 465, 16, 6, Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(178, 34, 34)";

			context.beginPath();
			context.arc(position + 60, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 55, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 10, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 5, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(160, 82, 45)";
			context.beginPath();
			context.moveTo(position, 450);
			context.lineTo(position + 50, 450);
			context.lineTo(position + 50, 490);
			context.lineTo(position, 490);
			context.lineTo(position, 450);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 25, 450);
			context.lineTo(position + 25, 490);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "rgb(65, 105, 225)";
			context.beginPath();
			context.moveTo(position + 50, 490);
			context.lineTo(position + 50, 500);
			context.lineTo(position, 500);
			context.lineTo(position, 490);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(position + 10, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.ellipse(position + 40, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Шарф
			context.beginPath();
			context.fillStyle = "rgb(178, 34, 34)";
			context.arc(position + 23, 438, 28, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.arc(position + 25, 425, 35, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(position + 15, 425, 12, 10, -Math.PI / 3, 0, 2 * Math.PI);
			context.ellipse(position + 35, 425, 12, 10, Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(position + 30, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 20, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.arc(position + 25, 445, 5, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(65, 105, 225)";
			context.beginPath();
			context.ellipse(position + 25, 415, 33, 30, 0, -Math.PI, 0);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "rgb(178, 34, 34)";
			context.beginPath();
			context.moveTo(position - 11, 410);
			context.lineTo(position + 61, 410);
			context.lineTo(position + 61, 415);
			context.lineTo(position - 11, 415);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.fillStyle = "rgb(178, 34, 34)";
			context.arc(position + 25, 385, 8, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(position + 5, 415);
			context.lineTo(position + 20, 405);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 45, 415);
			context.lineTo(position + 30, 405);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Cartman(context, position = 710) {
			// Штаны
			context.fillStyle = "rgb(160, 82, 45)";
			context.beginPath();
			context.moveTo(position + 60, 480);
			context.lineTo(position + 60, 500);
			context.lineTo(position - 10, 500);
			context.lineTo(position - 10, 480);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(178, 34, 34)";
			context.beginPath();
			context.ellipse(position + 25, 460, 50, 35, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 25, 450);
			context.lineTo(position + 25, 495);
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(position + 5, 500, 24, 3, 0, 0, 2 * Math.PI);
			context.ellipse(position + 45, 500, 24, 3, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Второй подбородок
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.ellipse(position + 25, 428, 40, 30, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.ellipse(position + 25, 425, 40, 30, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(position + 15, 425, 12, 10, -Math.PI / 3, 0, 2 * Math.PI);
			context.ellipse(position + 35, 425, 12, 10, Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(position + 30, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 20, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.arc(position + 25, 445, 5, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(135, 206, 250)";
			context.beginPath();
			context.ellipse(position + 25, 415, 38, 30, 0, -Math.PI, 0);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "yellow";
			context.beginPath();
			context.moveTo(position - 14, 410);
			context.lineTo(position + 64, 410);
			context.lineTo(position + 64, 415);
			context.lineTo(position - 14, 415);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.fillStyle = "yellow";
			context.ellipse(position + 25, 385, 13, 6, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(position + 5, 415);
			context.lineTo(position + 20, 405);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 45, 415);
			context.lineTo(position + 30, 405);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "yellow";

			context.beginPath();
			context.ellipse(position - 16, 460, 12, 8, Math.PI / 6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position + 67, 460, 12, 8, -Math.PI / 6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Kenny(context, position = 820) {
			// Руки
			context.fillStyle = "rgb(255, 140, 0)";

			context.beginPath();
			context.ellipse(position - 5, 465, 16, 6, -Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(position + 55, 465, 16, 6, Math.PI / 2.6, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(160, 82, 45)";

			context.beginPath();
			context.arc(position + 60, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 55, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 10, 475, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position - 5, 475, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(position, 450);
			context.lineTo(position + 50, 450);
			context.lineTo(position + 50, 490);
			context.lineTo(position, 490);
			context.lineTo(position, 450);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 25, 450);
			context.lineTo(position + 25, 490);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(position + 50, 490);
			context.lineTo(position + 50, 500);
			context.lineTo(position, 500);
			context.lineTo(position, 490);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(position + 10, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.ellipse(position + 40, 500, 20, 2, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.arc(position + 25, 445, 5, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Капюшон
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.arc(position + 25, 425, 40, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Лицо
			context.fillStyle = "rgb(255, 239, 213)";
			context.beginPath();
			context.ellipse(position + 25, 425, 23, 25, Math.PI / 2, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(position + 15, 425, 12, 10, -Math.PI / 3, 0, 2 * Math.PI);
			context.ellipse(position + 35, 425, 12, 10, Math.PI / 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(position + 30, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(position + 20, 425, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Капюшон
			context.beginPath();
			context.fillStyle = "rgb(160, 82, 45)";
			context.moveTo(position + 25, 450);
			context.lineTo(position - 5, 435);
			context.lineTo(position - 5, 415);
			context.lineTo(position + 25, 400);
			context.lineTo(position + 5, 415);
			context.lineTo(position + 5, 435);
			context.moveTo(position + 25, 450);
			context.lineTo(position + 55, 435);
			context.lineTo(position + 55, 415);
			context.lineTo(position + 25, 400);
			context.lineTo(position + 45, 415);
			context.lineTo(position + 45, 435);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 25, 450);
			context.lineTo(position + 20, 460);
			context.moveTo(position + 25, 450);
			context.lineTo(position + 30, 460);
			context.stroke();
			// Брови
			context.beginPath();
			context.moveTo(position + 5, 415);
			context.lineTo(position + 20, 405);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(position + 45, 415);
			context.lineTo(position + 30, 405);
			context.closePath();
			context.stroke();
			context.fill();
		}

		Kyle(context, 200);
		Stan(context, 300);
		Cartman(context, 410);
		if (step < 150) Kenny(context, 520);
	}

	sky(context);
	background(context);
	hill(context);
	snowball(context);
	children(context);
}

let roll = document.querySelector("#roll");
context = document.querySelector("#drawing").getContext("2d");

draw(context);

roll.addEventListener("click", () => {
	step += step * 0.5;

	draw(context);

	if (step > 300) {
		roll.innerHTML = "Congrats! You've killed Kenny!";
		roll.style.backgroundColor = "gold";
		roll.disabled = true;
	}
});

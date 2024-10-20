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
		context.moveTo(0, 400);
		context.lineTo(250, 370);
		context.lineTo(420, 400);
		context.lineTo(600, 380);
		context.lineTo(800, 420);
		context.lineTo(950, 400);
		context.lineTo(950, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.stroke();
		context.fill();
	}

	function sign(context) {
		context.beginPath();
		context.fillStyle = "brown";
		context.moveTo(250, 420);
		context.lineTo(257, 420);
		context.lineTo(257, 220);
		context.lineTo(250, 220);
		context.closePath();
		context.fill();

		context.beginPath();
		context.fillStyle = "yellow";
		context.moveTo(254, 280);
		context.lineTo(314, 220);
		context.lineTo(254, 160);
		context.lineTo(194, 220);
		context.closePath();
		context.fill();
		context.stroke();

		context.beginPath();
		context.moveTo(254, 275);
		context.lineTo(309, 220);
		context.lineTo(254, 165);
		context.lineTo(199, 220);
		context.closePath();
		context.stroke();

		context.beginPath();
		context.fillStyle = "black";
		context.rect(239, 200, 10, 40);
		context.rect(259, 200, 8, 40);
		context.closePath();
		context.fill();
		context.stroke();
	}

	function children(context) {
		function Kyle(context, positionX, positionY) {
			// Руки
			context.fillStyle = "rgb(255, 140, 0)";

			context.beginPath();
			context.ellipse(
				positionX - 5,
				positionY + 15,
				16,
				6,
				-Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX + 55,
				positionY + 15,
				16,
				6,
				Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(50, 205, 50)";

			context.beginPath();
			context.arc(positionX + 60, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 55, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 10, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 5, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(positionX, positionY);
			context.lineTo(positionX + 50, positionY);
			context.lineTo(positionX + 50, positionY + 40);
			context.lineTo(positionX, positionY + 40);
			context.lineTo(positionX, positionY);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 25, positionY + 40);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "gray";
			context.beginPath();
			context.moveTo(positionX + 50, positionY + 40);
			context.lineTo(positionX + 50, positionY + 50);
			context.lineTo(positionX, positionY + 50);
			context.lineTo(positionX, positionY + 40);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(
				positionX + 10,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 40,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Шарф
			context.beginPath();
			context.fillStyle = "rgb(50, 205, 50)";
			context.arc(positionX + 23, positionY - 12, 28, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.arc(positionX + 25, positionY - 25, 35, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(
				positionX + 15,
				positionY - 25,
				12,
				10,
				-Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 35,
				positionY - 25,
				12,
				10,
				Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(positionX + 30, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 20, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.moveTo(positionX + 20, positionY - 5);
			context.lineTo(positionX + 30, positionY - 5);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(50, 205, 50)";

			context.beginPath();
			context.moveTo(positionX - 10, positionY - 40);
			context.lineTo(positionX + 60, positionY - 40);
			context.lineTo(positionX + 60, positionY - 70);
			context.lineTo(positionX - 10, positionY - 70);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX - 10,
				positionY - 30,
				20,
				6,
				-Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX + 60,
				positionY - 30,
				20,
				6,
				Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "rgb(34, 139, 34)";
			context.beginPath();
			context.moveTo(positionX, positionY - 40);
			context.lineTo(positionX + 50, positionY - 40);
			context.lineTo(positionX + 50, positionY - 60);
			context.lineTo(positionX, positionY - 60);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(positionX + 5, positionY - 40);
			context.lineTo(positionX + 20, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 45, positionY - 40);
			context.lineTo(positionX + 30, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Stan(context, positionX, positionY) {
			// Руки
			context.fillStyle = "rgb(160, 82, 45)";

			context.beginPath();
			context.ellipse(
				positionX - 5,
				positionY + 15,
				16,
				6,
				-Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX + 55,
				positionY + 15,
				16,
				6,
				Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(178, 34, 34)";

			context.beginPath();
			context.arc(positionX + 60, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 55, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 10, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 5, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(160, 82, 45)";
			context.beginPath();
			context.moveTo(positionX, positionY);
			context.lineTo(positionX + 50, positionY);
			context.lineTo(positionX + 50, positionY + 40);
			context.lineTo(positionX, positionY + 40);
			context.lineTo(positionX, positionY);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 25, positionY + 40);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "rgb(65, 105, 225)";
			context.beginPath();
			context.moveTo(positionX + 50, positionY + 40);
			context.lineTo(positionX + 50, positionY + 50);
			context.lineTo(positionX, positionY + 50);
			context.lineTo(positionX, positionY + 40);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(
				positionX + 10,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 40,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Шарф
			context.beginPath();
			context.fillStyle = "rgb(178, 34, 34)";
			context.arc(positionX + 23, positionY - 12, 28, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.arc(positionX + 25, positionY - 25, 35, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(
				positionX + 15,
				positionY - 25,
				12,
				10,
				-Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 35,
				positionY - 25,
				12,
				10,
				Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(positionX + 30, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 20, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.moveTo(positionX + 20, positionY - 5);
			context.lineTo(positionX + 30, positionY - 5);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(65, 105, 225)";
			context.beginPath();
			context.ellipse(positionX + 25, positionY - 35, 33, 30, 0, -Math.PI, 0);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "rgb(178, 34, 34)";
			context.beginPath();
			context.moveTo(positionX - 11, positionY - 40);
			context.lineTo(positionX + 61, positionY - 40);
			context.lineTo(positionX + 61, positionY - 35);
			context.lineTo(positionX - 11, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.fillStyle = "rgb(178, 34, 34)";
			context.arc(positionX + 25, positionY - 65, 8, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(positionX + 5, positionY - 40);
			context.lineTo(positionX + 20, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 45, positionY - 40);
			context.lineTo(positionX + 30, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Cartman(context, positionX, positionY) {
			// Штаны
			context.fillStyle = "rgb(160, 82, 45)";
			context.beginPath();
			context.moveTo(positionX + 60, positionY + 30);
			context.lineTo(positionX + 60, positionY + 50);
			context.lineTo(positionX - 10, positionY + 50);
			context.lineTo(positionX - 10, positionY + 30);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(178, 34, 34)";
			context.beginPath();
			context.ellipse(
				positionX + 25,
				positionY + 10,
				50,
				35,
				0,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 25, positionY + 45);
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(
				positionX + 5,
				positionY + 50,
				24,
				3,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 45,
				positionY + 50,
				24,
				3,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Второй подбородок
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.ellipse(
				positionX + 25,
				positionY - 22,
				40,
				30,
				0,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Голова
			context.beginPath();
			context.fillStyle = "rgb(255, 239, 213)";
			context.ellipse(
				positionX + 25,
				positionY - 25,
				40,
				30,
				0,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(
				positionX + 15,
				positionY - 25,
				12,
				10,
				-Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 35,
				positionY - 25,
				12,
				10,
				Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(positionX + 30, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 20, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.moveTo(positionX + 20, positionY - 5);
			context.lineTo(positionX + 30, positionY - 5);
			context.closePath();
			context.stroke();
			context.fill();
			// Шапка
			context.fillStyle = "rgb(135, 206, 250)";
			context.beginPath();
			context.ellipse(positionX + 25, positionY - 35, 38, 30, 0, -Math.PI, 0);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "yellow";
			context.beginPath();
			context.moveTo(positionX - 14, positionY - 40);
			context.lineTo(positionX + 64, positionY - 40);
			context.lineTo(positionX + 64, positionY - 35);
			context.lineTo(positionX - 14, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.fillStyle = "yellow";
			context.ellipse(positionX + 25, positionY - 65, 13, 6, 0, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Брови
			context.beginPath();
			context.moveTo(positionX + 5, positionY - 40);
			context.lineTo(positionX + 20, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 45, positionY - 40);
			context.lineTo(positionX + 30, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "yellow";

			context.beginPath();
			context.ellipse(
				positionX - 16,
				positionY + 10,
				12,
				8,
				Math.PI / 6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX + 67,
				positionY + 10,
				12,
				8,
				-Math.PI / 6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
		}

		function Kenny(context, positionX, positionY) {
			// Руки
			context.fillStyle = "rgb(255, 140, 0)";

			context.beginPath();
			context.ellipse(
				positionX - 5,
				positionY + 15,
				16,
				6,
				-Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.ellipse(
				positionX + 55,
				positionY + 15,
				16,
				6,
				Math.PI / 2.6,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Перчатки
			context.fillStyle = "rgb(160, 82, 45)";

			context.beginPath();
			context.arc(positionX + 60, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 55, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 10, positionY + 25, 7, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX - 5, positionY + 25, 3, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Торс
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(positionX, positionY);
			context.lineTo(positionX + 50, positionY);
			context.lineTo(positionX + 50, positionY + 40);
			context.lineTo(positionX, positionY + 40);
			context.lineTo(positionX, positionY);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 25, positionY + 40);
			context.stroke();
			context.fill();
			// Штаны
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.moveTo(positionX + 50, positionY + 40);
			context.lineTo(positionX + 50, positionY + 50);
			context.lineTo(positionX, positionY + 50);
			context.lineTo(positionX, positionY + 40);
			context.closePath();
			context.stroke();
			context.fill();
			// Обувь
			context.beginPath();
			context.fillStyle = "black";
			context.ellipse(
				positionX + 10,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 40,
				positionY + 50,
				20,
				2,
				0,
				Math.PI,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Рот
			context.beginPath();
			context.arc(positionX + 25, positionY - 5, 5, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Капюшон
			context.fillStyle = "rgb(255, 140, 0)";
			context.beginPath();
			context.arc(positionX + 25, positionY - 25, 40, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Лицо
			context.fillStyle = "rgb(255, 239, 213)";
			context.beginPath();
			context.ellipse(
				positionX + 25,
				positionY - 25,
				23,
				25,
				Math.PI / 2,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();
			// Глаза
			context.beginPath();
			context.fillStyle = "white";
			context.ellipse(
				positionX + 15,
				positionY - 25,
				12,
				10,
				-Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.ellipse(
				positionX + 35,
				positionY - 25,
				12,
				10,
				Math.PI / 3,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
			context.fill();

			context.fillStyle = "black";

			context.beginPath();
			context.arc(positionX + 30, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.arc(positionX + 20, positionY - 25, 1, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
			context.fill();
			// Капюшон
			context.beginPath();
			context.fillStyle = "rgb(160, 82, 45)";
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX - 5, positionY - 15);
			context.lineTo(positionX - 5, positionY - 35);
			context.lineTo(positionX + 25, positionY - 50);
			context.lineTo(positionX + 5, positionY - 35);
			context.lineTo(positionX + 5, positionY - 15);
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 55, positionY - 15);
			context.lineTo(positionX + 55, positionY - 35);
			context.lineTo(positionX + 25, positionY - 50);
			context.lineTo(positionX + 45, positionY - 35);
			context.lineTo(positionX + 45, positionY - 15);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 20, positionY + 10);
			context.moveTo(positionX + 25, positionY);
			context.lineTo(positionX + 30, positionY + 10);
			context.stroke();
			// Брови
			context.beginPath();
			context.moveTo(positionX + 5, positionY - 40);
			context.lineTo(positionX + 20, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();

			context.beginPath();
			context.moveTo(positionX + 45, positionY - 40);
			context.lineTo(positionX + 30, positionY - 35);
			context.closePath();
			context.stroke();
			context.fill();
		}

		Kyle(context, 300, 380);
		Stan(context, 400, 380);
		Cartman(context, 510, 380);
		Kenny(context, 620, 380);
	}

	function bus(context, positionY = 0) {
		// Автобус (основа)
		context.strokeStyle = "black";

		context.beginPath();
		context.fillStyle = "rgb(255, 235, 0)";
		for (let i = 0; i < bus_properties.base.length; i++) {
			context.lineTo(
				bus_properties.base[i].x + value,
				bus_properties.base[i].y + positionY
			);
		}
		context.closePath();
		context.stroke();
		context.fill();
		// Колёса автобуса
		for (let i = 0; i < 2; i++) {
			context.beginPath();
			context.fillStyle = "black";
			context.arc(
				bus_properties.wheel.x + value + i * 1000,
				bus_properties.wheel.y + positionY,
				bus_properties.wheel.size,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.fill();

			let temp =
				bus_properties.wheelDetail.x * Math.cos(angle) -
				bus_properties.wheelDetail.y * Math.sin(angle);
			bus_properties.wheelDetail.y =
				bus_properties.wheelDetail.x * Math.sin(angle) +
				bus_properties.wheelDetail.y * Math.cos(angle);
			bus_properties.wheelDetail.x = temp;

			context.beginPath();
			context.strokeStyle = "gray";
			context.moveTo(
				bus_properties.wheel.x -
					bus_properties.wheelDetail.x +
					value +
					i * 1000,
				bus_properties.wheel.y - bus_properties.wheelDetail.y + positionY
			);
			context.lineTo(
				bus_properties.wheel.x +
					bus_properties.wheelDetail.x +
					value +
					i * 1000,
				bus_properties.wheel.y + bus_properties.wheelDetail.y + positionY
			);
			context.closePath();
			context.stroke();

			context.beginPath();
			context.fillStyle = "gray";
			context.arc(
				bus_properties.wheel.x + value + i * 1000,
				bus_properties.wheel.y + positionY,
				bus_properties.wheel.innerSize,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.fill();

			context.beginPath();
			context.strokeStyle = "black";
			context.arc(
				bus_properties.wheel.x + value + i * 1000,
				bus_properties.wheel.y + positionY,
				bus_properties.wheel.innerSize - 7,
				0,
				2 * Math.PI
			);
			context.closePath();
			context.stroke();
		}
		// Окна
		context.fillStyle = "rgb(175, 238, 238)";
		for (let i = 0; i < 10; i++) {
			// верхний ряд окон
			context.beginPath();
			context.moveTo(
				bus_properties.windows[0].x + value + i * 90,
				bus_properties.windows[0].y
			);
			for (let j = 1; j < bus_properties.windows.length; j++) {
				context.lineTo(
					bus_properties.windows[j].x + value + i * 90,
					bus_properties.windows[j].y
				);
			}
			context.closePath();
			context.fill();
			context.stroke();
			// Нижний ряд окон
			context.beginPath();
			context.moveTo(
				bus_properties.windows[0].x + value + i * 90,
				bus_properties.windows[0].y + 50
			);
			for (let j = 1; j < bus_properties.windows.length; j++) {
				context.lineTo(
					bus_properties.windows[j].x + value + i * 90,
					bus_properties.windows[j].y + 50
				);
			}
			context.closePath();
			context.fill();
			context.stroke();
		}
		// Лобовое стекло
		context.beginPath();
		context.moveTo(
			bus_properties.frontWindow[0].x + value,
			bus_properties.frontWindow[0].y
		);
		for (let i = 1; i < bus_properties.frontWindow.length; i++) {
			context.lineTo(
				bus_properties.frontWindow[i].x + value,
				bus_properties.frontWindow[i].y
			);
		}
		context.closePath();
		context.fill();
		context.stroke();
		// Двери
		for (let i = 0; i < 2; i++) {
			context.beginPath();
			context.moveTo(
				bus_properties.doors[0].x + value + i * 65,
				bus_properties.doors[0].y
			);
			for (let j = 1; j < bus_properties.doors.length; j++) {
				context.lineTo(
					bus_properties.doors[j].x + value + i * 65,
					bus_properties.doors[j].y
				);
			}
			context.closePath();
			context.stroke();

			context.beginPath();
			context.fillStyle = "rgb(175, 238, 238)";
			context.moveTo(
				bus_properties.doors[0].x + 10 + value + i * 65,
				bus_properties.doors[0].y + 10
			);
			context.lineTo(
				bus_properties.doors[1].x - 10 + value + i * 65,
				bus_properties.doors[1].y + 10
			);
			context.lineTo(
				bus_properties.doors[2].x - 10 + value + i * 65,
				bus_properties.doors[2].y - 145
			);
			context.lineTo(
				bus_properties.doors[3].x + 10 + value + i * 65,
				bus_properties.doors[3].y - 145
			);
			context.closePath();
			context.fill();
			context.stroke();

			context.beginPath();
			context.fillStyle = "gray";
			context.moveTo(
				bus_properties.doors[0].x + 10 + value + i * 65,
				bus_properties.doors[0].y + 110
			);
			context.lineTo(
				bus_properties.doors[1].x - 10 + value + i * 65,
				bus_properties.doors[1].y + 110
			);
			context.lineTo(
				bus_properties.doors[2].x - 10 + value + i * 65,
				bus_properties.doors[2].y - 10
			);
			context.lineTo(
				bus_properties.doors[3].x + 10 + value + i * 65,
				bus_properties.doors[3].y - 10
			);
			context.closePath();
			context.fill();
			context.stroke();
		}
		// Детали
		context.fillStyle = "black";

		context.beginPath();
		context.moveTo(-600 + value, 150 + positionY);
		context.lineTo(500 + value, 150 + positionY);
		context.closePath();
		context.stroke();

		context.beginPath();
		context.moveTo(-600 + value, 260 + positionY);
		context.lineTo(320 + value, 260 + positionY);
		context.lineTo(320 + value, 275 + positionY);
		context.lineTo(-600 + value, 275 + positionY);
		context.closePath();
		context.fill();
		context.stroke();
	}

	sky(context);
	background(context);
	hill(context);
	sign(context);
	if (value < 300) children(context);
	bus(context, 40);
}

const bus_properties = {
	base: [
		{ x: -600, y: 100 },
		{ x: 500, y: 100 },
		{ x: 500, y: 241 },
		{ x: 700, y: 241 },
		{ x: 700, y: 400 },
		{ x: -600, y: 400 }
	],
	windows: [
		{ x: -590, y: 200 },
		{ x: -510, y: 200 },
		{ x: -510, y: 240 },
		{ x: -590, y: 240 }
	],
	doors: [
		{ x: 320, y: 190 },
		{ x: 380, y: 190 },
		{ x: 380, y: 435 },
		{ x: 320, y: 435 }
	],
	frontWindow: [
		{ x: 465, y: 190 },
		{ x: 500, y: 190 },
		{ x: 500, y: 280 },
		{ x: 465, y: 280 }
	],
	stuff: [
		{ x: -610, y: 360 },
		{ x: -610, y: 360 }
	],
	wheel: { x: -400, y: 400, size: 60, innerSize: 35 },
	wheelDetail: { x: -42, y: 42 }
};

let value = -800;
let angle = 0.5;

const context = document.querySelector("#drawing").getContext("2d");
const moveButton = document.querySelector("#move-button");

draw(context);

moveButton.addEventListener("input", event => {
	value = Number(moveButton.value);
	console.log(value);
	draw(context);
});

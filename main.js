block_image_width = 5;
block_image_height = 5;

ball_y=0;
ball_x=0

function loadImg(){
		fabric.newImage.fromURL(golf-h.png, function(Img) {
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_objectt.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function newImage()
{
	fabric.newImage.fromURL("ball.png", function(Img) {
		ball_object = Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object)
	}
	document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";

		if(keyPressed == '87')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '83')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '65')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '68')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >5)
			{
				ball_y = ball_y + block_image_height;
				console.log("Altura da imagem do bloco t = " + block_image_height);
				console.log("Quando a tecla direcional cima é pressionada, X = " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			}
	}

	function down() 
		{
			if(ball_y <=845)
			{
				ball_y = ball_y + block_image_height;
				console.log("Altura da imagem do bloco t = " + block_image_height);
				console.log("Quando a tecla direcional baixo é pressionada, X = " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			}
		}

	function left()
	{
		if(ball_y <=1875)
			{
				ball_y = ball_y + block_image_height;
				console.log("Altura da imagem do bloco t = " + block_image_height);
				console.log("Quando a tecla direcional baixo é pressionada, X = " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			}
	}

	function right()
	{
		if(ball_y >5)
			{
				ball_y = ball_y + block_image_height;
				console.log("Altura da imagem do bloco t = " + block_image_height);
				console.log("Quando a tecla direcional baixo é pressionada, X = " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			}
	}


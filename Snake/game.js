// Đây là file chứa code của toàn bộ game
let snake, food;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}
// hàm draw() cũng sẽ được chỉnh lại, để mỗi khi isDead == true thì sẽ tạo lại 1 game mới.
function draw() {
   background(0);
   if(!snake.isDead){
      drawSnake();
   } else {
      newGame()
   }
}
//     drawSnake() cũng sẽ được viết thêm để cập nhật lại vị trí
function drawSnake() {
   // update every SNAKE_SPEED frame
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update();
   }
   //
   // textSize(15);
   // text("Score: " + snake.length, 0, 15);
   food.show();
   snake.show();

   // xử lí con rắn khi ăn thức ăn 
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
   }
}

function newGame() {
   snake = new Snake();
   food = new Food();
}

function eatFood() {
   snake.length++;
   food.newFood();
}

// -------------- Tạo chuyển động cho rắn ------------
// _________________ Đi lên: y += 1 _______________
// _________________ Đi xuống: y -= 1 _____________
// _________________ Sang trái: x -= 1 ____________
// _________________ Sang phải: x += 1 ____________


    //     !!!!!!!! Ta nên dùng hàm vector(vel)!!!!!

//  Đi lên: vel = (0, 1);
// Đi xuống: vel = (0, -1);
// Sang trái: vel = (-1, 0);
// Sang phải: vel = (-1, 0);
function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}


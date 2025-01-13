//Canvas Setting
const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");
//ball setting
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;
//floor setting
let ground_x = 100;
let ground_y = 500;
let ground_Height = 5;

//Brick
let brickArray = [];
let count = 0;

//min, max換算一個區間內的值，這樣的funcition 很實用
function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
    brickArray.push(this);
    this.visible = true;
  }

  drawBrick() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  touchingBall(ballX, ballY) {
    return (
      ballX >= this.x - radius &&
      ballX <= this.x + this.width + radius &&
      ballY <= this.y + this.height + radius &&
      ballY >= this.y - radius
    );
  }
}

//Create All Brick position
for (let i = 0; i < 10; i++) {
  new Brick(getRandomArbitrary(0, 900), getRandomArbitrary(10, 580));
}

//mouse 移動
c.addEventListener("mousemove", (e) => {
  ground_x = e.clientX;
});

function drawCircle() {
  //Ball conflict brick
  brickArray.forEach((brick) => {
    if (brick.visible && brick.touchingBall(circle_x, circle_y)) {
      count++;
      console.log(count);
      brick.visible = false;
      //改變x, y方向速度，remove birck
      //從下方撞擊
      if (circle_y >= brick.y + brick.height) {
        ySpeed *= -1;
      }
      //從上方撞擊
      else if (circle_y <= brick.y) {
        ySpeed *= -1;
      }
      //從左方
      else if (circle_x <= brick.x) {
        xSpeed *= -1;
      }
      //從右方
      else if (circle_x >= brick.x + birck.width) {
        xSpeed *= -1;
      }
      //這樣的作法性能會耗費太大
      // brickArray.splice(index, 1);
      // if (brickArray.length == 0) {
      //   alert("Game Over");
      //   clearInterval(game);
      // }
      if (count == 10) {
        alert("Game Over");
        clearInterval(game);
      }
    }
  });

  //Hit Floor
  if (
    circle_x >= ground_x - radius &&
    circle_x <= ground_x + 200 + radius &&
    circle_y >= ground_y - radius &&
    circle_y <= ground_y + radius
  ) {
    //讓球不會卡在floor
    if (ySpeed > 0) {
      circle_y -= 40;
    } else {
      circle_y += 40;
    }
    ySpeed *= -1;
  }

  //牆壁回彈
  //確認右邊邊界
  if (circle_x >= canvasWidth - radius) {
    xSpeed *= -1;
  }
  //確認右邊邊界
  if (circle_x <= radius) {
    xSpeed *= -1;
  }
  //確認上邊界
  if (circle_y <= radius) {
    ySpeed *= -1;
  }
  //確認下邊界
  if (circle_y >= canvasHeight - radius) {
    ySpeed *= -1;
  }

  //更動圓的位置
  circle_x += xSpeed;
  circle_y += ySpeed;

  //畫出BackGround
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  //畫出所有Brick
  brickArray.forEach((brick) => {
    if (brick.visible) {
      brick.drawBrick();
    }
  });

  // Floor
  ctx.fillStyle = "lightblue";
  ctx.fillRect(ground_x, ground_y, 200, ground_Height);

  //Ball
  //arc(x, y, startAngle, endAngle )
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
}

let game = setInterval(drawCircle, 25);

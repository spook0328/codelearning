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

//mouse 移動
c.addEventListener("mousemove", (e) => {
  ground_x = e.clientX;
});

function drawCircle() {
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

  // BG
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

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

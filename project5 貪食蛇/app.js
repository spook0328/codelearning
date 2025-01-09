//Setting
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// getContext() method會回傳一個canvas 的drawing context
//drawing context can paint in canvas
const unit = 20; //格子單位數
const row = canvas.height / unit; //EG:320/20=16
const column = canvas.width / unit; //EG:320/20=16
//Snake
let snake = []; //array 中的每一個元素，都是一個物件object
//object 是儲存蛇身體的X,Y座標
//Snake 的座標
snake[0] = {
  x: 80,
  y: 0,
};

snake[1] = {
  x: 60,
  y: 0,
};

snake[2] = {
  x: 40,
  y: 0,
};

snake[3] = {
  x: 20,
  y: 0,
};

//控制方向
window.addEventListener("keydown", changeDirection);
//初始前進方向
let d = "Right";
//e=event
function changeDirection(e) {
  if (e.key == "ArrowRight" && d != "Left") {
    d = "Right";
  } else if (e.key == "ArrowDown" && d != "Up") {
    d = "Down";
  } else if (e.key == "ArrowLeft" && d != "Right") {
    d = "Left";
  } else if (e.key == "ArrowUp" && d != "Down") {
    d = "Up";
  }
}

//蛇,背景的顏色和呈現
function draw() {
  ctx.fillStyle = "black"; //設定背景全黑
  ctx.fillRect(0, 0, canvas.width, canvas.height); //畫出背景

  //畫出蛇
  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightblue"; //頭部顏色
    } else {
      ctx.fillStyle = "lightseagreen"; //身體顏色
    }
    ctx.strokeStyle = "white"; //蛇的外框顏色

    // fillRect,strokeRect 參數(x,y,width,height)
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit); //畫實心長方形
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit); //畫外框
  }

  //目前d變數方向決定，蛇的下一步座標移動
  let snakeX = snake[0].x; //snake[0]是一個物件，但snake[0].x是一個數字
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unit;
  } else if (d == "Up") {
    snakeY -= unit;
  } else if (d == "Right") {
    snakeX += unit;
  } else if (d == "Down") {
    snakeY += unit;
  }

  //製作新蛇頭
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  //確認蛇吃到果實，有吃會增長，沒吃會消失尾段和建立新頭。
  snake.pop();
  snake.unshift(newHead);
}

//蛇的移動
//setInterval(變數名, 毫秒) 多少豪秒自行運作一次
let myGame = setInterval(draw, 100);

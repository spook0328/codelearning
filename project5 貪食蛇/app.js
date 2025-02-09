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
function createSnake() {
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
}

//果實
class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * column) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }
  //果實設定
  drawFruit() {
    ctx.fillStyle = "lightyellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }
  //果實位置
  pickALocation() {
    let overlapping = false;
    let new_x;
    let new_y;
    //果實位置不會生成在蛇身上
    function checkOverlap(new_x, new_y) {
      for (let i = 0; i < snake.length; i++) {
        if (new_x == snake[i].x && new_y == snake[i].y) {
          console.log("overlapping...");
          overlapping = true;
          return;
        } else {
          overlapping = false;
        }
      }
    }

    do {
      new_x = Math.floor(Math.random() * column) * unit;
      new_y = Math.floor(Math.random() * row) * unit;
      console.log("果實新座標");
      console.log(new_x, new_y);
      checkOverlap(new_x, new_y);
    } while (overlapping);

    this.x = new_x;
    this.y = new_y;
  }
}

//初始設定
createSnake();
let myFruit = new Fruit();
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
  //每次控制方向，在下一次被畫出之前
  //不接受讓和kewdown事件，不然會在程式上自殺
  window.removeEventListener("keydown", changeDirection);
}
let highestScore;
loadHighestScore();
let score = 0;
document.getElementById("myScore").innerHTML = "Game Score:" + score;
document.getElementById("myScore2").innerHTML = "Highest Score:" + highestScore;

//蛇,背景,果實的顏色和呈現
function draw() {
  //每次畫圖，判斷蛇有沒有咬到自己
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      clearInterval(myGame);
      alert("Game Over");
      return;
    }
  }

  ctx.fillStyle = "black"; //設定背景全黑
  ctx.fillRect(0, 0, canvas.width, canvas.height); //畫出背景

  //畫出果實
  myFruit.drawFruit();

  //畫出蛇
  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightblue"; //頭部顏色
    } else {
      ctx.fillStyle = "lightseagreen"; //身體顏色
    }
    ctx.strokeStyle = "white"; //蛇的外框顏色

    //穿牆功能，寫在這需要思考一下，在這是因為for loop 可以一直確認
    if (snake[i].x >= canvas.width) {
      snake[i].x = 0;
    }
    if (snake[i].x < 0) {
      snake[i].x = canvas.width - unit;
    }
    if (snake[i].y >= canvas.height) {
      snake[i].y = 0;
    }
    if (snake[i].y < 0) {
      snake[i].y = canvas.height - unit;
    }

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

  //蛇吃果實
  if (snake[0].x == myFruit.x && snake[0].y == myFruit.y) {
    //重新選擇和畫出果實位置
    myFruit.pickALocation();
    //更新分數
    score++;
    setHighestScore(score);
    document.getElementById("myScore").innerHTML = "Game Score:" + score;
    document.getElementById("myScore2").innerHTML =
      "Highest Score:" + highestScore;
  } else {
    snake.pop();
  }
  //確認蛇吃到果實，有吃會增長，沒吃會消失尾段和建立新頭。
  snake.unshift(newHead);
  window.addEventListener("keydown", changeDirection);
}

//蛇的移動
//setInterval(變數名, 毫秒) 多少豪秒自行運作一次
let myGame = setInterval(draw, 100);

//載入最高分數
function loadHighestScore() {
  if (localStorage.getItem("highestScore") == null) {
    highestScore = 0;
  } else {
    highestScore = Number(localStorage.getItem("highestScore"));
  }
}

//判斷分數是否有最高
function setHighestScore(score) {
  if (score > highestScore) {
    localStorage.setItem("highestScore", score);
    highestScore = score;
  }
}

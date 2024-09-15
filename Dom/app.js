let myLuckyNumbers = [1, 2, 3, 4, 5, 6];
localStorage.setItem("myNumbers", JSON.stringify(myLuckyNumbers)); //儲存好數據

let myArr = JSON.parse(localStorage.getItem("myNumbers")); //取出數據
myArr.array.forEach((element) => {});
// localStorage.setItem("age", "26");

// let myName = localStorage.getItem("name");
// console.log(myName);

// // //console.log(window);
// // //alert("可以不用打window"); //alert function is a method of window object
// // // window.addEventListener("keydown", (e) => {
// // //   console.log(e);
// // // });
// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// document.q
// // let button = document.querySelector("button");
// // button.addEventListener("click", (e) => {
// //   console.log(e.target);
// // });

// // // let button = document.querySelector("button");

// // // button.addEventListener("click", () => {
// // //   let form = document.querySelector("form");
// // //   form.reset();
// // // });

// // // // button.style.backgroundColor = "green";
// // // // button.style.color = "white";

// // // button.style = "background-color:green; color: white;";

// // // let button = document.querySelector("button");

// // // button.addEventListener("click", (e) => {
// // //   console.log(e);
// // // });

// // // button.addEventListener("click", () => {
// // //   let a = document.querySelector("a");
// // //   a.remove();
// // // });
// // //let myHeading = document.getElementById("myHeading1");
// // //let myParahraphs = document.getElementsByClassName("my-p");

// // // let found_elements = document.querySelectorAll("my-p"); //return 長度為似的Nodelist。
// // // console.log(found_elements.length);

// // //let hellos = document.getElementsByName("hi");
// // // let helloss = document.querySelectorAll(".hi");

// // // console.log(hellos.length);
// // // console.log(helloss.length);

// // // let body = document.querySelector("body");
// // // console.log(body.children);

// // // function test(a, b) {
// // //   return a + b;
// // // } 一般function 會需要名稱

// // // function (a,b){
// // //     return a+b;
// // // }funciton exprexion 可以匿名

// // // let Eric = {
// // //   name: "Eric",
// // //   greet() {
// // //     console.log(this.name + "say hello to you");
// // //   },
// // //   walk: function () {
// // //     console.log(this.name + " walking");
// // //   },
// // // };

// // // Eric.greet();
// // // Eric.walk();

// // // (function (a, b) {
// // //   console.log(a + b);
// // // })(10, 5);

// // // let hello = () => {
// // //   console.log("try to say hello");
// // // };
// // // hello();

// // // let Eric = {
// // //   name: "Eric",
// // //   walk: () => {
// // //     console.log("Eric is walking");
// // //   },
// // // };
// // // Eric.walk();

// // // window.addEventListener("click", () => {
// // //   alert("他點擊螢幕樂");
// // // });

// // // let addition = (a, b) => {
// // //   return a + b;
// // // };

// // // console.log(addition(10, 15));

// // // let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7];
// // // myLuckyNumbers.forEach(function (n) {
// // //   console.log(n + 3);
// // // });

// // // myLuckyNumbers.forEach((n, index) => {
// // //   console.log(index);
// // // });

// // // function plus3(n) {
// // //   console.log(n + 3);
// // // }
// // // myLuckyNumbers.forEach(plus3);
// // // for (let i = 0; i < myLuckyNumbers.length; i++) {
// // //   myLuckyNumbers[i] = myLuckyNumbers[i] + 3;
// // // }
// // // console.log(myLuckyNumbers);
// // //function sayHelloToUser() {
// // //  alert("三秒過了");
// // //}

// // //let interval = setInterval(sayHelloToUser, 3000);
// // //clearInterval(interval);

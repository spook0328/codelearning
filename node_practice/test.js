// function factorPrime(n){
//     let ans = n + "=" ;
//     let p = 2 ;
//     while(p <= n){
//         if (n % p == 0){
//             n /= p;
//             ans += p+ " x ";
//         }else{
//             p++;
//         }
//     }
// console.log(ans)
// return ans
// }

// factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"

// function printB(n) {
//   let a = n;
//   let b = 1;
//   while (a >= b) {
//     let c = a / b;
//     console.log(b);
//     b++;
//   }
// }

// printB(6);

function printC() {
  let n = 1;
  let a = 1;
  let b = 1;
  while (n < 5) {
    console.log(a, b);
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    n++;
  }
}
printC(1);

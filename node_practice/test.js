function factorPrime(n){
    let ans = n + "=" ;
    let p = 2 ;
    while(p <= n){
        if (n % p == 0){
            n /= p;
            ans += p+ " x ";
        }else{
            p++;
        }
    }
console.log(ans)
return ans
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
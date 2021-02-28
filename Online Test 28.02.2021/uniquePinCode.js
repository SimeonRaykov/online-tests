function uniquePinCode(codes){
    const [firstNumberUpperBound, secondNumberUpperBound, thirdNumberUpperBound] = codes;

    function isPrime(num) {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }

    for(let i=1; i<=firstNumberUpperBound; i+=1){
        for(let x=2; x<=secondNumberUpperBound; x+=1){{
                for(let y=1; y<=thirdNumberUpperBound; y+=1){
                    if(i% 2 === 0 && y % 2 == 0 && x >= 2 && x <= 7 && isPrime(x)){
                        console.log(`${i} ${x} ${y}`);
                    }
                }
        }
    }
}
}
uniquePinCode([3,5,5]);
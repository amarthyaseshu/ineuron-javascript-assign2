//Factorial of all prime numbers between a given range

//Input
let minRange=1;
let maxRange=100;

//Output
console.log(factorialOfPrimeNumbers(minRange,maxRange));

// Function to fetch factorials of prime numbers in map
function factorialOfPrimeNumbers(minRange,maxRange){
    const factorialMap = new Map();
    for(let i=minRange;i<=maxRange;i++){
        if(isPrime(i)){
            factorialMap.set(i, getFactorial(i));
        }
    }
   return factorialMap;
}

//Function to find the factorial
function getFactorial(number){
    let factorial=1;
    if(number<=1){
        return factorial;
    }
    for(let i=number;i>1;i--){
factorial=factorial*(i);
    }
    return factorial;
}

//Function to check whether the number is prime
function isPrime(number){
if(number<=1){
    return false;
}else{
    let count=0;
    for(let i=2;i<=number/2;i++){
if(number%i===0){
count++
}
    }
    if(count>=1){
        return false;
    }else{
        return true;
    }
}
}
//Sum of multiples of 3 & 5

let sumOfMultiplesOf3=0;
let sumOfMultiplesOf5=0;
let sumOfMultiplesCommon=0;

for(let i=0;i<1000;i++){
    if(i%3===0){
        sumOfMultiplesOf3+=i;
    }
    if(i%5===0){
        sumOfMultiplesOf5+=i;
    }
if(i%15===0){
    sumOfMultiplesCommon+=i;
}
}

//Output
console.log((sumOfMultiplesOf3+sumOfMultiplesOf5)-sumOfMultiplesCommon);
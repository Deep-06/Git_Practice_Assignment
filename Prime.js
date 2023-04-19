//Write a program to find prime numbers
let isPrime = 7;
let count = 0;
for(let i = 2; i < isPrime; i++){
    if(isPrime % i === 0){
    count++;
    }
}
if(count > 0){
  console.log(isPrime, "Not Prime");
}else{
  console.log(isPrime, "Prime");
}
//prime no. from 1-10
let num = 5;
let count = 0;
for(let i = 2; i < num; i++){
    if(num % i === 0){
    count++;
    }
}
if(count > 0){
  console.log(num, "is not a prime number");
}else{
  console.log(num, "is a prime number");
}

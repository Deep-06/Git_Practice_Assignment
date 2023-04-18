//prime no. from 1-10
let count=0;
for(let i=1; i<=10; i++){
  for(let j=1;j<=10;j++){
    if(i%j===0){
    ++count;
  }
  }
}
if(count==2){
  console.log(i);
}

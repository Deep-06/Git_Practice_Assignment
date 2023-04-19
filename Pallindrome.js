//this is palindrome program

let s1="madam";
let bag="";
for(i=s1.length-1;i>=0;i--){
  bag+=s1[i];
}
if(bag==s1){
  console.log("true");
}
else{
  console.log("false");
}
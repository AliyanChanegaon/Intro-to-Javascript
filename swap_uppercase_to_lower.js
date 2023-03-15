// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block





function swapper(arr){

  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower="abcdefghijklmnopqrstuvwxyz"
  let str="";

  for(let i=0;i<arr.length;i++){

   for(let j=0;j<upper.length;j++){

     if(arr[i]==upper[j]){
       str+=lower[j];
       // console.log(str)
     }
     else if(arr[i]==lower[j]){
       str+=upper[j];
       // console.log(str)
     }

     }
   }
  return str;
  
  }

let b="Aliyan";

console.log(swapper(b));
  



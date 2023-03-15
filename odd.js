


function isOdd(num){

  if(num%2!=0){
    return true;
  }
  else{
    return false;
  }
  
}

let b=isOdd(10);
console.log(b);

function printOdd(num){
  let arr=[];

  for(let i=0;i<=num;i++){

   if(i%2!=0){
    arr.push(i);
  }
}

  return arr;
}

let c=printOdd(11);
console.log(c);
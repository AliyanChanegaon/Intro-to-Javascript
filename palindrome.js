
// Reverses a string.
function reverse(str){

  
  let bag="";
  let start=0;
  let end=str.length-1;
  for(let i=str.length-1;i>=0;i--){


    bag+=str[i];
  }
  
  return bag;

  
}


let name ="Aliyan";

let rev=reverse(name);

// Check for palindrome.

function Pcheck(a,b){


  if(a==b){

    return true;
  }
  else{
    return false;
  }
  
}



console.log(Pcheck(name,rev));
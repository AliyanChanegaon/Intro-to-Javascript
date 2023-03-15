

// Function declaration.
function name() {
  let name = 'Aliyan';
  console.log(name);
}

// function calling



function check_PRIME(num) {

  let factors = 0;


  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      factors++
      return false;
    }
    console.log(i)

  }


  if (factors != 0) {
    return false;
  }

  return true;




}
let x = check_PRIME(99);

if (x == true) {
  console.log("PRIME")
} else {
  console.log("NOT A PRIME")
}
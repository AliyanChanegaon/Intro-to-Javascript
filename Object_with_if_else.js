function getDiscount(price, discount) {


  if (discount === "SUMMER20") {
    return price * 0.2;
  }
  else if (discount === "Winter15") {
    return price * 0.5;
  }
  else if (discount === "SPRING10") {
    return price * 0.1;
  }


  else {
    return 0;
  }

}

let d = getDiscount(20, "SPRING10");
console.log(d);


const disss = {
  SUMMER20: 0.2,
  Winter15: 0.5,
  SPRING10: 0.1
};

function gdis(price, discount) {

  // disss is object and [discount] is "SUMMER20"
  return disss[discount] ? price * disss[discount] : 0

  // ternary operator ___ - condition under bracket of normal if()
  //  ? statement same as if(){----------}
  // : else statement part ----

}

console.log(gdis(20, "SUMMER20"))
console.log(gdis(20))
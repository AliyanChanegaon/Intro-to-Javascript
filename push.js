
let A = [1,23,4,5]

function MyPush(value){

  A = [...A,value]
  
}

function MyPop(arr){
 let temp = arr[arr.length - 1]
  arr.length = arr.length - 1
 return temp
  
}


console.log(A)
MyPush(10)
console.log(A, "PUSGH")

let poppedValue = MyPop(A)
console.log( poppedValue ,A, " POP")


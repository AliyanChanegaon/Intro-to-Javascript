let arr = ["MA", "SA", "i", "SCH", "OOL"]

function convertedArr(arr) {

  let neWArr = []



  for (let i = 0; i < arr.length; i++) {
      if(typeof(arr[i]) != "string") neWArr.push(arr[i])
      else neWArr.push(ConvertString(arr[i]))
  }

  return neWArr

}

function ConvertString(str) {

  let newStr = ""

  for (let i = 0; i < str.length; i++) {
    newStr += ConvertChar(str[i])
  }

  return newStr


}

function ConvertChar(char) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < upper.length; i++) {
    if (char == upper[i] || char == lower[i]) return lower[i]
  }

}

console.log(convertedArr(arr))

for(let i=0; i<arr.length; i++){
  arr[i] = arr[i].toLowerCase()
}

console.log(arr)




let obj = {

  name: "Sufiyan",
  surname: "shaikh",
  age: 22,



};

// Changing content of key
obj["name"] = "Sufi";
console.log(obj.name)


obj.name = "Suf";

console.log(obj.name)

// To add new key in an existing object just right 
// name of object and add . and write new key name
// obj- name of object , .location - new key name =""/ or number to add value or string.
obj.location = "Sangamner";
console.log(obj);


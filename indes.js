// const data = {
//   name: "Jhon",
//   age: 40,
//   hobbies: ["Music", "Reading", "Gardening"],
// };

//JSON TO STRING

// const str = JSON.stringify(data);

// console.log(typeof str);

// console.log(str);

//STRING TO JSON

const data = `{"name":"Jhon","age":40,"hobbies":["Music","Reading","Gardening"]}`;

const OBJ = JSON.parse(data);

console.log(typeof OBJ);

console.log(OBJ.name);

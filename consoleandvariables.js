
console.time("Your Code Took:");
console.log("Kya bE Chutiye");
console.table({name:"Abid",marks:'100'});
console.warn("First Table");

console.error(500<150,"This is not possible.");

//Object literals

 let stMarks={harry:100, Abid:300,Shrijon:250};
 console.table(stMarks);
 console.log(stMarks['harry']);

 //way to convert

let abid=stMarks['harry'];

abid=abid.toString();
console.log(typeof abid);

let shrijon="250";
shrijon=Number(shrijon);
console.log(shrijon);

let abidGrade=2.79;

console.log(abidGrade.toFixed(3));//to fixed is used to determine how much values you want after the decimal point.















 console.timeEnd("Your Code Took:");


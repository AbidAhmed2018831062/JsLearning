console.log("Mein Hoon Kaun, Mein Hoon Kaun, Mein Hoon Local Storage The Chota Don!!");
let con=document.querySelector(".container");
localStorage.setItem("Name","Abid Ahmed");

localStorage.setItem("Age",20);

localStorage.setItem("DOB","29 Nov 2000");

let inst=['SUST','BGPSC'];

localStorage.setItem("Instituitions",JSON.stringify(inst));


let ul=document.getElementsByClassName("UL")[0].children[0];

let h1=document.createElement("h3");


h1.style.cursor="pointer";

let p=document.createElement("p");

let ret=JSON.parse(localStorage.getItem("Instituitions"));

h1.innerText=`My name is ${localStorage.getItem("Name")}. My age is ${localStorage.getItem("Age")}. My isntitutions are ${ret[0]} and ${ret[1]}.`;

con.appendChild(h1);


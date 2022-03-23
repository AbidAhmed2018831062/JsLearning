console.log("Mein Abhi Tak Zinda Hoon Bhosdiwalon");

let a = "j";

let ar=document.links;

Array.from(ar).forEach(function(e){
    let hre=e.href;
    if(hre.includes(a))
    console.log(hre);
});

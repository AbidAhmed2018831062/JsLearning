console.log("Alram");

let alarm=document.getElementById("alarm");
let al=document.getElementById("al");
alarm.addEventListener("click",(e)=>{
    let first=al.value;
    e.preventDefault();
    let firstDate=new Date(first);
    console.log(firstDate);

    let today=new Date();

    console.log(today);

    let diffe=firstDate-today;
    console.log(diffe);

    if(diffe>=0)
    {
        setTimeout(()=>{
          let au=new Audio("Winter.mp3");
          au.play();
          setTimeout(()=>{
              au.pause();
          },10000);
          setInterval(()=>{
           au.play();
          },50000)
        },diffe);
    }


});

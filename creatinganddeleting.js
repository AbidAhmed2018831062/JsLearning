console.log("Yo Boy, We are in creating section!!");


let di=document.querySelector(".UL");


let di2=document.querySelector("ul");
console.log(di2);
di2.style.padding="10px";
di2.style.boxStyle="border-box";



let con=document.querySelector(".container");

con.style.margin="0px";

let h1=document.createElement("h3");

h1.innerText="Click to watch my top5 favorite footballers:";
h1.style.cursor="pointer";


con.insertBefore(h1,di);


h1.addEventListener("click",function(e){
    let ul=document.getElementsByClassName("UL")[0].children[0];
    for(let i=0;i<5;i++)
    {
        let li=document.createElement("li");
    
        li.className="abid";
    
        if(i==0)
        li.innerText="Lionel Messi";
        else if(i==1)
        li.innerText="de Bruyne";
        else if(i==2)
        li.innerText="Pedri";
        else if(i==3)
        li.innerText="Neymar"
        else
        li.innerText="Hazard";
    
        li.style.listStyleType="rectangle";
        li.style.margin="0px";
        li.style.padding="0px";
    
      
    
        ul.appendChild(li);
    }

    let p=document.createElement("p");

    p.innerHTML="<b>Hide....</b>";

    p.style.margin="0px";

    p.style.padding="0px";

    p.style.cursor="pointer";

    ul.appendChild(p);
    p.addEventListener("click",function(e){
        ul.style.display="none";
    });




    
});







document.getElementsByTagName("div")[0].addEventListener("mousemove",function(e){
    let x=e.offsetX/4;
    let y=e.offsetY*20;
    let avg=(x+y)/2;

    console.log(x,y);

document.getElementsByClassName("container")[0].style.backgroundColor=`rgb(${x},${y},${avg})`;
});



function kDrama(rating, name)
{
    this.rating=rating;
    this.name=name;
   this.returnName=function()
   {
       return this.name;
   }
   this.returnRating=function()
   {
       return this.rating;
   }
}

let ar=new Array();
let guFamily=new kDrama(5,"Gu Family Book");
let goblin=new kDrama(9.5,"Goblin");
let reply1988=new kDrama(9,"Reply1988");
ar.push(guFamily);
ar.push(reply1988);
ar.push(goblin);

ar.sort(function(a,b){
return b.returnRating()-a.returnRating();
});

console.log(ar);
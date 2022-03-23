console.log("Ham Abhi Zinda He");

let childs=document.getElementsByClassName("child1");

Array.from(childs).forEach(function(e){
    //console.log(e);
    e.style.color="red";
    e.style.marginTop="10px";
    if(e.id=="Abid")
    {
        e.innerHTML="<b>Author of this html document is Abid Ahmed </b>"
    }
});


let ul=document.querySelector(".UL");
//console.log(ul.children[0]);

ul.style.margin="0px";

for(let i=0;i<ul.children[0].childElementCount;i++)
{
    let list=ul.children[0].children[i];
    console.log(ul.children[0].children[i]);
     list.innerText="Kya Tujhe Ab Ye Dil Bataye";

    list.style.margin="0px";
    list.style.listStyleType="rectangle";


}
console.log("Mein Abhi Zinda Hoon");

function Abid()
{
    return new Promise(function(resolve,reback){
    {
        if(1)
        resolve();
        else
        reback();
    }
})
};
Abid().then(()=>{
    console.log("Abid Ahmed");})
.catch(function(){
    console.log("Are Ma Chud Gayi!!");
});


let load=document.getElementById("btn2");
let post=document.getElementById("btn1");
console.log(load);
function loadData()
{
    fetch("https://api.github.com/users").then(res=>{
        return res.json();
    }).then(data=>{
        showData(data);
      //console.log(data)
    }).catch(()=>{
        console.log("Tumse Na Ho Payega Beta!!");
    });
}


load.addEventListener("click",()=>{
loadData();
}
)

function showData(data)
{
    var ul=document.getElementById("UL");
    //console.log(ul);
   let html="";
    Array.from(data).forEach((x,i)=>{
    html+=`<li>${x.login}
    <ul>
    <li>${x.url}></li>
    </ul>
    </li>`
    });

    ul.innerHTML=html;
}
post.addEventListener("click",()=> postData());

function postData()
{
   let url = "	http://dummy.restapiexample.com/api/v1/create";
  let body=` {"name":"Leo Messi","salary":"35m+bonus","age":"34"}`;


  let params={
      method:'post',
     body:JSON.stringify(body)
  };

fetch(url,params).then(response=>  response.json()).then( data=> console.log(data)).catch(()=>{
    console.log("tumse na ho payega beta");
});


}

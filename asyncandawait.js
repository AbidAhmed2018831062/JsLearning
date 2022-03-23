let post = document.getElementById("btn1");

let load = document.getElementById("btn2");

let ul = document.getElementById("UL");


post.addEventListener("click",e=>{
   postData();
});


load.addEventListener("click",e=>{
    getData().then(data=>{
        console.log(data);
        print(data);
    }).catch(()=>console.log("Error"));
});

async function getData()
{
    let url="https://api.github.com/users";

    let data;
     const response=await fetch(url);

     if(response.ok){
     data= await response.json();
     }

     return data;
}
const print= data=>{
    let html = "";
    let j = 0;

    Array.from(data).forEach(function (e, i) {
    j++;
      //  console.log(e);
      html += `
      <li id="${j}" style="font-weight:bold; cursor:pointer;">Github Id: ${e.id}<br>
      <ul id="show${j}" style="display:none;     list-style-type:roman font-weight:normal;">
       <li><a style:"color=black; text-decoration=none;"href="${e.html_url}">${e.login}</a></li>
       <li><a style:"color=black; text-decoration=none;"href="${e.followers_url}">${e.login} followers</a></li>
       <li><a style:"color=black; text-decoration=none;"href="${e.following_url}">${e.login} following</a></li>
      </ul>
      <br><br>
      </li>
     `;
    });
    ul.innerHTML = html;
    let open = new Array(j);
    let show = new Array(j);

    for (let i = 1; i <= j; i++) {
      open[i] = document.getElementById(i + "");
      show[i] = document.getElementById("show" + i + "");
      open[i].addEventListener("click", function (e) {
        if (show[i].style.display === "none") {
          show[i].style.display = "block";
        } else show[i].style.display = "none";
      });
    }
}
async function postData(){
  console.log("First");
  let url="http://dummy.restapiexample.com/api/v1/create";
     let data=	`{"name":"Abid Ahmed123","salary":"123","age":"23"}`;
     let params={
        method:'post',
        body:data
    };
    let data1;
  const response=await fetch(url,params);
  if(response.ok){
   data1=await response.json();
  }

  console.log(data1);


}
console.log("Annyeongghasseyo, Ajax.jsimmida");
let load = document.getElementById("btn1");

let post = document.getElementById("btn2");

let ul = document.getElementById("UL");

load.addEventListener("click", function (e) {
  let xml;
  xml = new XMLHttpRequest();
  //xml.open("GET","https://jsonplaceholder.typicode.com/posts",true);

  xml.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xml.getResponseHeader("Content-type", "application/json");

  xml.onprogress = function () {
    console.log("Mein Chala Ghaddi Leke!");
  };
  xml.onload = function () {
    if (this.status === 200) console.log(this.responseText);
    else console.log("Error Happened");
  };
  json = `{"name":"Abid Ahmed","salary":"80,000","age":"20"}`;
  xml.send(json);
});
const callPromise = () => {
  return new Promise(function (resolve, reject) {
    let xml;
    xml = new XMLHttpRequest();
    console.log("OK");
    xml.open(
      "GET",
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-22&sortBy=publishedAt&apiKey=36d255d0d243434085a8f690e7e980ff",
      true
    );
    // xml.getResponseHeader("Content-type","application/json");

    xml.onprogress = function () {
      console.log("Mein Chala Ghaddi Leke!");
    };
    xml.onload = function () {
      if (this.status === 200) {
        resolve(this.responseText);
      } else reject();
    };

    xml.send();
  });
};
post.addEventListener("click", function (e) {
  // console.log("OK");
  callPromise()
    .then(function (r) {
      console.log("Data Loaded Successfully");
      let data = JSON.parse(r);
      console.log(data.articles);
      let html = "";
      let j = 0;

      Array.from(data.articles).forEach(function (e, i) {
        j++;
        //  console.log(e);
        html += `
        <li id="${j}" style="font-weight:bold; cursor:pointer;">Employee Id: ${e.title}<br>
        <p id="show${j}" style="display:none; font-weight:normal;">
           ${e.description}
        </p>
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
    })
    .catch(function () {
      console.log(
        "Some Error Occured!! We will try to resolve the problem as quickly as possible"
      );
    });
});

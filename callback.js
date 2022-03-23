console.log("Call back.jsimmida");

let students=[{name:"Abid",langugae:"JavaScript"}];


function addStudents(std,callback)
{
    setTimeout(() => {
        students.push(std);
        console.log(std);
        callback();
    }, 8000);
}

function printStudents(){
    setTimeout(() => {
        let ul=document.getElementById("UL");

        let html="";
 ch(function(e,i){
    
            html += `
            <li id="${j}" style="font-weight:bold; cursor:pointer;">Students Id: ${j}<br>
            <ul id="show${j}" style="display:none; font-weight:normal;">
            <li style="list-style-type:rectangle;">Employee Name: ${e.name}</li>
            <li style="list-style-type:rectangle;">Employee Salary: ${e.language} Taka</li>
            </ul>
            <br><br>
            </li>
           `;
           j++;
        });
        ul.innerHTML=html; 
    }, 1000);

  
}

addStudents({name:"Shakib",language:"English"},printStudents());
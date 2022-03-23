console.log("Annyeonghasseyo, Asynchronusimmida");
let clock=document.getElementById("clock");
class Employee {
    constructor(joiningYear,salary,jTitle)
    {
       
        this.joiningYear=joiningYear;
        this.salary=salary;
        this.jTitle=jTitle;
    }
    
    setJTitle(jTitle)
    {
        this.jTitle=jTitle;
    }
    
    
    };
    let Abid=new Employee(2021,"$80000","Junior Programmer");
setTimeout(() => {
    for(let key in Abid)
    {
        console.log(`The value of ${key} is ${Abid[key]}`);
    }
}, 100);

//creating a clock

setInterval(() => {
    let cmonth=new Date().getMonth();
    let month="";
    if (cmonth == 1 - 1)
        month = "January";
    else if (cmonth == 2 - 1)
        month = "February";
    else if (cmonth == 3 - 1)
        month = "March";
    else if (cmonth == 4 - 1)
        month = "April";
    else if (cmonth == 5 - 1)
        month = "May";
    else if (cmonth == 6 - 1)
        month = "June";
    else if (cmonth == 7 - 1)
        month = "July";
    else if (cmonth == 8 - 1)
        month = "August";
    else if (cmonth == 9 - 1)
        month = "September";
    else if (cmonth == 10 - 1)
        month = "October";
    else if (cmonth == 11 - 1)
        month = "November";
    else month = "December";
    clock.innerText=`Today's date is ${new Date().getDate()} ${month} ${new Date().getFullYear()} and time is ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}, 1000);

console.log("Mein Pehle Aya");

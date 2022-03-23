
console.time("Your Code Took:");

console.log("Annyong");
//String and Methods
let kDrama="Uncontrollably Fond: Cast: Won Bin, Bae Suzy";

console.log(kDrama.length);
console.log(kDrama.substr(0,9));
console.log(kDrama.includes("Kim Go"));
kDrama=kDrama.replace("Won Bin","Kim Won Bin");
console.log(kDrama.replace("Won Bin","Kim Won Bin"));
console.log(kDrama.indexOf("Kim"));
console.log(kDrama.endsWith("Suzy"))

let ar=kDrama.split(" ");

console.table(ar);

for(let i=0;i<ar.length;i++){
console.log(ar[i]);
}

//Array and Methods with objects

let marks=[100,200,300,400,500,600];

let marks3=[100,200,300,400,500,600];
let nameMarks=['Abid',100,'Shrijon',300,'Midul',0];

marks.push(200);//will add value to the end of the array
console.log("after pushing "+marks);
marks.unshift(300);//will add value to the start of the array
console.log("after unshifting "+marks);

marks.pop();//will delete from the end of the array
console.log("after poping "+marks);
marks.shift();//will delete from the start of the array
console.log("after shifitng "+marks);

marks=marks.concat(marks3);
console.log("after concating "+marks);

marks.splice(4,3);//will remove 3elements starting from 4th index
let i=marks.indexOf(300);
console.log("The index of 300 is "+i);

let mixed=['Abid',1,2,3,[4,5,6]];

for(let i=0;i<mixed.length;i++)
{
    if(Array.isArray(mixed[i]))
    {
        for(let j=0;j<mixed[i].length;j++)
        {
            console.log("I am inside of another array and my value is "+mixed[i][j]);
        }
    }
    else
    console.log("I am inside of a normal array and my value is: "+mixed[i]);
}




//objects
let galis={
     bokchod:"Bengali",
};

galis.Behenchod="Indian";
galis.Isekki="Korean";


//creating objects with the use of functions
function Student(name,roll,class1,grade)
{
     this.name=name;
     this.roll=roll;
     this.class1=class1;
     this.grade=grade;

     this.display=function(){
         console.log(this.name);
         console.log(this.roll);
         console.log(this.class1);
         console.log(this.grade);
     }
}

let st=new Student("Abid Ahmed",2018831062,15,2.79);

st.display();

console.log(galis['bokchod']);








console.timeEnd("Your Code Took:");

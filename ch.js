console.log("Need to check");

class students{
constructor(name, roll,grade)
{

    
    this.name=name;
    this.roll=roll;
    this.grade=grade;
}

 setName(name)
{
   this.name=name;
}
returnName(){
return this.name;
}
};

let Student={
    "Name":"Sadman Shakib",
    "Subject":"Physics",
    "Language":['Python','C'],
    returnValues:()=>
    {
        console.log(Name,Subject,Language);
    }
};




let stu=new students("Abid",62,2.79);
console.log(stu);

stu.setName("Abid Ahmed");

console.log(stu);

console.log(Student);


Student.Language[0]='c';

console.log(Student.Language[0]);
//constructors

function Student(name,roll,uni,dept)
{
    this.name=name;
    this.roll=roll;
    this.uni=uni;
    this.dept=dept;

    this.display=function()
    {
        console.log(`I am ${this.name}. My roll is ${this.roll}. Currently studying in ${this.uni} at ${this.dept} department.`);
    }
}
//prototype. Can be used to change the prototype of the Student constructor but we shold neve the change the prototype of Obejct literal

Student.prototype.setName=function(name)
    {
       this.name=name;//name will be changed can be thought as the function of class but outside of the class.
    }

let abid=new Student("Abid Ahmed",2018831062,"SUST","Software Engineering");

abid.display();


abid.setName("Ahmed Abid");

abid.display();


class Person{
    constructor(name,age,dob,bornPlace){
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.bornPlace=bornPlace;
    }
    setName(name){
        this.name=name;
    }
    returnName()
    {
        return this.name;
    }
    
    };
    
class Employee extends Person{
constructor(name,joiningYear,salary,jTitle,age,dob,bornPlace)
{
    super(name,age,dob,bornPlace)
    this.joiningYear=joiningYear;
    this.salary=salary;
    this.jTitle=jTitle;
}

setJTitle(jTitle)
{
    this.jTitle=jTitle;
}


};



let Abid=new Employee("Abid Ahmed",2021,"$80000","Junior Programmer",20,"29 Nov 2021","Sylhet");

console.log(Abid,Abid.returnName());

Abid.setName("Ahmed Abid");

console.log(Abid);

let person=new Person("Chutiya",19,"20 Nov 2001","Dhaka");

console.log(person);

//can be printed with for in function
for(let key in Abid)
{
    console.log(`The value of ${key} is ${Abid[key]}`);
}
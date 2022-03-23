console.log("De Irimi ArroFunction.jsimmida");
// no need to use parenthesis when only one argument is recieving and no need to use return and {} when writing one line
const greet= name => "Good Morning "+name;

console.log(greet("Abid"));

const languages= (l1,l2) => "I have learnt languages "+l1+" and "+l2;

console.log(languages("C","C++"));


//while returning object we need to use parenthesis

const students=()=> ({name:"Abid Ahmed",Age:20,class:15,grade:2.79});

console.log(students());
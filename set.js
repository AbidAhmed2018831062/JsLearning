console.log("Kya be chutiye kaisa he!!");

let set= new Set();

set.add("Abid");

set.add("Ahmed");

set.add("2018831062");

set.add("Software");

set.add("Engineering");

set.add("Shahjalal");

set.add("University");

set.add("of");

set.add("Technology");



console.log(Array.from(set));


set.delete("Engineering");
console.log(set);


for(let values of set)
{
    console.log(values);
}


console.log(set.has("abid"));
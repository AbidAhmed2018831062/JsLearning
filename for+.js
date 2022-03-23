
console.time("Your Code Took:");


let marks = [100,200,300];
let marksofStudents=[[100,200,300],[100,200,150]];

console.log("Mein Hoon For In, For Of And For Each Loop");


for(let value of marks)
{
    console.log(value);
}

for(let key in marks)
{
    console.log(key);
}

marks.forEach(function(value,i,arr){
    
    arr[i]=value*400;
});

console.log(marksofStudents);




























console.timeEnd("Your Code Took:");
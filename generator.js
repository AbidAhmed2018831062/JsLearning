console.log("Generators");
//The Speciality of generation function is that it gives us the next value all the time and saves the memory
function* numbersGen()
{
    let i=0;

    while(true)
    {
        yield i++;
    }
}
let gen=numbersGen();
for(let i=0;i<100;i++)
{
       console.log(gen.next().value);
}

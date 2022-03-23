console.log("Mein hoon bhosdiwala");

//This is called regular literal
let find=/abid/gi;//it means all the abid word in the string and also case insensitive

/* There are five functions related to regular expression
1) exec
2) test
3) match
4) search
5) replace

*/

let string="My name is Abid Ahmed. Abid Ahmed is a web developer. Abid Ahmed is an android developer. Abid likes to play cricket. Abid likes to watch football, cricket, movie,series."

//Exec->It returns an array of elements if the word we are searching is founded
while(1)
{
    let result=find.exec(string);
    if(result==null)
    break;
    console.log(result.index);
}

//Test-> It returns true or false

console.log(find.test(string));

//match returns all the words in an array

console.log(string.match(find));

//search returns the index of the word
console.log(string.search(find));

//replace-> It replaces all the words with the given string

console.log(string.replace(find,"ABID"));




console.log('This is tutorial 47');

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/;//matches if the string has '*' in it or not

//character sets

let str="";
 str = "h*rry means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harrry bhai"
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

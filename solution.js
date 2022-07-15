//1. 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function sumIntFrom1ToN(n){
sumInt= 0;
for(i=1;i<=n;i++)
sumInt+=i;
return sumInt;
}
console.log(sumIntFrom1ToN(4), sumIntFrom1ToN(13), sumIntFrom1ToN(600));

//2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

function sumOfCubes(num1,num2,num3)
{
return ((num1**3)+(num2**3)+(num3**3))||num1**3+num2**3||num1**3||0;
}
console.log(sumOfCubes(1, 5, 9), sumOfCubes(2), sumOfCubes());

//3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
function isStrStartOfWord(string,word){
return string == word.slice(0, string.length);
}
console.log(isStrStartOfWord("bu", "button"), isStrStartOfWord("tri", "triplet"), isStrStartOfWord("beau", "pastry"))

//4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function isLEQZero(n){
return n<=0;
}
console.log(isLEQZero(3), isLEQZero(0), isLEQZero(-4), isLEQZero(10))

//5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

function countOccurrences(string,letter){
let stringLength= string.length;
let occurences=0;
for(i=0;i<stringLength;i++)
{
if(string[i]==letter)
occurences++;
}
return occurences;
}

console.log(countOccurrences("this is a string", "i"));
//1. 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function sumIntFrom1ToN(n){
    sumInt= 0;
    for(i=1;i<=n;i++)
    sumInt+=i;
    return sumInt;
    }
    console.log('1.Add Up.\n',sumIntFrom1ToN(4),'\n', sumIntFrom1ToN(13),'\n', sumIntFrom1ToN(600));
    
    //2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
    
    function sumOfCubes(num1,num2,num3)
    {
    return ((num1**3)+(num2**3)+(num3**3))||num1**3+num2**3||num1**3||0;
    }
    console.log('2.Cubed.\n',sumOfCubes(1, 5, 9),'\n',sumOfCubes(2), '\n', sumOfCubes());
    
    //3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
    function isStrStartOfWord(string,word){
    return string == word.slice(0, string.length);
    }
    console.log('3.String Check.\n',isStrStartOfWord("bu", "button"),'\n', isStrStartOfWord("tri", "triplet"),'\n', isStrStartOfWord("beau", "pastry"));
    
    //4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
    function isLEQZero(n){
    return n<=0;
    }
    console.log('4.Less Than or Equal to Zero?\n',isLEQZero(3),'\n', isLEQZero(0),'\n', isLEQZero(-4),'\n', isLEQZero(10));
    
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
    console.log("5. Count Occurences\n", countOccurrences("this is a string", "i"));
    
    //6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.
    
    function calcBaseToExponent(n1, n2) {
    return n1**n2;
    }
    
    console.log('6. X To The Power of X.\n',
        calcBaseToExponent(5, 5),'\n',
        calcBaseToExponent(10, 10),'\n',
        calcBaseToExponent(3, 3));
    
    //7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
    
    function dogAge(age){
    return 'Your doggo is '+age*7+' years old in dog years!';
    }
    console.log('7. Dog Years.\n',dogAge(4));
    
    //8. A Lifetime Supply... You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.
    
    function calcLifetimeSupply(age,snacks){
    return `The snack company should provide you with ${Math.round((100-age)*snacks*365.25).toLocaleString()} units, until you are a ripe old age of 100. Happy snacking!`;
    }
    
    console.log('8. A Lifetime Supply...\n',calcLifetimeSupply(25, 2),'\n',calcLifetimeSupply(40, 3));
    
    // Bonus: a. Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day). 
    function calcLifetimeSupply(age,snacks, maxAge){
    //snacks=Math.round(snacks);
    return `The snack company should provide you with ${Math.round((maxAge-age||100-age)*snacks*365.25).toLocaleString()} units, until you are a ripe old age of ${maxAge||100}. Happy snacking!`;
    }
    console.log('Bonus:\n',calcLifetimeSupply(32, 0.58, 65));
    
    //9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
    
    function isWaldoHere(string){
    string = string.toLowerCase();
    return string.indexOf('waldo')>=0;
    }
    console.log("9. Where's Waldo?\n",isWaldoHere("is there a wal here?"),'\n', isWaldoHere("I found you Waldo!"),'\n', isWaldoHere("Wait, don't you mean Wally?"),'\n', isWaldoHere("waldo is here"));
    
    //10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
    
    function isEqualSlices (a, b, c){
    return a/b>=c;
    }
    console.log( '10. Pie.\n',isEqualSlices(11, 5, 3), '\n',isEqualSlices(8, 3, 2) ,'\n',isEqualSlices(8, 3, 3) ,'\n',isEqualSlices(24, 12, 2)  );
    
    
    // 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
    
    function isEqualNumXandO(aString){
    aString = aString.toLowerCase();
    return countOccurrences(aString,'x')===countOccurrences(aString, 'o');
    }
    console.log('11. XO\n',isEqualNumXandO("ooxx"),'\n',isEqualNumXandO("xooxx"), '\n',isEqualNumXandO("ooxXm"),'\n',isEqualNumXandO("zpzpzpp"), '\n',isEqualNumXandO("zzoo"));
    
    
    // 12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
    function isPrime(num){
    if(num<2)
    return false;
    else if(num>2)
    for(i=2;i<num;i++)
    {
    if(num%i===0)
    return false;
    }
    return true;
    }
    console.log('12. isPrime?\n',
        isPrime(7),'\n',
        isPrime(9),'\n',
        isPrime(10),);
    
    //13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.
    
    function isValidEmail(anEmail){
    
    anEmail = anEmail.toString().trim();
    
    if(countOccurrences(anEmail,'.')>3)
    {
    for(i=anEmail.indexOf('.')+1;i<anEmail.lastIndexOf('.')-1;i++)
    {
    if(anEmail[i]=='.' && anEmail[i+1]=='.')
     return false;
    };
    }
    return anEmail.indexOf('.')>0&&anEmail.indexOf('@')<anEmail.lastIndexOf('.')&&countOccurrences(anEmail,'@')===1&&anEmail.indexOf('@')>0&& anEmail.lastIndexOf('.')<anEmail.length-2&&anEmail[anEmail.indexOf('@')+1]!='.'&&anEmail[anEmail.indexOf('@')-1]!='.'&&anEmail[anEmail.indexOf('.')+1]!='.'&&anEmail[anEmail.indexOf('.')-1]!='.'&&anEmail[anEmail.lastIndexOf('.')+1]!='.'&&anEmail[anEmail.lastIndexOf('.')-1]!='.'
    }
    
    console.log('13. Validate Email.\n',isValidEmail("j@example.com"),isValidEmail("@example.com"),'\n',isValidEmail("john.smith@com"),isValidEmail("john.smith@email.com"),'\n',isValidEmail("john..smith@email.com"),isValidEmail("john.@email.com"),isValidEmail("john@.email.com"));

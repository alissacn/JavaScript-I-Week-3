/* Exercise E (10 minutes)
   1- Create a function that takes a birthYear, and returns the age of someone
   2- You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
   3- Take this array and create another array containing their ages.
   4- console.log the birth years array
*/

const birthYearArray = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function CalcYourAge(birthyear) {
    return 2022 - birthyear;

};


console.log(CalcYourAge(birthYearArray));
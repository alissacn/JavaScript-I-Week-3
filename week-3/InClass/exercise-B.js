/* Exercise B (10 minutes)
   1- Use the array of the people from your class
   2- Combine it with another array filled with the names from another class
   3- console.log the names in alphabetical order
   4- Create a function that takes a name and an array of names and returns a string. 
   If the name is not in an array, it should return "<name> is not at the class with 
   <people in the array>". If the name is in the array, it should return <name> is at 
   the class with <people in the array>.
*/

const peopleInClass = ["Mimi ", "Jojo ", "Adilson ", "Alissa"];
const OtherClass = ["Joel", "Luana", "Kate", "Ana"];

const NewArray = peopleInClass.concat(OtherClass);

console.log(NewArray.sort());



ArrayNames = ["Fran", "Cesar", "Joaquim", "Kate", "Emily"];

function NameInTheArray(Name) {
    if (ArrayNames.includes(Name)){
        return ("<name> is at the class with <people in the array>.") 
    } else {
        return ("<name> is not at the class with <people in the array>.")
    }
}

console.log(NameInTheArray("Fran"));


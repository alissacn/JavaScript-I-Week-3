/*Exercise H (10 mins)
  Create a function which:
  Takes an array of names
  Looks to see if your name is in the array
  If it is, return Found me!; if not, return Haven't found me :(
*/


const Names = ["Rato" , "Gato", "Cao", "Dog"];


function FindName(name) {
  if (Names.find((name) => name === Names)) {
    return "Found Me!"
  }
  return "Havent Found Me!"
}


console.log(FindName("Jojo"));
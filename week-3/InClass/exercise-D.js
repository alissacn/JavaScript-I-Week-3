/*Exercise D
  Modify your callback function from the previous exercise so that it also
  sorts  namesArray in alphabetical order
*/

function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput();

};

function UpperCase(array) {
return () => array.map(word => word.toUpperCase()).sort();
}

console.log(magician(UpperCase));









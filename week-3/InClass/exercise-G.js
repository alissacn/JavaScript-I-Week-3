/*Exercise G (10 mins)
  Create a function which:
  Takes an array of birthYears
  Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
  Returns an array of people who can drive (remember, you can drive if you are 17 years or older)
*/

birthyear
function CalcYourAge(birthyear) {
  return 2022 - birthyear;

};

function PeopleWhoCanDrive(age) {
  const year = CalcYourAge(birthyear);
  const drivinAge = 17;
  if (age >= drivinAge) {
    console.log("These are the birth years of people who can drive:");
    return age;
  }
};


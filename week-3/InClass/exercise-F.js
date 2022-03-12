/*Exercise F (5 minutes)
  You can drive in the UK at the age of 17.
  Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
  Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
  console.log the answers.
*/


function FindOutIfYouCanDrivre(age) {
  return 2022 - age;
};


function CanIDrive(birthYear) {
  const age = FindOutIfYouCanDrivre(age);
  const driveAge = 17;
  if (age >= driveAge) {
    return "Born in " + birthYear + " can drive."
  }else {
    return "Born in "  + birthYear + " cannot drive."
  }
}

const ages = [];


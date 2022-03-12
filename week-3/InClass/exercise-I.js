/* Create a function which accepts an array of "messy" strings. Example:
   This function should:
   Remove all non-string entries
   Change the strings to upper case, and add an exclamation mark to the end
   If you're using the above example, you should expect to return an array with 2x ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!
*/


const MessyNames = [100, "iSMael", 55,45,"sANyiA",66,"JaMEs","eLAmIn", 23, "IsMael",67, 19, "ElaMIN"];

function FixMessyString(messyString) {
   return messyString;
   MessyNames.filter((string) => typeof string === "string")
   .map((string) => string.toUpperCase())
   .map((string) => string + "!")
}

console.log(FixMessyString(MessyNames));
function isStringPalendrome(str) {
    const strLenght = str.length;
    for (let i = 0; i <= strLenght / 2; i++) {
        if (str.charAt(i) != (str.charAt(strLenght - 1 - i))) {
            return false;
        }
    }
    return true;
}


console.log(isStringPalendrome('acbba'));

//SIMPLE TEST
const testPal = ['aa', 'ab', 'aaa', 'abba', 'A man a plan a canal Panama']
const testPalLen = testPal.length;
for (let i = 0; i<testPalLen; i++) {
    console.log(testPal[i] + ' > ' + isStringPalendrome(testPal[i]));
}


//CLASSIC SOLUTION
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");

//CLASSIC WITH ARRAY
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");

//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/


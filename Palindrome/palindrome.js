function palindrome(str) {
var string = str;
string = string.toLowerCase();
var straightArray = string;
var reversedArray = string;
straightArray = straightArray.split("");
reversedArray = reversedArray.split("");
reversedArray = reversedArray.reverse();
function checkCharacters (array) {
    for (var i = 0; i < array.length; i++) {
    var testArray = [" ","_","-",",",".","*","#",")","$","@","(","\\","/"];
        for (var x = 0; x < testArray.length; x++) {
            if (array[i] === testArray[x]) {
                delete array[i];
            }
        }
    }    
}
checkCharacters(straightArray);
checkCharacters(reversedArray);
console.log(straightArray);
console.log(reversedArray);
straightArray = straightArray.join("");
straightArray = straightArray.split("");
reversedArray = reversedArray.join("");
reversedArray = reversedArray.split("");
function arraysEquality (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      console.log(false);
      return false;
        }
    }
  console.log(true);
  return true;
  }
return arraysEquality(straightArray, reversedArray);
}

palindrome("A man, a plan, a canal. Panama");







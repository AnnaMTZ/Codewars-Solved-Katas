    //Solved
    // var warsOne = new Array('a', 'b', 'c', 'x');
    // var arraySearch = warsOne[3];

    function warArray(warsOne, arraySearch) {
        for (i = 0; i <= warsOne.length; i++) {
            if (warsOne[i] == arraySearch) {
                return true;
            }
        }
        return false;
    }

    console.log(warArray(['a', 'asdfadsf', 'abbvzb'], 'a'));
    console.log(warArray(['adf', 'asdfadsf', 'abbvzb'], 'adffadsfdsaf'));
    console.log(warArray(['adf', 'bsdf', 'aadsf', 'abb'], 'abb'));
    console.log(warArray(['adf', 'bsdf', 'aadsf', 'abb'], 'abbcads'));


   // Solved 

/*  You are given an array with positive numbers and a non-negative number N. 
You should find the N-th power of the element in the array with the index N. 
If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
*/

// Let's look at a few examples:

   /*array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
   array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

   function index(array, n){
   if (array.includes(array[n])) {
       return Math.pow(array[n], n); 
   } else {
       return -1;
   }
}

console.log(index([1, 2, 3, 4],2));
console.log(index([1, 3, 10, 100],3));
console.log(index([1, 2],3));
console.log(index[1,1,1,1,1,1,1,1,1,1],9);
console.log(index([1,1,1,1,1,1,1,1,1,2], 9));
console.log(index([29,82,45,10], 3));
console.log(index([6,31], 3),-1);
console.log(index([75,68,35,61,9,36,89,0,30], 10));



// Solved

function isDivisible(n, x, y) {
return n%x === 0 && n%y === 0;
}

console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));
console.log(isDivisible(8,3,4));
console.log(isDivisible(48,3,4));


function isDivisible(n, x, y) {
 return n%x === 0 && n%y === 0;
}

// Solved

function past(h, m, s){
return h * 3600000  + m * 60000 + s * 1000;
}

console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(0,0,0));
console.log(past(1,0,1));
console.log(past(1,0,0));


// solved

function getCount(str) {
 var vowelsCount = 0;
 var theVowels = ['a', 'e', 'i', 'o', 'u'];


 var arrStr = str.split("");


arrStr.forEach(myFunction);
function myFunction(item) {

   if (theVowels.includes(item)) {
       vowelsCount = vowelsCount + 1;
   }
}

return vowelsCount;
}

// Solved

function warnTheSheep(queue) {
const reverseQueue = queue.reverse();

for(i = 0; i <= reverseQueue.length; i++) {
   if (reverseQueue[i] === "wolf" && i > 0) {
       return "Oi! Sheep number " + i +"! You are about to be eaten by a wolf!";
   } else if (reverseQueue[0] === "wolf") {
       return "Pls go away and stop eating my sheep";
   } 
};
};

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));


// Solved

function twiceAsOld(dadYearsOld, sonYearsOld) {
 return Math.abs(dadYearsOld - (sonYearsOld * 2));
}


console.log(twiceAsOld(36,7));
console.log(twiceAsOld(55,30));
console.log(twiceAsOld(42,21));
console.log(twiceAsOld(22,1));
console.log(twiceAsOld(29,0));


// Solved

function bmi(weight, height) {
 const theBmi = ( weight / (height*height));
return theBmi <= 18.5 ? "Underweight" : theBmi <= 25.0 ? "Normal" : theBmi <= 30.0 ? "Overweight" : "Obese";
}

console.log(bmi(55, 1.70));



/* Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/


// 21.03.21 - Solved - calculating discount for the car rental

function rentalCarCost(d) {
    if (d < 3 ) {
      return 40 * d; 
    } else if (d < 7 ) {
      return 40 * d - 20; 
    } else if (d >= 7 ) {
      return 40 * d - 50; 
    }
  }












































29.06.20


You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and
return it as a string. If the input is a sequence, concat the elements first as a string.


<script>
    function checkEven(input) {
        var newArray = [];
        var i;
        for (i = 1; i <= input.length; i++) {
            newArray.push(input[i]);
            if (input[i] % 2 === 0 || input[i] % 2 === 2) {
                newArray.push('*');
            }
        }
        return newArray;
    }

    console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
</script>





























// function toCamelCase(str) {
// var newStr = '';
// var i;
// for (i = 1; i <= str.lengh; i++) { // if ((str[i]=str['-'])) { // } // } // return newStr; // } //
    console.log('The-Stealth-Warrior'); </script> <!-- // function checkEven(input) { // var newArray=[]; // var i; //
    for (i=1; i <=input.length; i++) { // newArray.push(input[i]); // if (input[i] % 2===0 || input[i] % 2===2) { //
    newArray.push('*'); // } // } // return newArray; // } // console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8, 9])); -->

    <!-- // newStr.replace('str[i].uppercase'); -->















    <!-- // function toCamelCase() {
// var myStr = 'The-Stealth-Warrior';
// var newStr = myStr.replace(/-/g, '');
// document.getElementById('war').innerHTML = newStr;
// } -->



    // var someLetter = someText.innerText.split('');
    // var someWord = someText.innerText.split('-');

    function toCamelCase(someWord) {
    // var someText = document.querySelector('p');
    someWord.innerText.split('-');
    var upperWord = someWord.toUpperCase();
    return toCamelCase;
    }

    console.log(toCamelCase('The - Stealth - Warrior'));























    29.06.20 / Not completed /


    <!-- Complete the method/function so that it converts dash/underscore delimited
words into camel casing. The first word within the output should be
capitalized only if the original word was capitalized (known as Upper Camel
Case, also often referred to as Pascal case). -->

    <!-- <p id="war">The-Stealth-Warrior</p> -->


    <script>
        function toCamelCase(str) {
            // var myStr = 'quick_brown_fox';
            var newStr = str.replace(/-/g, '');
            return newStr;
        }

        console.log(toCamelCase('The-Stealth-Warrior'));


















        30.06 .20


        Implement a
        function that returns the minimal and the maximal value of a list.

        function getMinMax(arr) {
            return [Math.min(...arr), Math.max(...arr)]; // 
        }




































        2.07 .20

        In this kata you will create a
        function that takes a list of non -
            negative integers and strings and returns a new list with the strings filtered out.


        My solution:

            function filter_list(l) {
                if (checkNum === l.filter(Number));
                return checkNum;
            }



        right solution:

            function filter_list(l) {
                return l.filter(Number.isInteger);
            }

        console.log(filter_list([1, 'a', 'b', 0, 15]));

























    // Solved

        function warsMatch(input) {
            var text = '';
            var i;
            var score = 0;
            for (i = 0; i < input.length; i++) {
                var someText = input[i].split(':');
                var scoreX = Number(someText[0]);
                var scoreY = Number(someText[1]);
                if (scoreX > scoreY) score += 3;
                else if (scoreX == scoreY) score++;
                console.log(someText);
            }
            return score;
        }

        console.log(
            warsMatch([
                '1:0',
                '2:0',
                '3:0',
                '4:0',
                '2:1',
                '3:1',
                '4:1',
                '3:2',
                '4:2',
                '4:3',
            ])
        );


//Solved

            function abbrevName(name) {
                var input = name.split(" ");
                var firstName = input[0];
                var firstLetter = firstName.substring(0, 1);

                var lastName = input[1];
                var lastLetter = lastName.substring(0, 1);
                var initials = firstLetter + "." + lastLetter;
                return initials;
            }

        Test.assertEquals(abbrevName("Sam Harris"), "S.H");
        Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
        Test.assertEquals(abbrevName("Evan Cole"), "E.C");
        Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
        Test.assertEquals(abbrevName("David Mendieta"), "D.M");




        revised with.toUpperCase and CharAt:



          
            function abbrevName(name) {

                var input = name.split(" ");
                var firstName = input[0].charAt(0);
                var lastName = input[1].charAt(0);
                return (firstName + "." + lastName).toUpperCase();
            }

        console.log(abbrevName('tiger mighty'));





    // 11.07.20 – Solved


   /*</script>Your task is to make a function that can take any non-negative integer as a argument and return it with its digits
    in descending order. Essentially, rearrange the digits to create the highest possible number.
    Examples:
    Input: 42145 Output: 54421
    Input: 145263 Output: 654321
    Input: 123456789 Output: 987654321
*/



    function descendingOrder(n){
    var intString = n.toString();
    var splitString = intString.split('');

    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    var parseArray = parseInt(joinArray);
    if (n >= 0) {
    return parseArray;
    }
}



    var parseArray = parseInt(joinArray);
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');




    // 18.07.20 Solved, passed all tests



    Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero
    digits.


    function isDivisible(n, x, y) {
    if (n >= 0, n % x === 0 && n % y === 0) {
    return true;
    } else {
    return false;
    }
    }

    console.log(isDivisible(48, 3, 4)); //true

    // Test.assertSimilar(isDivisible(3, 3, 4), false);
    // Test.assertSimilar(isDivisible(12, 3, 4), true);
    // Test.assertSimilar(isDivisible(8, 3, 4), false);
    // Test.assertSimilar(isDivisible(48, 3, 4), true);



    ////Also true


    function isDivisible(n, x, y) {
    return (n >= 0, n % x === 0 && n % y === 0)
    }

   // 11.02.2021 - solved


   <script>

function findDifference(a, b) {
const aTotal = a.reduce(myFunction);
const bTotal = b.reduce(myFunction);

function myFunction(total, num) {
   return total * num;
}

return Math.abs(aTotal - bTotal);
};

console.log(findDifference([3, 2, 5], [1, 4, 4]));

// 14);

console.log(findDifference([9, 7, 2], [5, 2, 2]));
// , 106);

console.log(findDifference([11, 2, 5], [1, 10, 8]));

// , 30);

console.log(findDifference([4, 4, 7], [3, 9, 3]));

// , 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]));
// , 0);


20/02/21


// function setAlarm(employed, vacation){
// if (employed === true && vacation === false) {
// return true;
// } else {
// 	return false;
// }
// }

// function setAlarm(employed, vacation){
// return employed === true && vacation === false ? true : false;
// };


function setAlarm(employed, vacation){
return employed && !vacation;
};

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));

// 28.02.21 -solved!



function warnTheSheep(queue) {
const reverseQueue = queue.reverse();

for(i = 0; i <= reverseQueue.length; i++) {
   if (reverseQueue[i] === "wolf" && i > 0) {
       return "Oi! Sheep number " + i +"! You are about to be eaten by a wolf!";
   } else if (reverseQueue[0] === "wolf") {
       return "Pls go away and stop eating my sheep";
   } 
};
};





   </script>

  
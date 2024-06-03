/* 1. find the most frequently occurring number  */
const findHighestFreq = (arr) => {
  maxCount = 0;
  visited = [];
  for (let i = 0; i < arr.length; i++) {
    if (!visited.includes(arr[i])) {
      currCount = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          currCount += 1;
        }
      }
      maxCount = Math.max(maxCount, currCount);
    }
  }
  return maxCount;
};
/* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
const getDiffBetweenDigonal = (matrix) => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i == j) {
        firstDiagonal += matrix[i][j];
      }
      if (i + j == matrix.length - 1) {
        secondDiagonal += matrix[i][j];
      }
    }
  }
  return Math.abs(firstDiagonal - secondDiagonal);
};
// /* test */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

/* 3. Count the number of 3 as digit in all numbers from 0 to 50. */
const find3 = (start, end) => {
  let countOf3 = 0;
  for (let num = 0; num <= 50; num++) {
    [...num.toString()].forEach((char) => {
      if (char == '3') {
        countOf3 += 1;
      }
    });
  }
  return countOf3;
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {
  let words = str.split(' ');
  let capitalString = '';
  words.forEach((word) => {
    capitalString +=
      word[0].toUpperCase() + word.substring(1, word.length) + ' ';
  });
  return capitalString.substring(0, capitalString.length - 1);
};
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
const capEachCharInStr = (str) => {
  let capWords = [];
  for (let i = 0; i < str.length; i++) {
    capWords.push(
      str.substring(0, i) +
        str[i].toUpperCase() +
        str.substring(i + 1, str.length)
    );
  }
  return capWords;
};
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
const isValid = (str) => {
  let validBrackets = { ')': '(', '}': '{', ']': '[' };
  let curStack = [];
  [...str].forEach((char) => {
    if (
      curStack.length > 0 &&
      curStack[curStack.length - 1] == validBrackets[char]
    ) {
      curStack.pop();
    } else {
      curStack.push(char);
    }
  });

  if (curStack.length > 0) {
    return false;
  }
  return true;
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
const fibonacci = (num) => {
  // for loop
  let val1 = 0;
  let val2 = 1;
  for (let i = 0; i < num - 1; i++) {
    let temp = val2 + val1;
    val1 = val2;
    val2 = temp;
  }
  return val2;
};
// const fibonacci = (num) => {
//   // recursion
// }
/* test */
console.log('fibonacci: ', fibonacci(4));

/* 8. looking for most close 3 numbers to the target */
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {
  let closetNumberDic = {};
  givenArr.forEach((num, index) => {
    closetNumberDic[Math.abs(givenNum - num)] = index;
  });
  let sortedKeys = Object.keys(closetNumberDic).sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < find; i++) {
    ans.push(givenArr[closetNumberDic[sortedKeys[i]]]);
  }
  return ans;
}
console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
function createRandomStr(N, K) {
  const chars = [];
  const possibleChars = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < N; i++) {
    const randomIndex = Math.floor(Math.random() * K);
    chars.push(possibleChars[randomIndex]);
  }

  return chars.join('');
}
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca

/* 10. sort the array by the given sequence */
function sortBySeq(arr, sqs) {
  let sqsOrder = {};
  [...sqs].forEach((char, index) => {
    sqsOrder[char] = index;
  });
  arr.sort((char1, char2) => {
    return sqsOrder[char1] - sqsOrder[char2];
  });
  return arr;
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs)); // ["e", "o", "h", "l", "l"];

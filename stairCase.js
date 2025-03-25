/**
 * Staircase detail
This is a staircase of size :
   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size .
**/

let n = 4;

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER_NUMBER as parameter.
 */
function staircase(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {

    let row = '';
    // Append spaces
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    // append hashes
    for (let k = 1; k <= i; k++) {
      row += "#";
    }
    console.log(row)
    result.push(row);



  }
  // console.log(result)
  return result;
}

/*
function staircaseOLD(n) {
  let result = [];
  // run a loop
  for (let i = n; i > 0; i--) {
    // const subArray = array[i];
    let row = [];
    for (let j = n; j > 0; j--) {
      // const innerArr = subArray[j];
      // console.log(i, j)
      if (i == j) {
        row.push('#');
      } else {
        row.push('')
      }
    }

    result.push(row);
    console.log(result)


  }
  // run another loop
  // if(i <= i) {
  // push(#)
  // }
  return n;
}
*/

staircase(n);
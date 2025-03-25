let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  let len = arr.length;

  // find count of possitive numbers and divide by length
  // negative repeat
  // zero repeat

  // create a char map with count
  // {
  //     possitive: 2,
  //     negative: 2,
  //     zero: 2,
  // }
  let charMap = {
    possitive: 0,
    negative: 0,
    zero: 0,
  };
  let a = [];
  let setMap = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) == 1) {
      // its possitive
      // setMap.add();
      // charMap[possitive] ? charMap[possitive] += 1 : charMap[possitive] = 1;
      a[0] = (a[0] ? a[0] += 1 : 1)
    } else if (Math.sign(arr[i]) == -1) {
      // its negative
      a[1] = (a[1] ? a[1] += 1 : 1)
      // charMap[negative] ? charMap[negative] += 1 : charMap[negative] = 1;
    } else if (Math.sign(arr[i]) === 0) {
      // its zero
      a[2] = (a[2] ? a[2] += 1 : 1)
      // charMap[zero] ? charMap[zero] += 1 : charMap[zero] = 1;
    }
  }

  let mapped = a.map((value, index) => {
    return (value / len).toPrecision(6);
  })
  mapped.forEach(value => console.log(value))
  // console.log(mapped);


  // loop through the keys and divide them by 5 (map)


}
plusMinus(arr);
// export default plusMinus;
//   Problem solved
const rotateLeft = (arr, int) => {
  let index = arr.indexOf(int) + 1;
  let slice = arr.slice(index);
  let slice1 = arr.slice(0, index);
  let result = slice.concat(slice1);
  return result;
};
let final = rotateLeft([10, 25, 80, 10, 3, 9, 7, 5], 80);
console.log(final);

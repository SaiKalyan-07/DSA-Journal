//Find the second largest element in an array
function secondLargest(arr){
  if (arr.length < 2) {
    return null;
  }
  let largest = -Infinity;
  let second_largest = -Infinity;
  for (let i=0;i<arr.length;i++){
    if (arr[i]>largest){
      second_largest = largest;
      largest = arr[i];
    }
    else if (arr[i] < largest && arr[i] > second_largest){
      second_largest = arr[i];
    }
  }
  return second_largest;
}

let arr = [4,9,0,2,8,7,1];
let result = secondLargest(arr);
console.log(result);
function findsmallest(arr){
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  let smallest = Infinity;
  for (let i=0; i<arr.length; i++){
    if (arr[i]<smallest){
      smallest=arr[i];
    }
  }
  return smallest;
}

let arr = [5,0,7,10,8,17,1];

let result = findsmallest(arr);

console.log(result);
function twoSum(numbers, target) {
  const result = [];
  //   for(let num of numbers){
  //       for(let n of numbers){
  //           if(num + n === target) {
  //               result.push(numbers.indexOf(num))
  //           }
  //       }
  //   }
  numbers.forEach((num) =>
    numbers.forEach((n) =>
      num + n === target ? result.push(numbers.indexOf(num)) : null
    )
  );
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));

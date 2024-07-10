function twoSum(numbers, target) {
  const result = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
  //   numbers.forEach((num) =>
  //     numbers.forEach(
  //       (n) => num + n === target && result.push(numbers.indexOf(num))
  //     )
  //   );
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));

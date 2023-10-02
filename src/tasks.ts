const getItem = <T>(arr: T[]) : T => {
  return arr[arr.length-1]
}

const arr1 = [1, 2, 3]
const arr2 = ['1', '2', '3']
console.log(getItem(arr1))
console.log(getItem(arr2))
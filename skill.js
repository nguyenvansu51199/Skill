// Sắp xếp các phần tử từ nhỏ đến lớn có trong mảng(QUICKSORT)
function partition(numberList, left, right) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let i = left;
  let j = right;

  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  while (i <= j) {
    while (numberList[i] < pivot) i++;

    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  // your code here

  if (left >= right) return numberList;
  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}

console.log(quickSort([2, 3, 1], 0, 2));

// Sắp xếp các phần tử từ nhỏ đến lớn có trong mảng(BUBBLESORT)
for (let i = numberList.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (numberList[j] > numberList[j + 1]) {
      // v1
      // const temp = numberList[j];
      // numberList[j] = numberList[j + 1];
      // numberList[j + 1] = temp;

      // v2
      // [x, y] = [y , x]
      [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
    }
  }
}
return numberList;

// Đảo vị trí ngẫu nhiên các phần tử trong mảng arr
if (!Array.isArray(arr) || arr.length <= 2) return arr;
for (let i = arr.length - 1; i > 1; i--) {
  const j = Math.floor(Math.random() * i);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Random từ a đến b

export function randomNumber(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}

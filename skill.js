// Đảo vị trí các phần tử trong mảng arr
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

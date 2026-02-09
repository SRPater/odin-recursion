function fibs(n) {
  if (n < 1) return;

  const fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fibonacci.push(i);
    } else {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    }
  }

  return fibonacci;
}

function fibsRec(n) {
  if (n < 1) return;
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibonacci = fibsRec(n - 1);

  fibonacci.push(
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
  );

  return fibonacci;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));

function add(a: number, b: number) {
  return a + b;
}

function sum(...items: number[]) {
  items.reduce(add, 0);
}

sum(1, 2, 3);


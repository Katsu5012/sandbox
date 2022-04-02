const fib = (n, f0 = 0, f1 = 1) => {
  return n <= 1 ? f1 : fib(n - 1, f1, f0 + f1);
};

console.log(BigInt(fib(1000)));

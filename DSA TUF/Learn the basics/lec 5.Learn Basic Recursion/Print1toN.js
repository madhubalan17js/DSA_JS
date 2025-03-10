const Print1toN = (i, n) => {
  //   console.log(n);
  //   console.log(--n);

  if (i > n) return;
  console.log(i);
  Print1toN(i + 1, n);
};
Print1toN(1, 5);

const PrintNto1 = (n, i) => {
  //   console.log(n);
  //   console.log(--n);

  if (n < i) return;
  console.log(n);
  PrintNto1(n - 1, 1);
};
PrintNto1(5, 1);

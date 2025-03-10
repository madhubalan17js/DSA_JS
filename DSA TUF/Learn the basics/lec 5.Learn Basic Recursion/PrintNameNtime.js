const PrintNameNtime = (i, n) => {
  //   console.log(n);
  //   console.log(--n);

  if (i > n) return;
  console.log("Madhu");
  PrintNameNtime(i + 1, n);
};
PrintNameNtime(1, 5);

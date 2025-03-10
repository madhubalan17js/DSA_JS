// inverted Numbered Right Pyramid
function pattern06(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= N - i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
pattern06(5);

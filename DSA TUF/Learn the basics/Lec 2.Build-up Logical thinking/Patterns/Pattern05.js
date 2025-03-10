// Inverted Right Pyramid
function pattern05(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
pattern05(5);

// Right-Angled Number Pyramid - II
function pattern04(N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(i + " ");
    }
    console.log();
  }
}
pattern04(5);

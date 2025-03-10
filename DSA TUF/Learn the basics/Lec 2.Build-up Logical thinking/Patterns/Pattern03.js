// Right-Angled Number Pyramid

function pattern03(N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
pattern03(5);

// function pattern03(N) {
//     for (let i = 1; i <= N; i++) {
//       const line = Array.from({ length: i - 1 }, (_, j) => j + 1).join(" ");
//       console.log(line);
//     }
//   }

//   pattern03(5);

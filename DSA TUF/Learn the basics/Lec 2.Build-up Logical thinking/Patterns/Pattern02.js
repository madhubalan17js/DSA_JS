// Right-Angled Triangle Pattern

function pattern02(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

pattern02(5);

// time Complexity
// function pattern02(N) {
//     for (let i = 1; i <= N; i++) {
//       console.log("* ".repeat(i).trim()); // Construct each line with `i` stars and print
//     }
//   }

//   pattern02(5);

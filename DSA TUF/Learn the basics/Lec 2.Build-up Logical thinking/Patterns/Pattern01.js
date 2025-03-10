//Rectangular Star Pattern

// Approach:
// There are 4 general rules for solving a pattern-based question:
// 1) We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.
// 2) Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
// 3) We print the ‘*’ inside the inner loop.
// 4) Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
// In this particular problem, we run the outer loop for N times since we have N rows to be printed, the inner loop also runs for N times as we have to print N stars in each row. This way we get a rectangular star pattern (square) with an equal number of rows and columns.

function RectangularStar(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

RectangularStar(6);

// time Complexity
// function RectangularStar(N) {
//   // Generate a single line of N stars with a space in between
//   const line = "* ".repeat(N).trim();
//   // Print the generated line N times
//   for (let i = 0; i < N; i++) {
//     console.log(line);
//   }
// }

// RectangularStar(6);

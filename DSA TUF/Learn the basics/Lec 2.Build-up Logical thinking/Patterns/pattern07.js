// Star Pyramid
// Input Format: N = 6
// Result:
//  ssss*ssss
//  sss***sss
//  ss*****ss
//  s*******s
//  *********

//  to find pyramid space  inner 1 & 3 =n-i-1 , inner 2 =2*i-1
function pattern07(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < N - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
}
pattern07(5);

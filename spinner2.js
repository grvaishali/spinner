
const spinner = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|     '];
let i = 1;
for (let index of spinner) {
  setTimeout(() => {
    process.stdout.write(index);
  }, 100 * i);
  i = i + 2;
}
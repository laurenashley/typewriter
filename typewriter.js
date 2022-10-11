const sentence = "hello there from lighthouse labs";
let ms = 100; // adjust speed here

const waitForNms = (n) => {
  return new Promise(exec => setTimeout(exec, n));
};

const print = async(sentence) => {
  for (const char of sentence) {
    process.stdout.write(char);
    await waitForNms(ms);
  }
  process.stdout.write('\n');
};

print(sentence);
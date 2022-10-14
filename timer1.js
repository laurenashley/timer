const args = process.argv.slice(2);

const beep = (ms) => {
  const notAnumber = typeof ms !== 'number' || isNaN(ms);
  const isInvalid = notAnumber || ms < 0;
  console.log(isInvalid);
  if (isInvalid) return;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
};

for (const time of args) {
  beep(time);
  console.log(typeof time);
}

// beep(300);
// beep(500);
// beep(900);
// beep(1000);
// beep(1500);
// beep(-100);
// beep();
// beep('3000');
// beep('-300');
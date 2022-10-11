
const beep = (ms) => {
  const isInvalid = typeof ms !== 'number' || ms < 0;
  if (isInvalid) return;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
};

beep(300);
beep(500);
beep(900);
beep(1000);
beep(1500);
beep(-100);
beep();
beep('3000');
beep('-300');
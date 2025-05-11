const countDownTimer = function (durationInMinutes, display) {
  let totalSeconds = durationInMinutes * 60;

  const countDownElement = document.getElementById(display);

  const interval = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    countDownElement.textContent = `${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`;

    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(interval);
      countDownElement.textContent = 'Time is up!';
    }
  }, 1000);
};

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  console.log('Button clicked!');

  countDownTimer(25, 'timerDisplay');
});
const startPauseButton = document.getElementById('startPauseButton');
startPauseButton.addEventListener('click', () => {
  console.log('Button clicked!');

  countDownTimer(5, 'pauseDisplay');
});
const startLongPauseButton = document.getElementById('startLongPauseButton');
startLongPauseButton.addEventListener('click', () => {
  console.log('Button clicked!');

  countDownTimer(15, 'longPauseDisplay');
});
console.log('This appears in DevTools, NOT terminal');

const countDownTimer = function (duration) {
  let countDownTime = 60;

  const countDownElement = document.getElementById('timerDisplay');

  const interval = setInterval(function () {
    countDownTime--;

    countDownElement.textContent = countDownTime;

    if (countDownTime <= 0) {
      clearInterval(interval);
      countDownElement.textContent = 'Time is up!';
    }
  }, 1000);
};

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  console.log('Button clicked!');

  countDownTimer(25);
});

console.log('This appears in DevTools, NOT terminal');

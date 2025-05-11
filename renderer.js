let currentInterval = null;

document.querySelectorAll('.toggleHeader').forEach((header) => {
  header.addEventListener('click', () => {
    const targetId = header.getAttribute('data-target');

    document.querySelectorAll('.timerSection').forEach((section) => {
      section.classList.add('hidden');
    });

    document.getElementById(targetId).classList.remove('hidden');
  });
});

const countDownTimer = function (durationInMinutes, displayId, sectionId) {
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  document.querySelectorAll('.timerSection').forEach((section) => {
    section.classList.add('hidden');
  });

  const activeSection = document.getElementById(sectionId);
  activeSection.classList.remove('hidden');

  let totalSeconds = durationInMinutes * 60;

  const countDownElement = document.getElementById(displayId);

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
  console.log('startButton clicked!');

  countDownTimer(25, 'timerDisplay', 'pomodoroSection');
});

const startPauseButton = document.getElementById('startPauseButton');
startPauseButton.addEventListener('click', () => {
  console.log('startPauseButton clicked!');

  countDownTimer(5, 'pauseDisplay', 'pauseSection');
});

const startLongPauseButton = document.getElementById('startLongPauseButton');
startLongPauseButton.addEventListener('click', () => {
  console.log('startLongPauseButton clicked!');

  countDownTimer(15, 'longPauseDisplay', 'longPauseSection');
});

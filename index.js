const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        return;
      }

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const secs = remainingSeconds % 60;

      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      timerEl.textContent = formattedTime;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const inputValue = inputEl.value.replace(/\D/g, '');
  inputEl.value = inputValue;

  clearInterval(intervalId); // Clear the old timer if it exists
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
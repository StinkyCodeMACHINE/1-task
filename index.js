const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
const intervals = [];

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    intervals.forEach((intervalId) => clearInterval(intervalId));
    let timeLeft = seconds;
    let timerId = setInterval(() => {
      if (timeLeft === 0) {
        const index = array.indexOf(timerId);
        intervals.splice(index, 1); 
        clearInterval(timerId);
      }
      const hoursLeft = Math.floor(timeLeft / 3600);
      const minutesLeft = Math.floor((timeLeft % 3600) / 60);
      const secondsLeft = Math.floor((timeLeft % 3600) % 60);
      timerEl.innerText = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
      timeLeft -= 1;
    }, 1000);
    intervals.push(timerId);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});

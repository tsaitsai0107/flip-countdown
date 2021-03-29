const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentTime = new Date();
const threeDays = 3 * 24 * 60 * 60 * 1000;
const endTime = currentTime.getTime() + threeDays;

function updateCountdowntime() {
  const currentTime = new Date();
  const diff = endTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  const daysValue = d < 10 ? "0" + d : String(d);
  const hoursValue = h < 10 ? "0" + h : String(h);
  const minutesValue = m < 10 ? "0" + m : String(m);
  const secondValue = s < 10 ? "0" + s : String(s);
  updateCard(days, daysValue);
  updateCard(hours, hoursValue);
  updateCard(minutes, minutesValue);
  updateCard(seconds, secondValue);
}

function updateCard(el, value) {
  const originValue = el.getAttribute("data-value");
  el.innerHTML = renderCard(originValue, value);
  el.setAttribute("data-value", value);
  if (originValue === value) return;

  el.classList.add("flip");
  setTimeout(() => {
    el.innerHTML = renderCard(value, value);
    el.classList.remove("flip");
  }, 400);
}

function renderCard(front, back) {
  return `
    <div class="front">${front}</div>
    <div class="back">${back}</div>
  `;
}
setInterval(updateCountdowntime, 1000);

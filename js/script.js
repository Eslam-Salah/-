document.addEventListener("DOMContentLoaded", function () {
  const countButton = document.getElementById("count-button");
  const resetButton = document.getElementById("reset-button");
  const countDisplay = document.getElementById("count");
  const goalInput = document.getElementById("goal");

  let count = 0;
  let goal = 0;

  countButton.addEventListener("click", function () {
    if (goal != 0 && count >= goal) {
      alert("لقد أكملت العدد المطلوب من الأذكار!");
      return;
    }
    count++;
    countDisplay.textContent = count;
  });

  resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
  });

  goalInput.addEventListener("change", function () {
    goal = goalInput.value;
  });
});

let dhikrInput = document.getElementById("dhikr-input");
let dhikrDisplay = document.getElementById("dhikr-display");

dhikrInput.addEventListener("input", () => {
  dhikrDisplay.innerHTML = dhikrInput.value;
});

const inputTurns = document.getElementById("turns");
const inputBonus = document.getElementById("bonus");
const resultDiv = document.getElementById("resultDiv");
const result = document.querySelector(".result");

const inputValue = () => {
  const value = {
    turns: Number(inputTurns.value),
    bonus: Number(inputBonus.value),
  };

  return value;
};

const showResult = (num, total, array, bonus) => {
  const img = document.createElement("img");
  const p = document.createElement("p");
  const h3 = document.createElement("h3");

  img.src = `images/d${num.toString()}.png`;

  if (array.length === 1) {
    p.innerHTML = ``;
  } else if (bonus === 0) {
    p.innerHTML = `{${array}}`;
  } else {
    p.innerHTML = `{${array}} + ${bonus}`;
  }

  h3.innerHTML = total;

  result.appendChild(img);
  result.appendChild(p);
  result.appendChild(h3);

  resultDiv.classList.remove("hidden");

  setTimeout(() => {
    resultDiv.classList.add("hidden");
    result.removeChild(img);
    result.removeChild(p);
    result.removeChild(h3);
  }, 2500);

  return;
};

const rolld = (num) => {
  const data = inputValue();

  const arrayNumber = [];

  for (let i = 0; i < data.turns; i++) {
    const drawnNumber = Math.floor(Math.random() * num) + 1;
    arrayNumber.push(drawnNumber);
  }

  let total = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    total += arrayNumber[i];
  }

  total += data.bonus;

  showResult(num, total, arrayNumber, data.bonus);
  return;
};

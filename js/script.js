const inputTurns = document.getElementById("turns");
const inputBonus = document.getElementById("bonus");

const inputValue = () => {
  const value = {
    turns: inputTurns.value,
    bonus: inputBonus.value,
  };

  return value;
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
 
  

  return arrayNumber, total;
};

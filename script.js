document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  const numbersInput = document.getElementById("numbers");

  calculateButton.addEventListener("click", calculateAverage);
  numbersInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculateAverage();
    }
  });
});

function calculateAverage() {
  const numbersInput = document.getElementById("numbers");
  const numbers = numbersInput.value.split(",");
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = parseFloat(numbers[i].trim());
    if (isNaN(number)) continue;
    sum += number;
    count++;
  }

  const average = sum / count;
  document.getElementById("average").textContent = `<i class="fas fa-calculator"></i> The average is: ${average}`;

  function isValidInput(input) {
    return /^[\d\s,]*$/.test(input);
  }

  function calculateAverage() {
    const numbersInput = document.getElementById("numbers");
    const input = numbersInput.value.trim();

    if (!isValidInput(input)) {
      alert("Please enter valid numbers separated by commas.");
      return;
    }

    const numbers = input.split(",");
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
      const number = parseFloat(numbers[i].trim());
      if (isNaN(number)) continue;
      sum += number;
      count++;
    }

    if (count === 0) {
      alert("No valid numbers entered.");
      return;
    }

    const average = sum / count;
    document.getElementById("average").innerHTML = `<i class="fas fa-calculator"></i> The average is: ${average}`;
    numbersInput.value = ""; // Limpiar el campo de entrada después del cálculo
  }

}

function convert() {
  const category = document.getElementById("category").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultBox = document.getElementById("result");

  if (isNaN(inputValue)) {
    resultBox.textContent = "Vennligst skriv inn en gyldig verdi.";
    return;
  }

  if (category === "temperature") {
    resultBox.textContent = convertTemperature(inputValue, fromUnit, toUnit);
    return;
  }

  const fromFactor = units[category][fromUnit].factor;
  const toFactor = units[category][toUnit].factor;
  const fromLabel = units[category][fromUnit].label || fromUnit;
  const toLabel = units[category][toUnit].label || toUnit;

  const baseValue = inputValue * fromFactor;
  const convertedValue = baseValue / toFactor;

  resultBox.textContent = `${inputValue} ${fromLabel} = ${convertedValue.toFixed(4)} ${toLabel}`;
}

function convertTemperature(value, from, to) {
  let result;
  const labels = {
    c: "Celsius (°C)",
    f: "Fahrenheit (°F)",
    k: "Kelvin (K)"
  };

  if (from === to) {
    return `${value} ${labels[from]} = ${value} ${labels[to]}`;
  }

  if (from === "c") {
    result = to === "f" ? (value * 9 / 5 + 32) : (value + 273.15);
  } else if (from === "f") {
    result = to === "c" ? ((value - 32) * 5 / 9) : ((value - 32) * 5 / 9 + 273.15);
  } else if (from === "k") {
    result = to === "c" ? (value - 273.15) : ((value - 273.15) * 9 / 5 + 32);
  }

  return `${value} ${labels[from]} = ${result.toFixed(2)} ${labels[to]}`;
}

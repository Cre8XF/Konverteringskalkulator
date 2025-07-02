const units = {
  volume: {
    ml: 1,
    cl: 10,
    dl: 100,
    l: 1000,
    ts: 5,
    ss: 15,
    kopp: 250,
    tsp: 4.93,
    tbsp: 14.79,
    cup: 236.6,
    fl_oz: 29.57,
    pt: 473.18,
    qt: 946.35,
    gal: 3785.41,
    gal_uk: 4546.09,
    cm3: 1,
    dm3: 1000,
    m3: 1000000
  },
  weight: {
    mg: 0.001,
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
  },
  length: {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34
  },
  time: {
    s: 1,
    min: 60,
    h: 3600,
    d: 86400,
    wk: 604800
  },
  temperature: {} // håndteres manuelt
};

function populateUnits() {
  const category = document.getElementById('category').value;
  const fromSelect = document.getElementById('fromUnit');
  const toSelect = document.getElementById('toUnit');

  fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  if (category === 'temperature') {
    const tempUnits = ['c', 'f', 'k'];
    tempUnits.forEach(unit => {
      const label = unit.toUpperCase();
      fromSelect.add(new Option(label, unit));
      toSelect.add(new Option(label, unit));
    });
    return;
  }

  for (let unit in units[category]) {
    const option1 = new Option(unit.toUpperCase(), unit);
    const option2 = new Option(unit.toUpperCase(), unit);
    fromSelect.add(option1);
    toSelect.add(option2);
  }
}

function convert() {
  const category = document.getElementById('category').value;
  const value = parseFloat(document.getElementById('inputValue').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultBox = document.getElementById('result');

  if (isNaN(value)) {
    resultBox.innerText = '🛑 Ugyldig tallverdi.';
    return;
  }

  let result;

  if (category === 'temperature') {
    result = convertTemperature(value, from, to);
  } else {
    const valueInBase = value * units[category][from];
    result = valueInBase / units[category][to];
  }

  resultBox.innerText = `${value} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`;
}

function convertTemperature(value, from, to) {
  if (from === to) return value;

  if (from === 'c') {
    if (to === 'f') return value * 9 / 5 + 32;
    if (to === 'k') return value + 273.15;
  } else if (from === 'f') {
    if (to === 'c') return (value - 32) * 5 / 9;
    if (to === 'k') return (value - 32) * 5 / 9 + 273.15;
  } else if (from === 'k') {
    if (to === 'c') return value - 273.15;
    if (to === 'f') return (value - 273.15) * 9 / 5 + 32;
  }

  return 'Ugyldig konvertering';
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  document.querySelector(".theme-toggle").textContent = newTheme === "dark" ? "🌞" : "🌙";
}

// Når siden lastes:
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  document.querySelector(".theme-toggle").textContent = savedTheme === "dark" ? "🌞" : "🌙";

  populateUnits(); // viktig at denne fortsatt kalles
  document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
});



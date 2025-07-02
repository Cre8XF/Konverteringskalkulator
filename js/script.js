const units = {
  volume: {
    ml: { name: "Milliliter", factor: 1 },
    cl: { name: "Centiliter", factor: 10 },
    dl: { name: "Deciliter", factor: 100 },
    l: { name: "Liter", factor: 1000 },
    ts: { name: "Teskje", factor: 5 },
    ss: { name: "Spiseskje", factor: 15 },
    kopp: { name: "Kopp (norsk)", factor: 250 },
    tsp: { name: "Teskje (US)", factor: 4.93 },
    tbsp: { name: "Spiseskje (US)", factor: 14.79 },
    cup: { name: "Kopp (US)", factor: 236.6 },
    fl_oz: { name: "Fluid ounce (US)", factor: 29.57 },
    pt: { name: "Pint (US)", factor: 473.18 },
    qt: { name: "Quart (US)", factor: 946.35 },
    gal: { name: "Gallon (US)", factor: 3785.41 },
    gal_uk: { name: "Gallon (UK)", factor: 4546.09 },
    cm3: { name: "Kubikkcentimeter (cm³)", factor: 1 },
    dm3: { name: "Kubikkdesimeter (dm³)", factor: 1000 },
    m3: { name: "Kubikkmeter (m³)", factor: 1000000 }
  },
  weight: {
    mg: { name: "Milligram", factor: 0.001 },
    g: { name: "Gram", factor: 1 },
    kg: { name: "Kilogram", factor: 1000 },
    oz: { name: "Ounce (oz)", factor: 28.3495 },
    lb: { name: "Pund (lb)", factor: 453.592 }
  },
  length: {
    mm: { name: "Millimeter", factor: 0.001 },
    cm: { name: "Centimeter", factor: 0.01 },
    m: { name: "Meter", factor: 1 },
    km: { name: "Kilometer", factor: 1000 },
    inch: { name: "Tommer (inch)", factor: 0.0254 },
    ft: { name: "Fot (ft)", factor: 0.3048 },
    yd: { name: "Yard (yd)", factor: 0.9144 },
    mi: { name: "Mile (mi)", factor: 1609.34 }
  },
  time: {
    s: { name: "Sekund", factor: 1 },
    min: { name: "Minutt", factor: 60 },
    h: { name: "Time", factor: 3600 },
    d: { name: "Dag", factor: 86400 },
    wk: { name: "Uke", factor: 604800 }
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

  const categoryUnits = units[category];

  for (let unit in categoryUnits) {
    const name = categoryUnits[unit].name || unit.toUpperCase();
    const label = `${unit.toUpperCase()} – ${name}`;
    fromSelect.add(new Option(label, unit));
    toSelect.add(new Option(label, unit));
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
    const fromFactor = units[category][from].factor;
    const toFactor = units[category][to].factor;
    const valueInBase = value * fromFactor;
    result = valueInBase / toFactor;
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

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  document.querySelector(".theme-toggle").textContent = savedTheme === "dark" ? "🌞" : "🌙";

  populateUnits();
  document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
});

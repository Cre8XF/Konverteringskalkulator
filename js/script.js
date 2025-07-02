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
  time: {
    s: 1,
    min: 60,
    h: 3600,
    d: 86400,
    wk: 604800
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
  temperature: {} // Spesialhåndteres
};

function populateUnits() {
  const category = document.getElementById("category").value;
  const fromSelect = document.getElementById("fromUnit");
  const toSelect = document.getElementById("toUnit");

  
  if (category === "temperature") {
    const tempUnits = ["c", "f", "k"];
    tempUnits.forEach(unit => {
      const label = unit.toUpperCase();
      fromSelect.add(new Option(label, unit));
      toSelect.add(new Option(label, unit));
    });
    return;
  }
fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  for (let unit in units[category]) {
    const label = unit + ' (' + unit + ')';
    const option1 = new Option(label, unit);
    const option2 = new Option(label, unit);
    fromSelect.add(option1);
    toSelect.add(option2);
  }
}

function convert() {
  const category = document.getElementById("category").value;
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "Ugyldig verdi";
    return;
  }

  
  if (category === "temperature") {
    let result;
    if (from === to) {
      result = value;
    } else if (from === "c" && to === "f") {
      result = value * 9/5 + 32;
    } else if (from === "f" && to === "c") {
      result = (value - 32) * 5/9;
    } else if (from === "c" && to === "k") {
      result = value + 273.15;
    } else if (from === "k" && to === "c") {
      result = value - 273.15;
    } else if (from === "f" && to === "k") {
      result = (value - 32) * 5/9 + 273.15;
    } else if (from === "k" && to === "f") {
      result = (value - 273.15) * 9/5 + 32;
    } else {
      result = "Ugyldig konvertering";
    }
    document.getElementById("result").innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    return;
  }
const valueInBase = value * units[category][from];
  const converted = valueInBase / units[category][to];
  document.getElementById("result").innerText = `${value} ${from} = ${converted.toFixed(2)} ${to}`;
}

function toggleTheme() {
  const body = document.body;
  const newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  document.querySelector(".theme-toggle").textContent = newTheme === "dark" ? "🌞" : "🌙";
}

populateUnits();

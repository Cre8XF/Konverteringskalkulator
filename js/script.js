document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById("category");
  Object.keys(units).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categorySelect.appendChild(opt);
  });

  populateUnits();
});

function populateUnits() {
  const category = document.getElementById('category').value;
  const fromSelect = document.getElementById('fromUnit');
  const toSelect = document.getElementById('toUnit');
  fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  if (category === 'temperature') {
    const tempUnits = {
      c: 'Celsius (°C)',
      f: 'Fahrenheit (°F)',
      k: 'Kelvin (K)'
    };
    Object.entries(tempUnits).forEach(([unit, label]) => {
      fromSelect.add(new Option(label, unit));
      toSelect.add(new Option(label, unit));
    });
    return;
  }

  Object.keys(units[category]).forEach(unit => {
    const label = units[category][unit].label || unit.toUpperCase();
    fromSelect.add(new Option(label, unit));
    toSelect.add(new Option(label, unit));
  });
}

function toggleTheme() {
  const body = document.body;
  const newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  document.querySelector(".theme-toggle").textContent = newTheme === "dark" ? "🌞" : "🌙";
}

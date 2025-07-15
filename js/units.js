const units = {
  volume: {
    ml: { label: "ML – Milliliter", factor: 1 },
    cl: { label: "CL – Centiliter", factor: 10 },
    dl: { label: "DL – Desiliter", factor: 100 },
    l: { label: "L – Liter", factor: 1000 },
    ts: { label: "TS – Teskje (5 ml)", factor: 5 },
    ss: { label: "SS – Spiseskje (15 ml)", factor: 15 },
    kopp: { label: "Kopp – Norsk kopp (250 ml)", factor: 250 },
    tsp: { label: "TSP – Teaspoon (4.93 ml)", factor: 4.93 },
    tbsp: { label: "TBSP – Tablespoon (14.79 ml)", factor: 14.79 },
    cup: { label: "CUP – Cup (236.6 ml)", factor: 236.6 },
    fl_oz: { label: "FL OZ – Fluid Ounce (29.57 ml)", factor: 29.57 },
    pt: { label: "PT – Pint (473.18 ml)", factor: 473.18 },
    qt: { label: "QT – Quart (946.35 ml)", factor: 946.35 },
    gal: { label: "GAL – Gallon US (3785.41 ml)", factor: 3785.41 },
    gal_uk: { label: "GAL UK – Gallon UK (4546.09 ml)", factor: 4546.09 },
    cm3: { label: "CM³ – Kubikkcentimeter", factor: 1 },
    dm3: { label: "DM³ – Kubikkdesimeter (liter)", factor: 1000 },
    m3: { label: "M³ – Kubikkmeter", factor: 1000000 },
    in3: { label: "IN³ – Cubic Inch", factor: 16.3871 },
    ft3: { label: "FT³ – Cubic Foot", factor: 28316.8 }
  },
  weight: {
    mg: { label: "MG – Milligram", factor: 0.001 },
    g: { label: "G – Gram", factor: 1 },
    hg: { label: "HG – Hektogram", factor: 100 },
    dag: { label: "DAG – Dekagram", factor: 10 },
    kg: { label: "KG – Kilogram", factor: 1000 },
    oz: { label: "OZ – Ounce (28.35 g)", factor: 28.3495 },
    lb: { label: "LB – Pound (453.59 g)", factor: 453.592 },
    stone: { label: "STONE – Stone (6.35 kg)", factor: 6350.29 },
    tonn: { label: "TONN – Tonn (1000 kg)", factor: 1000000 }
  },
  length: {
    mm: { label: "MM – Millimeter", factor: 0.001 },
    cm: { label: "CM – Centimeter", factor: 0.01 },
    dm: { label: "DM – Desimeter", factor: 0.1 },
    m: { label: "M – Meter", factor: 1 },
    km: { label: "KM – Kilometer", factor: 1000 },
    inch: { label: "INCH – Tomme (2.54 cm)", factor: 0.0254 },
    ft: { label: "FT – Fot (30.48 cm)", factor: 0.3048 },
    yd: { label: "YD – Yard (91.44 cm)", factor: 0.9144 },
    mi: { label: "MI – Mile (1.609 km)", factor: 1609.34 },
    nmi: { label: "NMI – Nautisk mil (1852 m)", factor: 1852 }
  },
  time: {
    ms: { label: "MS – Millisekund", factor: 0.001 },
    s: { label: "S – Sekund", factor: 1 },
    min: { label: "MIN – Minutt", factor: 60 },
    h: { label: "H – Time", factor: 3600 },
    d: { label: "D – Dag", factor: 86400 },
    wk: { label: "WK – Uke", factor: 604800 },
    mo: { label: "MO – Måned (gjennomsnitt)", factor: 2629800 },
    yr: { label: "YR – År (365.25 dager)", factor: 31557600 }
  },
  area: {
    mm2: { label: "MM² – Kvadratmillimeter", factor: 0.000001 },
    cm2: { label: "CM² – Kvadratcentimeter", factor: 0.0001 },
    dm2: { label: "DM² – Kvadratdesimeter", factor: 0.01 },
    m2: { label: "M² – Kvadratmeter", factor: 1 },
    a: { label: "A – Areal (100 m²)", factor: 100 },
    ha: { label: "HA – Hektar (10 000 m²)", factor: 10000 },
    km2: { label: "KM² – Kvadratkilometer", factor: 1000000 },
    in2: { label: "IN² – Square Inch", factor: 0.00064516 },
    ft2: { label: "FT² – Square Foot", factor: 0.092903 },
    yd2: { label: "YD² – Square Yard", factor: 0.836127 },
    acre: { label: "ACRE – Acre (4046.86 m²)", factor: 4046.86 }
  },
  speed: {
    'm/s': { label: "M/S – Meter per sekund", factor: 1 },
    'km/h': { label: "KM/H – Kilometer i timen", factor: 0.277778 },
    'mph': { label: "MPH – Miles per hour", factor: 0.44704 },
    'knots': { label: "KN – Knop", factor: 0.514444 },
    'ft/s': { label: "FT/S – Foot per second", factor: 0.3048 }
  },
  pressure: {
    pa: { label: "PA – Pascal", factor: 1 },
    kpa: { label: "KPA – Kilopascal", factor: 1000 },
    mpa: { label: "MPA – Megapascal", factor: 1000000 },
    bar: { label: "BAR – Bar", factor: 100000 },
    mbar: { label: "MBAR – Millibar", factor: 100 },
    psi: { label: "PSI – Pounds per square inch", factor: 6894.76 },
    atm: { label: "ATM – Atmosfæretrykk", factor: 101325 },
    torr: { label: "TORR – Torr", factor: 133.322 }
  },
  energy: {
    j: { label: "J – Joule", factor: 1 },
    kj: { label: "KJ – Kilojoule", factor: 1000 },
    mj: { label: "MJ – Megajoule", factor: 1000000 },
    cal: { label: "CAL – Kalori", factor: 4.184 },
    kcal: { label: "KCAL – Kilokalori", factor: 4184 },
    wh: { label: "WH – Wattime", factor: 3600 },
    kwh: { label: "KWH – Kilowattime", factor: 3600000 },
    ev: { label: "EV – Elektronvolt", factor: 1.602e-19 }
  },
  data: {
    bit: { label: "BIT – Bit", factor: 1 },
    byte: { label: "BYTE – Byte", factor: 8 },
    kb: { label: "KB – Kilobit", factor: 8192 },
    kib: { label: "KIB – Kibibit", factor: 8192 },
    mb: { label: "MB – Megabit", factor: 8388608 },
    mib: { label: "MIB – Mebibit", factor: 8388608 },
    gb: { label: "GB – Gigabit", factor: 8589934592 },
    gib: { label: "GIB – Gibibit", factor: 8589934592 },
    tb: { label: "TB – Terabit", factor: 8796093022208 },
    tib: { label: "TIB – Tebibit", factor: 8796093022208 }
  },
  fuel: {
    'l/100km': { label: "L/100KM – Liter per 100 km", factor: 1 },
    'km/l': { label: "KM/L – Kilometer per liter", factor: 100 },
    'mpg': { label: "MPG – Miles per gallon (US)", factor: 235.215 },
    'mpg_uk': { label: "MPG UK – Miles per gallon (UK)", factor: 282.481 }
  },
  temperature: {} // handled manually
};

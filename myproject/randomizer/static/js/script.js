document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
  document.getElementById("selectFirst").innerHTML = `<form>
  <input type="checkbox" id="sys70" value="70" onclick="getVal(value)">
  <label for="sys70">7+0</label>
  </form>`;
});

const Järjestelmä = `<form>
  <input type="checkbox" id="sys70" value="70" onclick="getVal(value)">
  <label for="sys70">7+0</label>
  </form>`;

const Harava1 = `<form>
  <input type="checkbox" id="rake1-70" value"70" onclick="getVal(value)">
  <label for="rake1-70">7+0</label>
  </form>`;

const Harava2 = `<form>
  <input type="checkbox" id="rake2-70" value="70" onclick="getVal(value)">
  <label for="rake2-70">7+0</label>
  </form>`;

let ov = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
};
let tv = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
};

let chosenOv = 0;
let chosenTv = 0;

var rows = [
  { group: "A", A1: 0, A2: 0, A3: 0 },
  { group: "B", B1: 0, B2: 0, B3: 0 },
  { group: "C", C1: 0, C2: 0, C3: 0 },
  { group: "D", D1: 0, D2: 0, D3: 0 },
  { group: "E", E1: 0, E2: 0, E3: 0 },
  { group: "F", E1: 0, E2: 0, E3: 0 },
  { group: "G", G1: 0, G2: 0, G3: 0 },
  { group: "H", H1: 0, H2: 0, H3: 0 },
  { group: "I", I1: 0, I2: 0, I3: 0 },
  { group: "J", J1: 0, J2: 0, J3: 0 },
  { group: "K", K1: 0, K2: 0, K3: 0 },
  { group: "L", L1: 0, L2: 0, L3: 0 },
  { group: "M", M1: 0, M2: 0, M3: 0 },
];

function checkBox(id, name) {
  document.getElementById(id).checked = true;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].group == name) {
      rows[i][id] = 1;
    }
  }
}

function unCheckBox(id, name) {
  document.getElementById(id).checked = false;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].group == name) {
      rows[i][id] = 0;
    }
  }
}

function countSelected(values) {
  var count = 0;
  for (var i = 0; i < values.length; ++i) {
    if (values[i] == 1) {
      count++;
    }
  }
  return count;
}

function select(name) {
  let values = "";
  let result = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].group == name) {
      values = Object.values(rows[i]);
      result = countSelected(values);
    } else if (result == 2) {
      ov[name] = 1;
      tv[name] = 0;
    } else if (result == 3) {
      ov[name] = 0;
      tv[name] = 1;
    } else {
      ov[name] = 0;
      tv[name] = 0;
    }
  }
}

function ifChecked(id, name) {
  if (document.getElementById(id).checked == true) {
    checkBox(id, name);
    select(name);
    valuesOv = countSelected(Object.values(ov));
    valuesTv = countSelected(Object.values(tv));
    console.log(
      "Osittain vaihdellut " + valuesOv + " Täysin vaihdellut " + valuesTv,
    );
  }
  if (document.getElementById(id).checked == false) {
    unCheckBox(id, name);
    select(name);
    valuesOv = countSelected(Object.values(ov));
    valuesTv = countSelected(Object.values(tv));
    console.log(
      "Osittain vaihdellut " + valuesOv + " Täysin vaihdellut " + valuesTv,
    );
  }
}

function myFunction() {
  x = document.getElementById("gameMode").value;
  if (x == "Harava1") {
    document.getElementById("selectFirst").innerHTML = Harava1;
  }
  if (x == "Harava2") {
    document.getElementById("selectFirst").innerHTML = Harava2;
  }
  if (x == "Järjestelmä") {
    document.getElementById("selectFirst").innerHTML = Järjestelmä;
  }
}

function getVal(value) {
  let string = value;
  chosenOv = string.charAt(0);
  chosenTv = string.charAt(1);
  console.log("Järjestelmä " + chosenOv + " + " + chosenTv);
}

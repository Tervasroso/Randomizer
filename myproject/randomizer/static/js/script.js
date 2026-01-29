document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
  document.getElementById("selectFirst").innerHTML = `<form>
    <input type="checkbox" id="selfirst">
    <label for="selfirst">7+0</label>
    </form>`;
});

Järjestelmä = `<form>
    <input type="checkbox" id="selfirst">
    <label for="selfirst">7+0</label>
    </form>`;

Harava1 = `<form>
  <input type="checkbox" id="selfirst">
  <label for="selfirst">7+1</label>
  </form>`;

Harava2 = `<form>
  <input type="checkbox" id="selfirst">
  <label for="selfirst">7+2</label>
  </form>`;

ov = 0;
tv = 0;

var rows = [
  { group: "A", 1: 0, 2: 0, 3: 0 },
  { group: "B", 1: 0, 2: 0, 3: 0 },
  { group: "C", 1: 0, 2: 0, 3: 0 },
  { group: "D", 1: 0, 2: 0, 3: 0 },
  { group: "E", 1: 0, 2: 0, 3: 0 },
  { group: "F", 1: 0, 2: 0, 3: 0 },
  { group: "G", 1: 0, 2: 0, 3: 0 },
  { group: "H", 1: 0, 2: 0, 3: 0 },
  { group: "I", 1: 0, 2: 0, 3: 0 },
  { group: "J", 1: 0, 2: 0, 3: 0 },
  { group: "K", 1: 0, 2: 0, 3: 0 },
  { group: "L", 1: 0, 2: 0, 3: 0 },
  { group: "M", 1: 0, 2: 0, 3: 0 },
];

function checkedCount() {
  for (let i = 0; i < rows.length, i++; ) {
    console.log(i);
  }
}

function checkBox(id, name, rows) {
  rows = rows;
  document.getElementById(id).checked = true;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].group == name) {
      rows[i][id] = 1;
    }
  }
  return rows;
}

function unCheckBox(id, name, rows) {
  rows = rows;
  document.getElementById(id).checked = false;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].group == name) {
      rows[i][id] = 0;
    }
  }
}

function ifChecked(id, name) {
  if (document.getElementById(id).checked == true) {
    checkBox(id, name, rows);
    console.log(rows);
  }
  if (document.getElementById(id).checked == false) {
    unCheckBox(id, name, rows);
    console.log(rows);
  }
}

function renderSystem() {
  console.log("Pöö");
  document.getElementById(id).innerHTML = `<form>
  <input type="checkbox" id="selfirst">
  <label for="selfirst">7+0</label>
  </form>`;
}

function renderRakeOne() {
  console.log("Pöö");
  // document.getElementById("selectFirst").innerHTML = `<form>
  // <input type="checkbox" id="rakeOne">
  // <label for="selfirst">7+1</label>
  // </form>`;
  document.getElementById("selectFirst").innerHTML = "Tässäpä muutos";
}
function myFunction() {
  x = document.getElementById("gameMode").value;
  console.log(x);
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

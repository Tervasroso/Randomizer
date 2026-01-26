document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
});

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

// function ifChecked(id, name) {
//   if ((document.getElementById(id).checked = true)) {
//     for (let i = 0; i < rows.length - 1; i++) {
//       if (rows[i].group == name) {
//         rows[i][id].count = 1;
//       } else if (rows[i].group == name) {
//         document.getElementById(id).checked = false;
//         rows[i][id].count = 0;
//       }
//     }
//   }
// }

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

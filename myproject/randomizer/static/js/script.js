document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
});

ov = 0;
tv = 0;

var rows = [
  { group: "A", count: 0 },
  { group: "B", count: 0 },
  { group: "C", count: 0 },
  { group: "D", count: 0 },
  { group: "E", count: 0 },
  { group: "F", count: 0 },
  { group: "G", count: 0 },
  { group: "H", count: 0 },
  { group: "I", count: 0 },
  { group: "J", count: 0 },
  { group: "K", count: 0 },
  { group: "L", count: 0 },
  { group: "M", count: 0 },
];

function ifChecked(id, name) {
  console.log(name);
  if (document.getElementById(id).checked) {
    for (let i = 0; i < rows.length - 1; i++) {
      if (rows[i].group == name) {
        rows[i].count++;
      }
    }
    console.log(rows);
  }
}

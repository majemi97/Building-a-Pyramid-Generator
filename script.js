const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//do a different kind of loop
/*for (let i = 1; i <= count; i = i ++) {
  rows.push(padRow(i, count))
}*/

if () {
  console.log("Condition is true");
}

let result = ""

for (const row of rows) {
  result = result + row;
  result = result + "\n" + row;
}

console.log(result);

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

let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + row;
  result = result + "\n" + row;
}

console.log(result);

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {

}


for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
  character.repeat(i + 1);
}

let result = ""

for (const row of rows) {
  result = result + row;
  result = result + "\n" + row;
}

console.log(result);

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  const test = "Testing";
  return test;
}

const call = padRow("Mitch");
console.log(call);
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

console.log ("Hello World");
var colors =["red", "blue", "yellow"]
console.log(colors)
for(var i=0; i<colors.length; i++){
  console.log(colors[i]);
}
function calculateSum() {
  let sum = 0;
  for (let i = 1; i<=100; i++) {
    sum += i;
  }
  return sum;
}
const result = calculateSum();
console.log(result);


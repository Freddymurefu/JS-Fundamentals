const input = process.argv[2];
const num = Number(input);

if (Number.isInteger(num)){
let count = 0;
while (count < num) {
    console.log("C is fun");
    count++;
}
} else {
    console.log("Missing number of occurrences");
}
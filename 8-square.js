const input = process.argv[2];
const num = Number(input);

if (Number.isInteger(num)){
let count = 0;
while (count < num) {
    console.log("x".repeat(num));
    count++;
}
} else {
    console.log("Missing size");
}
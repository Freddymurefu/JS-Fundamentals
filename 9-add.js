const inputA = process.argv[2];
const inputB = process.argv[3];

const numA = Number(inputA);
const numB = Number(inputB);

function sum(a, b) {
    return a + b;
}

if (Number.isInteger(numA) && (Number.isInteger(numB))){
    console.log(sum(numA, numB));
}
 else {
    console.log("NaN");
}
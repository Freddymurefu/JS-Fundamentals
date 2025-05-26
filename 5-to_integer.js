const myVal = process.argv.slice(2);
const firstInput = Number(myVal[0]);
if (!isNaN(firstInput)) {
    console.log("My number: " + Math.floor(firstInput));
}
else {
    console.log("Not a number");
}


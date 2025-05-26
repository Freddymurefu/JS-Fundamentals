const myVal = process.argv.slice(2);

if (myVal.length === 0) {
    console.log("No argument");
} else if (myVal.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

const myVal = process.argv.slice(2);
if (myVal.length === 2) {
    console.log(myVal[0] + " is " + myVal[1]);
}
else {
    console.log("Please provide at least two arguments");
}
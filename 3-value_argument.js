const myVal = process.argv.slice(2);
if (myVal[0] === undefined) {
    console.log("No argument");
}
else {
    console.log(myVal[0]);
}
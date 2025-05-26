const myVal = process.argv.slice(2);
if (myVal.length === 2) {
    console.log(myVal[0] + " is " + myVal[1]);
}
else if(myVal.length === 1) {
    console.log(myVal[0] + " is " + " undefined ");
}
else{
    console.log("undefined is undefined")
}
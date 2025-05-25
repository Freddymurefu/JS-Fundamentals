const args = process.argv.slice(2)

if (args.length === 0) {
    console.log("0 argument");
}

else if (args.length === 1) {
    console.log("1 Argument");
}

else {
    console.log("3 Arguments")
}
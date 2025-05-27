const input = process.argv[2];
const num = Number(input);
function factorial(n) {
    if (n === 0 || n === 1){
        
return 1;
}

return n * factorial(n-1);
}
if (Number.isInteger(num)){
    console.log(factorial(num));
}
else {
    console.log(1);
}
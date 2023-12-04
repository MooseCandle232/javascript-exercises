const fibonacci = function(member) {
    let startNum = 0;
    let startNum2 = 1;
    let fibonacciSum = 0;;

    if (member < 0) return "OOPS"

    for (let i = 0; i < member; i++) {
        fibonacciSum = startNum + startNum2;
        startNum2 = startNum;
        startNum = fibonacciSum;
    }

    return fibonacciSum;
};

// Do not edit below this line
module.exports = fibonacci;

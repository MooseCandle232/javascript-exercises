const repeatString = function(stringToRepeat, timesToRepeat) {
    let concatString = "";

    if (timesToRepeat < 0) {
        return "ERROR"
    }

    for (let i = 0; i < timesToRepeat; i++) {
        concatString += stringToRepeat;
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;

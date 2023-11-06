const reverseString = function(words) {
    const reverseArray = [];

    for (let i = 0; i < words.length; i++) {
        reverseArray.unshift(words[i]);
    }
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

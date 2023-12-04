const palindromes = function (words) {
    // let reverseWords = words.split("").reverse().join("")
    // return reverseWords === words;
    const reverseArray = [];
    let justLetters = [];

    for (let i = 0; i < words.length; i++) {
        justLetters = words.toLowerCase().match(/[A-Za-z0-9]/g);
        reverseArray.unshift(justLetters[i]);
    }
    let wordForward = justLetters.join("");
    let wordReversed = reverseArray.join("");

    return wordReversed === wordForward;
};

// Do not edit below this line
module.exports = palindromes;

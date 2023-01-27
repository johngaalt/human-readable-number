module.exports = function toReadable(num) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num === 0) {
        return "zero";
    } else if (num < 20) {
        return ones[num];
    } else if (num < 100) {
        return (
            tens[Math.floor(num / 10)] +
            (num % 10 !== 0 ? " " + ones[num % 10] : "")
        );
    } else {
        return (
            ones[Math.floor(num / 100)] +
            " hundred" +
            (num % 100 !== 0 ? " " + toReadable(num % 100) : "")
        );
    }
};

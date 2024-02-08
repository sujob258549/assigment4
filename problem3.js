function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return `“Invalid Array”`;
    }

    let outOfNumber = [];

    for (let number of array) {
        if (typeof number === "number" && !isNaN(number) && !Array.isArray(number) && typeof number !== 'object' && typeof number !== "undefined") {
            outOfNumber.push(number);
        }
       
    }

    return outOfNumber;
}

const input = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
console.log(input);
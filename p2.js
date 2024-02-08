function checkName(name) {
    if (typeof name !== "string") {
        return 'Invalid';
    }

    let names = name.toLowerCase();
    let len = names.length - 1;

    if (names.charAt(len) === "a" || names.charAt(len) === "y" || names.charAt(len) === "i" || names.charAt(len) === "e" || names.charAt(len) === "o" || names.charAt(len) === "u" || names.charAt(len) === "w") {
        return `good names`
    }

    else {
        return `Bad names`
    }

}





let input = checkName("I");
console.log(input)
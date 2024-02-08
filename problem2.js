function checkName(name) {

    if(typeof name !== "string"){
       return 'Invalid';
    }
    let names = name.toLowerCase();


    if (names.endsWith('a') || names.endsWith('y') || names.endsWith('i') || names.endsWith('e') || names.endsWith('o') || names.endsWith('u') || names.endsWith('w')) {
        return `“Good Name”`;
    
}

    else{
        return `Bad Name`
    }
 }


 let input = checkName("sujonO");
console.log(input);
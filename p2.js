function checkName(name) {
    if (typeof name !== "string") {
        return 'Invalid';
    }
    
    let names = name.toLowerCase();
    let len = names.length-1;
   
    // a, y, i , e , o , u, w
    if( name.charAt(len) === "a" || name.charAt(len) === "y" || name.charAt(len) === "i" || name.charAt(len) === "e" || name.charAt(len) === "o" || name.charAt(len) === "u" || name.charAt(len) === "w"){
        return `good names`
    }
        
        else{
            return `bad names`
        }
    
}
let input = checkName("sujor");
console.log(input)
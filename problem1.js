

function calculateMoney(ticketSale) {
    if(typeof ticketSale !== "number"){
       return `Please input the Number`;
    }
    else if(ticketSale < 0){
        return `Error`;
    }

     let number = ( ticketSale * 120) - ( 500 + (8 * 50));
     return number;

}

const input = calculateMoney(93);
console.log(input);
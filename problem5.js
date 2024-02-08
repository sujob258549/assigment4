
function monthlySavings(arr, livingCost) {
    let totalEarn = 0;

    if (!Array.isArray(arr) || !livingCost) {
        return `invalid input`;

    }
    
    else if (typeof livingCost !== "number") {
        return `Invalid Number`;
    }


    for (let number of arr) {
        if (number >= 3000){
            let vat = number * 20 / 100;
            totalEarn += number - vat;

        }

      else{
        totalEarn += number;
      }

    }
    const saving = totalEarn - livingCost;

    if (saving <= 0) {
        return `earn more`;
    }

    else {
        return `Your One month Earn ${saving}`;
    }

}

const input = monthlySavings([ 1000 , 2000 , 6000 ] , 5000);
console.log(input);

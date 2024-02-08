
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

const input = monthlySavings([3000 , 3000 ], 4800);
console.log(input);

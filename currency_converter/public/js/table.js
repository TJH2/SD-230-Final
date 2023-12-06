
    // conversion from 1/23 to 12/23
    let conversion_rates = {
        "AUD": [1.4780, 1.4182, 1.4857, 1.4888, 1.5099, 1.5202, 1.5106, 1.5111, 1.5412, 1.5535, 1.5773, 1.5136],
        "CAD": [1.3552, 1.3306, 1.3645, 1.3522, 1.3552, 1.3443, 1.3250, 1.3269, 1.3510, 1.3574, 1.3877, 1.3556],
        "CLP": [856.0000, 795.6600, 826.9600, 788.8200, 806.1200, 801.0000, 802.8500, 841.1300, 851.7500, 890.6500, 895.5300, 870.2000],
        "CNY" : [6.9631, 6.7536, 6.9323, 6.8704, 6.9110, 7.0930, 7.2518, 7.1765, 7.2569, 7.1636, 7.3155, 7.0754],
        "EUR" : [0.9380, 0.9207, 0.9454, 0.9170, 0.9116, 0.9293, 0.9201, 0.9084, 0.9222, 0.9465, 0.9453, 0.9181],
        "GBP" : [0.8294, 0.8124,  0.8310,  0.8073,  0.8009,  0.7983,  0.7927,  0.7815,  0.7891,  0.8201,  0.8229,  0.7917],
        "INR" : [82.8351, 81.7684, 82.6354, 82.1005, 81.7747, 82.2767, 82.0754, 82.3073, 82.6824, 83.0348, 83.2772, 83.3527],
        "JPY" : [132.9160, 130.1100, 136.3480, 133.2010, 137.5210, 138.7480, 144.7800, 142.9700, 145.4730, 149.5400, 151.2940, 147.9990],
        "RUB" : [73.9650, 70.5500, 75.0150, 77.2400, 80.6650, 80.9650, 86.8250, 92.3750, 95.8400, 97.9650, 93.2900, 89.9400],
        "USD" : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        "ZAR": [17.0451, 17.4114, 18.3135, 17.7399, 18.3556, 19.6109, 18.7495, 18.2402, 18.8311, 18.8792, 18.6178, 18.8386]
    }

    // function that converts initial currency amount to amount in new currency
    function converter(currency1, currency2, month) {
        month = month - 1;
        let amount = 1;
        let newAmount = 0.00; // variable to convert to USD and then convert to new currency
    
        // convert to USD
        newAmount = amount / conversion_rates[currency1][month];
        // convert from USD to new currency
        newAmount = newAmount * conversion_rates[currency2][month];

        // limits the amount of decimal places to 5 for easy viewing
        if(newAmount.toString().length - Math.round(newAmount).toString().length > 5) {
            newAmount = newAmount.toFixed(5);
        }

        return newAmount;
    }


    // function to reverse the currencies selected
    function flip_vals() {
        let from = document.getElementById("from");
        let to = document.getElementById("to");
        let fromV = from.value;
        let toV = to.value;

        from.value = toV;
        to.value = fromV;

        create_table(document.getElementById('from').value, document.getElementById('to').value);
        return;
    }

    //function to show change in rate over time
    function change(number1, number2) {
        let change = number1 / number2;

        if(change >= 1) {
            change -= 1;
        } else {
            change = 1 - change;
            change = change * - 1;
        }

        return change.toFixed(3) + "%";
    }

    function create_table(currency1, currency2) {

        if(currency1 == currency2) {
            alert("Please Choose Two Different Currencies To Compare.");

            return;
        }

        let table = document.getElementById("timeTable");
        table.innerHTML = 
        "<table>" + 
        "<tr><th>Date</th><th>" + currency1 +"</th><th>" + currency2 + "</th><th>% Change</th></tr>" + 
        "<tr><td>DEC 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 12) + "</td><td>" + change(converter(currency1, currency2, 12), converter(currency1, currency2, 11)) + "</td></tr>" +
        "<tr><td>NOV 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 11) + "</td><td>" + change(converter(currency1, currency2, 11), converter(currency1, currency2, 10)) + "</td></tr>" +
        "<tr><td>OCT 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 10) + "</td><td>" + change(converter(currency1, currency2, 10), converter(currency1, currency2, 9)) + "</td></tr>" +
        "<tr><td>SEP 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 9) + "</td><td>" + change(converter(currency1, currency2, 9), converter(currency1, currency2, 8)) + "</td></tr>" +
        "<tr><td>AUG 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 8) + "</td><td>" + change(converter(currency1, currency2, 8), converter(currency1, currency2, 7)) + "</td></tr>" +
        "<tr><td>JUL 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 7) + "</td><td>" + change(converter(currency1, currency2, 7), converter(currency1, currency2, 6)) + "</td></tr>" +
        "<tr><td>JUN 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 6) + "</td><td>" + change(converter(currency1, currency2, 6), converter(currency1, currency2, 5)) + "</td></tr>" +
        "<tr><td>MAY 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 5) + "</td><td>" + change(converter(currency1, currency2, 5), converter(currency1, currency2, 4)) + "</td></tr>" +
        "<tr><td>APR 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 4) + "</td><td>" + change(converter(currency1, currency2, 4), converter(currency1, currency2, 3)) + "</td></tr>" +
        "<tr><td>MAR 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 3) + "</td><td>" + change(converter(currency1, currency2, 3), converter(currency1, currency2, 2)) + "</td></tr>" +
        "<tr><td>FEB 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 2) + "</td><td>" + change(converter(currency1, currency2, 2), converter(currency1, currency2, 1)) + "</td></tr>" +
        "<tr><td>JAN 2023</td><td>1.00</td><td>" + converter(currency1, currency2, 1) + "</td><td></td></tr>" +
        "</table>";

        table.style.display = "block";

        return;
    }

// event listen to generate table when a new currency is selected
document.getElementById("from").addEventListener("change", function() {
    create_table(document.getElementById('from').value, document.getElementById('to').value);
    return;
});

// event listen to generate table when a new currency is selected
document.getElementById("to").addEventListener("change", function() {
    create_table(document.getElementById('from').value, document.getElementById('to').value);
    return;
});


// event to hande switching currencies
document.getElementById("switch").addEventListener("click", function() {
    flip_vals();
    return;
});

// sets starting values
document.getElementById("from").value = "USD";
document.getElementById("to").value = "USD";

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
        let change = ((number1 - number2) / number2) * 100;

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
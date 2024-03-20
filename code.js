async function logTotal() {
    let total = 0;

    try {
        const response = await fetch("https://fauxdata.codelayer.io/api/orders");
        const data = await response.json();
        for (let order in data.orders) {
            for (let item in data.orders[order].items) {
                total += Number(data.orders[order].items[item].price);
            }
        }
        console.log("The total price is: £" + total)
    }
    catch (error) {
        console.log("You've had an error! The error is:");
        console.log(error);
    }
}

logTotal();

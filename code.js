async function logAverage() {
    try {
        let total = 0;
        const response = await fetch("https://fauxdata.codelayer.io/api/orders");
        const data = await response.json();
        
        for (order in data.orders) {
            for (item in data.orders[order].items) {
                total += Number(data.orders[order].items[item].price);
            }
        }

        let average = (total / data.orders.length).toFixed(2);
        console.log("The average order value is: £" + average);
    }

    catch (error) {
        console.log("You've had an error! The error is:");
        console.log(error);
    }
}

logAverage();
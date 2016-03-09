var gpio = require("pi-gpio");

console.log("It's robot time!");

gpio.open(14, "output", function(error) {
    if (error) {
        console.log("Error: ", error);
        return;
    }

    gpio.write(14, 1, function () {
        gpio.close(14);
    });
});
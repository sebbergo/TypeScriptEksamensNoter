const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {
  numbers = [];

  addNumber = (number) => {
    this.numbers.push(number);

    if (number % 2 === 0) {
      this.emit("even", { number });
    } else {
      this.emit("odd", { number });
    }
    if (number >= 100) {
      this.emit("high", { number });
    } else {
      this.emit("low", { number }, 0);
    }
  };
}

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();
let counter2 = new Counter();

alert(counter.up()); // ?
alert(counter.up()); // ?
alert(counter.down()); // ?
alert(counter2.up()); // ?
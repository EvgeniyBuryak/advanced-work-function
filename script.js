function makeCounter() {

    let count = 0;

    function counter() {
        return ++count;
    };

    //counter.set = value => count = value;
    counter.set = function func(value) {
        if (value == 0) value = "" + value;

        if (value) {
            count = value;
        } else {
            func(0);
        }
        return count;
    }

    //counter.decrease = () => count--; 
    counter.decrease = function () {
        return --count;
    }

    return counter;
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter.set());
alert(counter());
alert(counter.set(8));
alert(counter.decrease());
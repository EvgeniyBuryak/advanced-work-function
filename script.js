function debounce(func, ms) {
    let start;

    return function () {
        if (!start) {
            start = Date.now();
            setTimeout(() => func.apply(this, arguments), ms);
        }

        if (start + ms < Date.now()) {
            start = Date.now();
            setTimeout(() => func.apply(this, arguments), ms);
        }        
    };
}

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);
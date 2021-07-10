function f(a) {
    console.log(a);
}

function throttle(func, ms) {
    let isThrottled = false;
    let lastArg;
    let lastThis;

    function wrapper() {
        if (isThrottled) {
            lastArg = arguments;
            lastThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (lastArg) {
                wrapper.apply(lastThis, lastArg);
                lastArg = lastThis = null;
            }
        }, ms);
    }

    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
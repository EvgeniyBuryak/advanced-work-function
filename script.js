// do it worker.slow caching
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        // here super hard task for processor
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // (**)
        cache.set(x, result);
        return result;
    };
}

alert(worker.slow(1)); // original method

worker.slow = cachingDecorator(worker.slow); // caching it

alert(worker.slow(2)); 
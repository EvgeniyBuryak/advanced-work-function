let obj = {
    f(x, y) {
        alert(`${ x } ${ y }`);
    },
};


function delay(func, ms) {

    return function wrapper() {
        setTimeout(() => func.apply(this, arguments), ms);
        //setTimeout(func, ms, ...arguments); // так тоже работает
    }
}

// создаём обёртку 
let f1000 = delay(obj.f, 1000);
let f2500 = delay(obj.f, 2500);
obj.f = delay(obj.f, 5000);

f1000("Hello", "Igor");
f2500("Hello", "Jhon");
obj.f("my","test");
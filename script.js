function work(a, b) {
    alert(a + b);
}

/**
 * Создайте декоратор spy(func), который должен
 * возвращать обёртку, которая сохраняет все вызовы
 * функции в своём свойстве calls.
 *
 * Каждый вызов должен сохраняться как массив аргументов.
 * */
function spy(func) {

    function wrapper(...args) {

        wrapper.calls.push(args);

        func.apply(this, args);
    };

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2);
work(3, 4);

for (let args of work.calls) {
    alert('call:' + args.join());
}
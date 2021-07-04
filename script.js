// Рекурсивный способ, который не подвисает на числе 77, если больше не проверял
let results = [0, 1];
function fib(n) {
    if (n == 0) return results[0];

    if (n == 1) return results[1];

    if (!results[n]) {
        results[n] = fib(n - 2) + fib(n - 1);
    }
    return results[n];
}

function fibCircle(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
alert(fibCircle(77));
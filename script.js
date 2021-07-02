function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialTernarni(n) {
    return (n != 1) ? n * factorialTernarni(n - 1) : 1;
}

alert(factorial(5));
alert(factorialTernarni(5));
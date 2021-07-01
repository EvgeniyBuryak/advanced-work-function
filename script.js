function pow(x, n) {
    if (n == 0) {
        return 1;
    } else {
        return pow(x, n - 1) * x;
    }
}

alert( pow(2, 4) );

function sumTo(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += num - i;
    }
    return sum;
}

console.log(sumTo(1));  // = 1
console.log(sumTo(2));  // = 2 + 1 = 3
console.log(sumTo(3));  // = 3 + 2 + 1 = 6
console.log(sumTo(4));  // = 4 + 3 + 2 + 1 = 10
console.log(sumTo(100));// = 100 + 99 + ... + 2 + 1 = 5050
function sumToRecursion(num) {
    if (num < 1) {
        return 0;
    } else {
        return num += sumToRecursion(num - 1);
    }
}

function sumTo(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += num - i;
    }
    return sum;
}

/*
console.log(sumTo(1));  // = 1
console.log(sumTo(2));  // = 2 + 1 = 3
console.log(sumTo(3));  // = 3 + 2 + 1 = 6
console.log(sumTo(4));  // = 4 + 3 + 2 + 1 = 10
console.log(sumTo(100));// = 100 + 99 + ... + 2 + 1 = 5050
*/

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 1000; i++) //old value 100000
        f(10000); // тестируем на old value 100
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// добавляем для "разогрева" перед основным циклом
bench(sumTo);
bench(sumToRecursion);

// а теперь тестируем производительность
// bench поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(sumTo);
    time2 += bench(sumToRecursion);
}

alert('Итоговое время цикл: ' + time1);
alert('Итоговое время рекурсия: ' + time2);
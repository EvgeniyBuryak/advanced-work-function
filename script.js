// формулы арифметической прогрессии
function sumTo(n) {
    return n * (n + 1) / 2;
}

function sumToCircle(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += num - i;
    }
    return sum;
}

function sumToRecursion(num) {
    if (num < 1) {
        return 0;
    } else {
        return num += sumToRecursion(num - 1);
    }
}

/*
console.log(sumTo(1));  // = 1
console.log(sumTo(2));  // = 2 + 1 = 3
console.log(sumTo(3));  // = 3 + 2 + 1 = 6
console.log(sumTo(4));  // = 4 + 3 + 2 + 1 = 10
console.log(sumTo(100));// = 100 + 99 + ... + 2 + 1 = 5050
*/

function bench(f) {
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(1000); // тестируем на old value 100
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
let time3 = 0;

// добавляем для "разогрева" перед основным циклом
bench(sumTo);
bench(sumToCircle);
bench(sumToRecursion);

// а теперь тестируем производительность
// bench поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(sumTo);
    time2 += bench(sumToCircle);
    time3 += bench(sumToRecursion);
}

alert('Итоговое время арифметической прогрессии: ' + time1);
alert('Итоговое время цикл: ' + time2);
alert('Итоговое время рекурсия: ' + time3);
let sum = function (a) {

    function f(b) {
        f.currentSum += b; 
        return f;
    };

    f.currentSum = a;

    f.toString = () => {
        return f.currentSum;
    };

    return f;
}

alert(sum(1)(2)); // == 3; // 1 + 2
console.log(sum(1)(2)(3)); // == 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2)); // == 6  
console.log(sum(6)(-1)(-2)(-3)); // == 0
console.log(sum(0)(1)(2)(3)(4)(5)); // == 15
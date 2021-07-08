// outputs every second
/*function printNumbers(from, to) {

    let timerId = setInterval(() => {
        (from <= to) ? alert("Число " + from++) : clearInterval(timerId)
    }, 1000);
}*/

// The First call is instant    
function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);

function printNumbersTimeout(from, to) {

    let timerId = setTimeout(function func() {

        if (from <= to) {
            alert("Число " + from++)
            timerId = setTimeout(func(), 1000);
        } else { clearInterval(timerId); }
    }, 1000);
}

printNumbersTimeout(1, 5);
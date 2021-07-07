function makeArmy() {
    let shooters = [];

    //let i = 0;
    for (let i = 0; i < 10; i++) {
        //let num = i; // my version of the solution with while   
        let shooter = function () {
            alert(i); 
        };
        shooters.push(shooter);
        //i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); 
army[5](); 
// outputs 10, but should 0, 1, 2, 3...
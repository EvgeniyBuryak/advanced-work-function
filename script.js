function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Arnold Washington

    // Rest arguments into in array
    // titles = ["Consul", "Imperator"]
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
}

showName("Arnold", "Washington", "Consul", "Imperator");

let arr = [3, 5, 7, 1];
let arr2 = [6, 9, -2, 1];

let merged = [12, ...arr, 13, ...arr2];

alert(Math.max(...merged));
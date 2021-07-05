function printList(list) {    

    if (list == null) return null;

    let result = "";

    for (let [key, value] of Object.entries(list)) {
        
        if (key != "value") {
            return result + printList(value);
        } else {
            result = value + " ";
        }
    }
}

function printListCircle(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }    
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

alert(printList(list));
alert(printListCircle(list));
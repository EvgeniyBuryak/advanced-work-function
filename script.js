function printList(list) {    

    alert(list.value);

    if (list.next) {
        printList(list.next);
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
function printList(list) {    

    if (list.next) {
        printList(list.next);
    }

    alert(list.value);
}

function printListCircle(list) {
    let tmp = list;
    let arr = [];

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
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
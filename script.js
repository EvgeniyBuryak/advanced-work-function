let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));

users.sort(byField('age'));

// ??? ???????
function byField(str) {

    if (str == 'name') {
        // ?? ????? (Ann, John, Pete)
        return (a, b) => a.name > b.name ? 1 : -1;
    }
    if (str == 'age') {
        // ?? ???????? (Pete, Ann, John)
        return (a, b) => a.age > b.age ? 1 : -1;
    }
}

/* ?? ??? ???????
 * function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}*/

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John
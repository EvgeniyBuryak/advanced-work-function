function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((previous, current) => previous + current.salary, 0);
    } else {
        let sum = 0;
        for (let value of Object.values(department)) {
            sum += sumSalaries(value);
        }
        return sum;
    }
}

let company = {
    sales: [{
        name: 'Peter',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Jhon',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

alert( sumSalaries(company) );
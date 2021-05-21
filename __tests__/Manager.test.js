const Manager = require('../lib/Manager');

// // to fail test:
//const testManager = new Manager("l", "lj@gmail.com", 4, "manager", 123-456-7890);



//to pass test:
const testManager = new Manager("Luke", "shilohjonezz@gmail.com", 4, 123-456-8790);

test('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})

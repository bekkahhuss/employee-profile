const Employee = require("../lib/Employee");

test('create an employee profile', () => {
    const employee = new Employee('a', 'b', 'c', 'd', 'e');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.title).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNum).toEqual(expect.any(String));
})
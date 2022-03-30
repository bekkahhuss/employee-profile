const Manager = require("../lib/Manager");

test('create an manager profile', () => {
    const manager = new Manager('a', 'b', 'c', 'd', 'e');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.title).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(String));
})
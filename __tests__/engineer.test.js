const Engineer = require("../lib/Engineer");

test('create an engineer profile', () => {
    const engineer = new Engineer('a', 'b', 'c', 'd', 'e');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.title).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.officeNum).toEqual(expect.any(String));
})
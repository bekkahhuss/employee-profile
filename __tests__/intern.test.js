const Intern = require("../lib/Intern");

test('create an intern profile', () => {
    const intern = new Intern('a', 'b', 'c', 'd', 'e');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.title).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.officeNum).toEqual(expect.any(String));
})
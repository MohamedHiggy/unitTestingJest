const getData = require("../getData");

//toHaveLength() get length of array or string
test("get length", () => {
    expect(getData).toHaveLength(6);
});

//toContain() check if number in array
test("check array have number 2", () => {
    expect(getData).toContain(2);
});

//not.toContain() check if number in array
test("check array don't have number 20", () => {
    expect(getData).not.toContain(20);
});

//not.toContain() check if number in array
test("check array don't have 0", () => {
    for (let index = 0; index < getData.length; index++) {
        expect(getData[index]).not.toBe(10);
    }
});
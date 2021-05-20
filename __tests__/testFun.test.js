const testFun = require("../testFun");


test("return num", () => {
    expect(testFun()).toBe(0);
});

test("return num", () => {
    expect(testFun(5 + 5 + 5 + 5)).toBe(20);
});
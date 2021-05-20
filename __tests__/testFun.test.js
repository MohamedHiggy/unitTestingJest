const testFun = require("../testFun");

test("return 0", () => {
    expect(testFun()).toBe(0);
});

test("return num", () => {
    expect(testFun(3)).toBe(3);
});

test("return two num", () => {
    expect(testFun(5, 3)).toBe(8);
});
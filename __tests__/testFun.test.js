const testFun = require("../testFun");

describe("check the test", () => {

    describe("check 0", () => {
        test("return num", () => {
            expect(testFun()).toBe(0);
        });
    })

    test("return num", () => {
        expect(testFun(5 + 5 + 5 + 5)).toBe(20);
    });
});
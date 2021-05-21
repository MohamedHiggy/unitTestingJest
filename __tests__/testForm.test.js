const testForm = require("../form");

describe("check the input name", () => {

    test("name is empty", () => {
        expect(testForm()).toBe("unknown");
    });

    /**
     * use only to test this case and ignore all test cases
     */
    test.only("name is empty", () => {
        expect(testForm(" mohamed ")).toBe("mohamed");
    });

    /**
     * use skip to ignore this case
     */
    test.skip("return name", () => {
        expect(testForm("mohamed")).toBe("mohed");
    });

});
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

//not.toBe() check if number in array
test("check array don't have 0", () => {
    for (let index = 0; index < getData.length; index++) {
        expect(getData[index]).not.toBe(10);
    }
});

//toBeFalsy() check if all index in array is number
test("check array don't have 0", () => {
    for (let index = 0; index < getData.length; index++) {
        expect(isNaN(getData[index])).toBeFalsy();
    }
});

//toBeGreaterThanOrEqual() check if first number in array GreaterThanOrEqual
test("check first elemnt reaterThanOrEqual 1", () => {
    expect(getData[0]).toBeGreaterThanOrEqual(1);
});

//toBeLessThanOrEqual() check if first number in array LessThanOrEqual
test("check first elemnt LessThanOrEqual 101", () => {
    expect(getData[0]).toBeLessThanOrEqual(10);
});




//create first own matcher 
expect.extend({
    checkForNumber(received, target) {
        const pass = received == target
        if (pass) {
            return {
                message: () => `Expected ${received} equal ${target}`,
                pass: true
            }
        } else {

            return {
                message: () => `Expected ${received} not equal ${target}`,
                pass: false
            }
        }
    }
});

//checkForNumber() check if first number equal target
test("check if first number equal target", () => {
    expect(6).checkForNumber(6);
});


//create second own matcher 
expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end
        if (pass) {
            return {
                message: () => `Expected ${received} more than ${start} and less ${end}`,
                pass: true
            }
        } else {

            return {
                message: () => `Expected ${received} not more than ${start} and less ${end}`,
                pass: false
            }
        }
    }
});

//toBeBetween() check if number more than start and less than end 
test("check if number more than start and less than end ", () => {
    expect(6).toBeBetween(4, 8);
});
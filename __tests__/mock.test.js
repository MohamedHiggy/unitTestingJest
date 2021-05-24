const mock = require("../mock");

test("get name", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker("ahmed")).toBe("Hello ahmed");
    expect(mocker("mohamed")).toBe("Hello mohamed");

    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(2);
    expect(mocker).toHaveBeenCalledWith("ahmed");
    expect(mocker).toHaveBeenLastCalledWith("mohamed");
});
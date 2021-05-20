function testFun(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

module.exports = testFun;
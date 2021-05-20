function testFun(num1, num2) {
    return (num1 || 0) + (num2 || null)
}
module.exports = testFun;
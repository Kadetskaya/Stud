const logicFunc = require('../logic');

describe("add", function() {
    it("enter 5+4", function () {
        assert.equal(logicFunc.add(5, 4), 9);
    });
    it("enter 7856+67", function () {
        assert.equal(logicFunc.add(7856, 67), 7923);
    });
    it("enter 56.254+4", function () {
        assert.equal(logicFunc.add(56.254, 4), 60.254);
    });
    it("enter 0.236+0.64", function () {
        assert.equal(logicFunc.add(0.236, 0.64), 0.876);
    });
    it("enter 58+0", function () {
        assert.equal(logicFunc.add(58, 0), 58);
    });
});

describe("subtract", function() {
    it("enter 9-3", function () {
        assert.equal(logicFunc.subtract(9, 3), 6);
    });
    it("enter 7856-67", function () {
        assert.equal(logicFunc.subtract(7856, 67), 7789);
    });
    it("enter 56.254-4", function () {
        assert.equal(logicFunc.subtract(56.254, 4), 52.254);
    });
    it("enter 0.236-0.64", function () {
        assert.equal(logicFunc.subtract(0.236, 0.64), -0.404);
    });
    it("enter 58-0", function () {
        assert.equal(logicFunc.subtract(58, 0), 58);
    });
});

describe("multiply", function() {
    it("enter 2*2", function () {
        assert.equal(logicFunc.multiply(2, 2), 4);
    });
    it("enter 58*58", function () {
        assert.equal(logicFunc.multiply(58, 58), 3364);
    });
    it("enter 0.4*2", function () {
        assert.equal(logicFunc.multiply(0.4, 2), 0.8);
    });
    it("enter 0.2*0.3", function () {
        assert.equal(logicFunc.multiply(0.2, 0.3), 0.06);
    });
    it("enter 63*0", function () {
        assert.equal(logicFunc.multiply(63, 0), 0);
    });
});

describe("divide", function() {
    it("enter 56/2", function () {
        assert.equal(logicFunc.divide(56, 2), 28);
    });
    it("enter 6/3", function () {
        assert.equal(logicFunc.divide(6, 3), 2);
    });
    it("enter 0.4/2", function () {
        assert.equal(logicFunc.divide(0.4, 2), 0.2);
    });
    it("enter 999/3", function () {
        assert.equal(logicFunc.divide(999, 3), 333);
    });
    it("enter 63/0", function () {
        assert.equal(logicFunc.divide(63, 0), "Error");
    });
});
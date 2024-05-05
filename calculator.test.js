const calculator = require("./calculator");

test("add two numbers", () => {
  expect(calculator.add(588, 2324)).toBe(2912);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(588, 2324)).toBe(-1736);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(588, 2324)).toBe(1366512);
});

test("divide two numbers", () => {
  expect(calculator.divide(48, 6)).toBe(8);
});

const caesarCipher = require("./caesarCipher");

test("caesar cipher", () => {
  expect(caesarCipher("hello", 15)).toBe("wtaad");
});

test("caesar cipher", () => {
  expect(caesarCipher("hello world", -15)).toBe("spwwz hzcwo");
});

test("caesar cipher", () => {
  expect(caesarCipher("HeLlO", -15)).toBe("SpWwZ");
});

test("caesar cipher", () => {
  expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
});

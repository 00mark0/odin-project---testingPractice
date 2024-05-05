const capitalize = require("./capitalize");

test("capitalize the first letter of a string", () => {
  expect(capitalize("hi! My Name is Slim Shady")).toBe(
    "Hi! My Name is Slim Shady"
  );
});

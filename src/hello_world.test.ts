import { hello } from "./hello_world";

describe("teste hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});

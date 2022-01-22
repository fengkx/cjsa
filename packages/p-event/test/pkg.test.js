const pEvent = require("..");
describe("p-event cjs", () => {
  test("should be defined", () => {
    expect(pEvent).toBeDefined();
    expect(pEvent.pEvent).toBeInstanceOf(Function);
    expect(pEvent.TimeoutError).toBeInstanceOf(Function);
    expect(pEvent.pEventIterator).toBeInstanceOf(Function);
    expect(pEvent.pEventMultiple).toBeInstanceOf(Function);
  });
});

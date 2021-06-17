import { addition } from './firstFunction';
describe("Test Addition", ()=> {
  it("Testing addition fn", () => {
    expect(addition(10,20)).toBe(30)
  })


})

xdescribe("Test String Matcher", ()=> {
  it("Testing string, 'toBe', for matcher ===", () => {
    let firstStr = 'Hello World';
    expect(firstStr).toBe('Hello World')
  });

  // deep compare -> even for arrays, literal, objects
  it("Testing string, 'toEqual', for matcher ==", () => {
    let firstStr = 'Hello World';
    expect(firstStr).toEqual('Hello World')
  });

  it("Testing string, 'not.toEqual', for matcher ==", () => {
    let firstStr = 'Hello World';
    expect(firstStr).not.toEqual('Hello World! Hi')
  });

  it("Testing string, 'toContain', Checks hello present in string or not", () => {
    let firstStr = 'Hello World! Welcome to Kritika Bandekar';
    expect(firstStr).toContain('Kritika')
  });

  it("Testing string, 'toMatch', matcher for regular exprsn", () => {
    var message = 'The 4th lane of Underworld';
    // regex to check if str exprsn contains numbers
    expect(message).toMatch(/\d+/);
    expect(message).toMatch("Underworld");
  });
})

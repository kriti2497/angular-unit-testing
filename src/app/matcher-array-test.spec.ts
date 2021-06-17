xdescribe('Array test', ()=> {
  it('Testing array using toequal -> arrays shud be equal', ()=>{
    let a = [1,2,3];
    expect(a).toEqual([1,2,3])
  })

  it('Testing array using toContain -> arrays shud Contain particular val', ()=>{
    let strArr = ['abc', 'pqr', 'mno'];
    expect(strArr).toContain('pqr')
  })
})

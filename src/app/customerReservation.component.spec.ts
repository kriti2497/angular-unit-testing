import { customerReservation } from "./customerReservation.component"

describe('Customer reservation', ()=>{
  let custService: customerReservation;

  // beforeEach(()=>{
  //   custService = new customerReservation();
  // })

  // afterEach(()=>{
  //   custService = null;
  // })

  // // executed once bfor all unit test cases
  // beforeAll(()=>{

  // })

  // // executed once after all unit test cases
  // afterAll(()=>{

  // })

  // xit("shud register customer, inc count by 1", ()=>{

  //     let custCount = custService.registerCustomer();

  //     expect(custCount).toEqual(11);
  // })

  // xit("shud un-register customer, dec count by 1", ()=>{

  //     let custCount = custService.unRegisterCustomer();

  //     expect(custCount).toEqual(9);
  // })



  // AAA
  it('Testing room is reserved or not', () => {
    //Arrange
    let custReserve = new customerReservation();
    // Act
    let isReserved = custReserve.reserveRoom();
    //Assert
    expect(isReserved).toBeTruthy()
  })
})

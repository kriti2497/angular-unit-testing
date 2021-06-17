export class customerReservation{
  hotelRoomCapacity = 30;
  customerCount = 10;

  //increase cust count by 1
  registerCustomer(){
    return ++this.customerCount
  }

  // decrese cust count by 1
  unRegisterCustomer(){
    return --this.customerCount
  }

  reserveRoom(): boolean {
    let roomReserved = false;
    if(this.customerCount<this.hotelRoomCapacity){
      this.customerCount++;
      roomReserved = true
    }

    return roomReserved;
  }
}

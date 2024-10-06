/* const bookingHotel = {
          nights: number,
          roomType: "string" {
                 standard: number -> 50,
                 double: number -> 100,
                 suite: number -> 200
                }
          parking: boolean -> number -> price: 10€ per day,
          board: string -> price per day: {
                  none: number -> 0,       
                  half board: number -> 10,
                  full board: number -> 20,
                 }
} */
type Room = 'standard' | 'double' | 'suite' ;
type Board = 'none' | 'half' | 'full';
interface Bookings {
  nights: number;
  roomType: Room;
  parking: boolean;
  board: Board;
};

export const bookingHotel  : Bookings[ ] = [
  {nights: 5, roomType: "suite", parking: true, board: "full" },
  {nights: 23,  roomType: "double", parking: false, board: "half" },
];
 
export function isValidNights (nights: number ) : boolean {
  return nights > 0 ? true : false;
}

export function boardPrice(boardChoice:  Board) : number {
  const price = {
      none: 0,
      half: 10,
      full: 20,
  };
return  price[boardChoice];
}

  export function roomPrice (roomType : Room) : number {
     const price = {
        standard: 50,
        double: 100,
        suite: 200,
     }
    return price[roomType];
  }

export function parkingPrice(parkingValue : boolean) : number {
  return parkingValue ? 10 : 0;
}

export function pricePerNight (board : Board, room : Room, parking: boolean) : number {
      const price = boardPrice(board) + roomPrice(room) + parkingPrice(parking);
      return price;
}

  export function totalPrice(nights : number, pricePerNight : number ) : number {      
        const totalPrice = isValidNights(nights) ? nights * pricePerNight : 0;
        return totalPrice;
  }
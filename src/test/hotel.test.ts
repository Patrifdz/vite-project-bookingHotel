// sum.test.js
import { expect, test, describe } from "vitest";
import {
  bookingHotel,
  isValidNights,
  boardPrice,
  roomPrice,
  parkingPrice,
  pricePerNight,
  totalPrice,
} from "../hotel.js";

// Testing getting price per day related to the board choice of the booking
describe("Testing 'Hotel.ts' ", () => {

            describe('Testing the function isValidNights', ( ) => {
                test('receiving 3 nights to equal 3', ( ) => {
                  // Arrange -> receiving a number of nights
                  const nights = 3;
                  // Act -> check if the number of nights is bigger than 0 to return the number or return 0 in other case
                  const result = isValidNights(nights)
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(true);
                });

                test('receiving 0 nights to equal 0', ( ) => {
                  // Arrange -> receiving a number of nights
                  const nights = 0;
                  // Act -> check if the number of nights is bigger than 0 to return the number or return 0 in other case
                  const result = isValidNights(nights)
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(false);
                });

                test('receiving -1 nights to equal 0', ( ) => {
                  // Arrange -> receiving a number of nights
                  const nights = -1;
                  // Act -> check if the number of nights is bigger than 0 to return the number or return 0 in other case
                  const result = isValidNights(nights)
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(false);
                });

                test('receiving nights of the first hotel booking (5) nights to equal 0', ( ) => {
                  // Arrange -> receiving a number of nights
                  const nights = bookingHotel[0].nights;
                  // Act -> check if the number of nights is bigger than 0 to return the number or return 0 in other case
                  const result = isValidNights(nights)
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(true);
                });

                test('receiving nights of the second hotel booking (23) nights to equal 0', ( ) => {
                  // Arrange -> receiving a number of nights
                  const nights = bookingHotel[1].nights;
                  // Act -> check if the number of nights is bigger than 0 to return the number or return 0 in other case
                  const result = isValidNights(nights)
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(true);
                });
            });

          describe("Testing function boardPrice", () => {
                test('Receiving "half" and getting price 10€ per day', () => {
                  // Arrange -> receiving type "half" of board
                  const boardType = "half";
                  // Act -> getting the price for the selection using the function "boardPrice"
                  const price = boardPrice(boardType);
                  // Assert -> for the selection "half" it expects 10€ per day
                  expect(price).toBe(10);
                });

                test('Receiving "full" and getting price 20€ per day', () => {
                  // Arrange-> receiving type "full" of board
                  const boardType = "full";
                  // Act -> getting the price for the selection using the function "boardPrice"
                  const price = boardPrice(boardType);
                  // Assert -> for the selection "half" it expects 10€ per day
                  expect(price).toBe(20);
                });

                test('Receiving "none" and getting price 0€ per day', () => {
                  // Arrange-> receiving type "full" of board
                  const boardType = "none";
                  // Act -> getting the price for the selection using the function "boardPrice"
                  const price = boardPrice(boardType);
                  // Assert -> for the selection "half" it expects 10€ per day
                  expect(price).toBe(0);
                });
          });

          describe("Testing function roomPrice", () => {
                test('Testing the case of receiving type of room "standard"', () => {
                  // Arrange -> Definir los datos que usaremos para la prueba
                  const roomType = "standard";
                  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                  const result = roomPrice(roomType);
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(50);
                });

                test('Testing the case of receiving type of room "double"', () => {
                  // Arrange -> Definir los datos que usaremos para la prueba
                  const roomType = "double";
                  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                  const result = roomPrice(roomType);
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(100);
                });

                test('Testing the case of receiving type of room "suite"', () => {
                  // Arrange -> Definir los datos que usaremos para la prueba
                  const roomType = "suite";
                  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                  const result = roomPrice(roomType);
                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(200);
                });
          });

          describe("Testing function parkingPrice", () => {
                test("User selects option no parking", () => {
                  // Arrange -> receiving option "no parking"
                  const parkingValue = false;

                  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                  const result = parkingPrice(parkingValue);

                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(0);
                });

                test("User selects option with parking", () => {
                  // Arrange -> receiving option "no parking"
                  const parkingValue = true;

                  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                  const result = parkingPrice(parkingValue);

                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(10);
                });
          });

          describe("Testing function pricePerNight", () => {
                test("total price per night of first hotel booking is equal to 230€", () => {
                  //Arrange -> receiving 1 night for the booking
                  const boardPrice = bookingHotel[0].board;
                  const roomPrice = bookingHotel[0].roomType;
                  const parkingPrice = bookingHotel[0].parking;
                  //Act -> getting the price for the booking using the function "hotelPrice"
                  const price = pricePerNight(boardPrice, roomPrice, parkingPrice);
                  //Assert -> for 1 night and a room of 100€, the total price of the booking would be 100€
                  expect(price).toBe(230);
                });

                test("total price per night of second hotel booking is equal to 110€", () => {
                  //Arrange -> receiving 1 night for the booking
                  const boardPrice = bookingHotel[1].board;
                  const roomPrice = bookingHotel[1].roomType;
                  const parkingPrice = bookingHotel[1].parking;
                  //Act -> getting the price for the booking using the function "hotelPrice"
                  const price = pricePerNight(boardPrice, roomPrice, parkingPrice);
                  //Assert -> for 1 night and a room of 100€, the total price of the booking would be 100€
                  expect(price).toBe(110);
                });
          });

          describe("Testing function totalPrice", () => {
                test("total price of first hotel booking is equal to 1150", () => {
                  // Arrange -> receiving number of nights and price per night;
                  const nights = bookingHotel[0].nights;
                  const boardPrice = bookingHotel[0].board;
                  const roomPrice = bookingHotel[0].roomType;
                  const parkingPrice = bookingHotel[0].parking;
                  const priceNight = pricePerNight(boardPrice, roomPrice, parkingPrice);

                  // Act -> getting total price of the hotel booking by using function totalPrice
                  const result = totalPrice(nights, priceNight);

                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(1150);
                });

                test("total price of second hotel booking is equal to 2530", () => {
                  // Arrange -> receiving number of nights and price per night;
                  const nights = bookingHotel[1].nights;
                  const boardPrice = bookingHotel[1].board;
                  const roomPrice = bookingHotel[1].roomType;
                  const parkingPrice = bookingHotel[1].parking;
                  const priceNight = pricePerNight(boardPrice, roomPrice, parkingPrice);

                  // Act -> getting total price of the hotel booking by using function totalPrice
                  const result = totalPrice(nights, priceNight);

                  // Assert -> Compruebas que el resultado es el esperado
                  expect(result).toBe(2530);
                });
          });
});

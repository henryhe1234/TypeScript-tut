const carMaker: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["ford"], ["f150"]];
const StringArrayOfArray: string[][] = [];
//help with inference when extracting values
const singleCar = carMaker[0];
const myCar = carMaker.pop();

//prevent incompatible values
//carMaker.push(3); wrong

carMaker.map((car: string): string => {
  return car.toLowerCase();
});
//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("222");
importantDates.push(new Date());
console.log(importantDates); //

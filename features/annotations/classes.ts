class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("cdcd");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const vehicle = new Vehicle("red");
console.log(vehicle.color);
const carOne = new Car(1, "orange");
carOne.startDrivingProcess();

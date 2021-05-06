let apples: number = 5;
let info: string = "fast";
let isThere: boolean = false;
let empty: null = null;
let nothing: undefined = undefined;
//build in object

let time: Date = new Date();

let stringArray: string[] = ["1", "b"];
let numArray: number[] = [3, 6, 5];

let point: { x: number; y: number } = {
  x: 444,
  y: 333,
};
const logNumber: (j: number) => void = (j: number) => {
  console.log(j);
};
//when to use annotations
//1) Function that return 'any' types
const json = '{"x":10,"y":20}';
const coordiante: { x: number; y: number } = JSON.parse(json);
console.log(coordiante);

//2)when we declare a variable on one line and initalize it later

let words = ["blue", "red"];
let findWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "blue") {
    findWord = true;
  }
}

//3) variable whose type cannot be inferred correctly

let numbers = [3, -1, 4];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

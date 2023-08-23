let num: number = 10;
let str: string = "hamid";
let bool: boolean = true;

str = "ali";
num = 87;
console.log("basic ", str, num, bool);

// #############################
console.log("");

enum direction {
  up = 10,
  down = 20,
  laft = 30,
  right = 40,
}

console.log("enum", direction);

// ##############################
console.log("");

function sum(x: number, y: number): number {
  return x + y;
}
console.log("sum", sum(1, 3));

let sum1 = (x: number, y: number): number => {
  return x + y;
};
console.log("sum1", 3 + 5);

// this is NOT funtion
let sum2: (x: number, y: number) => number;
sum2 = function (x, y) {
  return x + y;
};
console.log("sum2", sum2(7, 9));

// also u CAN right it like this
let sum3: (x: number, y: number) => number = (x, y) => x + y;
console.log("sum3", sum3(11, 13));

let sum4 = (x: number, y: number = 2): number => {
  return x + y;
};
console.log("sum4: Defult Value", sum4(1, 5));

let sum5 = (x?: number, y?: number): number => {
  if (x && y) {
    return x + y;
  } else {
    return -0;
  }
};
console.log("sum5: optional", sum5());

// ##############################
console.log("");

console.log("");

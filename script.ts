interface Person {
  name: string;
  family: string;
  age: number;
  fullname(): string;
}

class Amir implements Person {
  constructor(public name: string, public family: string, public age: number) {}
  fullname(): string {
    return "";
  }
}

class Alex implements Person {
  constructor(public name: string, public family: string, public age: number) {}

  fullname(): string {
    return this.name + " " + this.family;
  }
}

class Hesam implements Person {
  constructor(public name: string, public family: string, public age: number) {}

  fullname(): string {
    return this.name + " " + this.family;
  }
}

class Ali implements Person {
  constructor(public name: string, public family: string, public age: number) {}

  fullname(): string {
    return this.name + " " + this.family;
  }
}

let user: Person = new Hesam("hesam", "family", 26);
user = new Alex("hesam", "family", 26);

console.log(user.fullname());

//#######################################################################################

// interface lableType {
//   title: string;
//   size: number;
//   id: string | number;
// }
// function printLable(lable: lableType) {
//   console.log(lable);
// }

// let lable1 = { title: "lable Title", size: 10, id: 30 };
// let lable2 = { title: "Seek around And find out", size: 20, id: "30_hdf" };
// let lable3 = {
//   title: "More fuck around , more u find out",
//   id: "26_HA",
//   size: 83,
// };
// printLable(lable1);
// printLable(lable2);
// printLable(lable3);

//#######################################################################################

// class Car {
//   private static instance: Car;

//   private constructor() {}

//   public static getInstance(): Car {
//     if (!Car.instance) {
//       Car.instance = new Car();
//     }
//     return Car.instance;
//   }

//   // methods and properties
// }

// let car1 = Car.getInstance();
// let car2 = Car.getInstance();

// console.log(car1 === car2); //  ==> True

//#######################################################################################

// class Car {
//   public name: string;
//   static color: string;
//   public door: number;
//   readonly id: string;

//   constructor(name: string, color: string, door: number, id: string) {
//     this.name = name;
//     Car.color = color;
//     this.door = door;
//     this.id = id;
//   }
// }
// let car1 = new Car("name", "red", 2, "3_nu");
// car1.id = "dont go"; //  Error : the property is " Read Only "

// console.log(car1);

//#######################################################################################

// abstract class Car {

//   public name: string;
//   public color: string;
//   public door: number;
//   protected id: string;

//   constructor(name: string, color: string, door: nu    mber, id: string) {
//     this.name = name;
//     this.color = color;
//     this.door = door;
//     this.id = id;
//   }

//   abstract demoFun(): string;

//   foo(): void {
//     console.log(this.demoFun());
//   }
// }

// class iranKhodro extends Car {
//   demoFun() {
//     return "dd";
//   }
// }

// let car1 = new iranKhodro("iran khodro title", "red", 4, "45_IK");
// console.log(car1.foo());

//#######################################################################################

// class Person {
//   public name: string;
//   private age: number;
//   protected isDead: boolean;

//   constructor(name: string, age: number, isDead: boolean) {
//     this.name = name;
//     this.age = age;
//     this.isDead = isDead;
//   }

//   set setPerson(age: number) {
//     this.age = age;
//   }
//   get getPerson() {
//     return this.name;
//   }
// }
// let person1 = new Person("Hamidd", 23, false);

// person1.setPerson = 34;

// console.log("Getter==>", person1.getPerson);

//#######################################################################################

// class Person {
//   public name: string;
//   private age: number;
//   protected isDead: boolean;

//   constructor(name: string, age: number, isDead: boolean) {
//     this.name = name;
//     this.age = age;
//     this.isDead = isDead;
//   }
//   walk() {
//     console.log(this.isDead);
//   }
// }
//   class guy extends Person{
//     blind(){
//       console.log(this.name);   //  name is Public
//       console.log(this.age);    //  Error : age is Privet
//       console.log(this.isDead); //  isDead is Protected
//       console.log(this.walk()); //  walk() is Public
//     }
//   }
// let person1 = new Person("ali", 33, false);
// console.log(person1.name);      //  name is Public
// console.log(person1.age);       //  Error : age is Privet
// console.log(person1.isDead);    //  Error : isDead is Protected
// console.log(person1.walk());    //  walk() is Public

//#######################################################################################

// let person1: {
//   fullName: string;
//   age: number;
//   job: boolean;
//   fun: (num: number) => string;
// };

// person1 = {
//   fullName: "kamid",
//   age: 29,
//   job: false,
//   fun(x) {
//     return String(x);
//   },
// };
// console.log(person1);

// type personType = {
//   name: string;
//   age: number;
//   job: boolean;
//   myFun: (param: number) => string;
// };
// let person2: personType = {
//   name: "ali",
//   age: 73,
//   job: false,
//   myFun(param = 7) {
//     return String(param);
//   },
// };

//#######################################################################################

// function sum(x: number, y: number): number {
//   return x + y;
// }
// console.log(sum(2, 3));

// let sum2 = (x: number, y: number): number => {
//   return x + y;
// };
// console.log(sum2(5, 7));

//     // Default Value
// let sum3 = (x: number = 2, y: number = 3): number => {
//   return x + y;
// };
// console.log(sum3()); // => 5
// console.log(sum3(4, 6)); // => 10

//     // Optional Function
// let sum4 = (x: number = 2, y?: number) => {
//     // U must use condition
//   if (y) {
//     return x + y;
//   } else {
//     return x;
//   }
// };

//#######################################################################################

// enum Directions {
//   up = 10,
//   down = 30,
//   left = 50,
//   right = 70,
// }
// Directions.up = 80; // Error : Cannot assign to 'up' because it is a read-only property.

// ###########################################################################################

// let myUserName: string | number;

// myUserName = "hamid";
// myUserName = 9983;
// myUserName = true;  //Error : Type 'boolean' is not assignable to type 'string | number'.

// let commment:string|null
// commment='Good Post'
// commment=null

// ##########################################################################################پ

// let user1: string[] = ["hamid", "ali", "reza"];
// user1[1] = "ahmad";
// user1[5] = "abas";
// console.log(user1);

// let user2: Array<number> = [1, 2, 3];
// user2[1] = 45;
// user2[6] = 75;

// let user3: [string, number, boolean] = ["Hamid", 20, false];
// user3[0] = "ali";
// user3[2] = 30; // Error : Type 'number' is not assignable to type 'boolean'.
// user3[5] = "demo"; // Error : Tuple type '[string, number, boolean]' of length '3' has no element at index '5'

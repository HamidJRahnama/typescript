class Person {
  public name: string;
  private age: number;
  protected isDead: boolean;

  constructor(name: string, age: number, isDead: boolean) {
    this.name = name;
    this.age = age;
    this.isDead = isDead;
  }

  set setPerson(age: number) {
    this.age = age;
  }
  get getPerson() {
    return this.name;
  }
}
let person1 = new Person("Hamidd", 23, false);

person1.setPerson = 34;

console.log("Getter==>", person1.getPerson);

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

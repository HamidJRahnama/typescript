"use strict";
let user1 = ["hamid", "ali", "reza"];
user1[1] = "ahmad";
user1[5] = "abas";
console.log(user1);
let user2 = [1, 2, 3];
user2[1] = 45;
user2[6] = 75;
let user3 = ["Hamid", 20, false];
user3[0] = "ali";
user3[2] = 30; // Error : Type 'number' is not assignable to type 'boolean'.
user3[5] = "demo"; // Error : Tuple type '[string, number, boolean]' of length '3' has no element at index '5'

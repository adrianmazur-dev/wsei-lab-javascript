// // wait for DOM load by using DOMContentLoaded event
// addEventListener("DOMContentLoaded", (event) => {
//     console.log("Loaded!")
// });


// // validate password length and '!' neccesity
// const password = "zaq1@WSX!";
// if (!(8 <= password.length && password.length <= 15))
// {
//     console.log("Password does not meet requirements for min and max char length.");
// }
// else if (!password.includes("!"))
// {
//     console.log("Password does not contains an exclamation mark!");
// }
// else
// {
//     console.log("all good");
// }


// // switch operator
// const points = 12;
// switch (true) {
//     case points >= 13 && points <= 14:
//         console.log("3.0");
//         break;
//     case points >= 15 && points <= 16:
//         console.log("3.5");
//         break;
//     case points >= 17 && points <= 18:
//         console.log("4.0");
//         break;
//     case points >= 19 && points <= 20:
//         console.log("4.5");
//         break;
//     case points >= 21 && points <= 22:
//         console.log("5.0");
//         break;
//     default:
//         console.log("2.0");
//         break;
// }


// // ternary operator
// const x = 10;
// const test = (x % 2 == 0)
//     ? console.log(`x = ${x}, jest parzysty`)
//     : console.log(`x = ${x}, jest nieparzysty`)

// // ternary operator and usual if oprator
// const x = 50 

// if (x <= 25) {
//     console.log("x jest mały".toUpperCase());
// }
// else if (35 < x && x < 100) {
//     console.log("x jest medianą".toUpperCase());
// }
// else { //if (100 <= x) 
//     console.log("z > 100".toUpperCase());
// }

// x <= 25
//   ? console.log("x jest mały".toUpperCase())
//   : 35 < x && x < 100
//     ? console.log("x jest medianą".toUpperCase())
//     : console.log("z > 100".toUpperCase());
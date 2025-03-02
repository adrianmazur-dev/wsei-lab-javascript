// // operations on Date
// const date = new Date();
// console.log(date.toLocaleDateString("pl"));
// console.log(date.toLocaleDateString("us"));
// console.log(date.toLocaleDateString("en"));

// // operations on string
// // useful methods:
// //      charAt(), includes(), replace(), slice(), split(), toLowerCase(), toUpperCase()
// let firstName = "janek";
// console.log(firstName.charAt(0).toUpperCase());

// // possible operations in console
// console.log("%cTEXT", "font-size: 40px; color: red;");

// // zadania
// const text1 = "powiększ mnie!";
// console.log(text1.toUpperCase());

// const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
// console.log(text2.toLowerCase());

// const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
// console.log(text3.slice(6));

// const text4 = 'sprawdź, czy zawieram słowo "czy"';
// console.log(text4.includes("czy"));

// const text5 =
//   'wyLoguj w konsoli tylko literę "L", która znajduje sie w wyrazie "wyLoguj"';
// console.log(text5.charAt(2));

// const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// console.log(text6.replace("pies", "kot pies"));

// const text7 = "podziel, ten, string, od, przecinkow";
// console.log(text7.split(","));

// jawna konwersja
const numberStr = "198";
console.log(parseInt(numberStr)); // liczby całkowite
console.log(parseFloat(numberStr)); // liczby zmiennoprzecinkowe

const numberFlt = 1.3421321;
console.log(numberFlt.toFixed(2)); // liczby stałoprzecinkowe

// // # loops
// const pets = ['cat', 'dog', 'horse', 'fish', 'pig'];

// // ## for loop
// console.log('...For loop...');
// for (let i=0; i<pets.length; i++) {
//     console.log(pets[i]);
// }

// // ## foreach loop
// console.log('...Foreach loop...');
// pets.forEach(element => {
//     console.log(element);
// });

// // ## while loop / do loop
// console.log('...While loop / do loop...');
// current = 0;
// while(current < pets.length) {
//     console.log(pets[current++]);
// }

// // ## for..of.. loop
// console.log('...For..of.. loop...');
// for (const pet of pets) {
//     console.log(pet);
// }



// t_01
// const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
// for (const city of cities)
// {
//     console.log(`To miasto nazywa się: ${city}`);
// }

// t_02
// const size = 50;
// for (let x = 1; x <= size; x++) {
//     let p = '';
//     for (let y = 0; y < x; y++) {
//         p += '*';
//     }
//     console.log(p);
// }

// t_03
// const numbers = [5,8,12,38,62];

// for (const n of numbers) {
//     n % 2 == 0
//         ? console.log(`%cLiczba ${n} (${(n/3).toFixed(2)}) jest parzysta`, 'color: red')
//         : console.log(`Liczba ${n} (${(n/3).toFixed(2)}) jest nieparzysta`);
// }
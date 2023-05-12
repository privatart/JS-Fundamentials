// Завдання 2/1
let surName = "Opolonyk";
console.log (surName);

// Завдання 3
// 3/a
let firstLet;
let secondLet;
// 3/b
firstLet = "текст у форматі string";
secondLet = 2;
// 3/c
// alert ("Перша змінна: " + firstLet);
// alert ("Друга змінна: " + secondLet);
console.log("Перша змінна: " + firstLet);
console.log("Друга змінна: " + secondLet);
// 3/d
secondLet = firstLet;
// 3/e
console.log("Перша змінна: " + firstLet);
console.log("Змінена друга змінна: " + secondLet);

// Завдання 4
let createObj = {
        title: "Назва об'єкта",
        id: 15499,
        real: false,
        needCheck: undefined,
        value: null,
    };
    console.log (createObj);
    
    // Завдання 5
    let adult = confirm("Are You 18 years old?");
    console.log (`Is user 18 years old? : ${adult}`);
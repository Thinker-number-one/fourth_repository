alert('Сейчас будет ПЕРВЫЙ способ решения ПЕРВОГО задания!');

// Задание первое. Хитрый способ, или как обойти прием "конкатенация"
// Два последовательных знака "минуса" дают в итоге знак "плюс"

let a = prompt('Введите первое число!');
console.log(a);

let b = prompt('Введите второе число!');
console.log(b);

let summa = a - (-b); // Обходим прием "конкатенация"
console.log(summa);

if(summa > 15) {
    console.log('ДА');
}
else {
    console.log('НЕТ');
}

alert('Сейчас будет ВТОРОЙ способ решения ПЕРВОГО задания!');

// Задание первое. Обычный способ

let c = prompt('Введите первое число!');
console.log(c);

let d = prompt('Введите второе число!');
console.log(d);

let sum2 = Number(c) + Number(d);
console.log(sum2);

if(sum2 > 15) {
    console.log('ДА');
}
else {
    console.log('НЕТ');
}

alert('Сейчас будет решение ВТОРОГО задания!');

// Задание второе

let e = prompt('Введите первое число!');
console.log(e);

let g = prompt('Введите второе число!');
console.log(g);

if(e === g) {
    console.log(true);
}
else {
    console.log(false);
}
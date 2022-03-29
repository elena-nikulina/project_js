'use strict';

let title=prompt('Как называется ваш проект?', 'project');
let screens=prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice=+prompt('Сколько будет стоить данная работа?', '1000000');
let rollback=99;
let fullPrice=1000000;
let adaptive=confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Липкий хедер');
let servicePrice1 = +prompt('Сколько это будет стоить?', '250000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'прибить футер к низу');
let servicePrice2 = +prompt('Сколько это будет стоить?', '2000000');
fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

switch(true) {
    case fullPrice >= 30000:
        console.log('Даем скидку в 10%');
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log('Даем скидку в 5%');
        break;
    case fullPrice >= 0 && fullPrice < 15000:
        console.log('Скидка не предусмотрена');
        break;
    default: 
        console.log('Что-то пошло не так');
        break;
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log('Стоимость верстки экранов ' + (screenPrice) + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + (fullPrice) + ' рублей/ долларов/гривен/юани');

console.log((screens.toLowerCase()).split(', '));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));
console.log(servicePercentPrice);
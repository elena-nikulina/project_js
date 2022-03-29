'use strict';

let title=prompt('Как называется ваш проект?', 'proJect');
let screens=prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice=+prompt('Сколько будет стоить данная работа?', '1000000');
let rollback=99;

let adaptive=confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Липкий хедер');
let servicePrice1 = +prompt('Сколько это будет стоить?', '250000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'прибить футер к низу');
let servicePrice2 = +prompt('Сколько это будет стоить?', '2000000');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    switch(true) {
        case price >= 30000:
            return 'Даем скидку в 10%';
            break;
        case price >= 15000 && fullPrice < 30000:
            return 'Даем скидку в 5%';
            break;
        case price >= 0 && fullPrice < 15000:
            return 'Скидка не предусмотрена';
            break;
        default: 
            return 'Что-то пошло не так';
            break;
    }
}

const getAllServicePrices = function(price1, price2) {
    return price1 + price2;
}

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(allprice1, allprice2) {
    return allprice1 + allprice2;
}

fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function(str) {
    str.trimStart();
    str[0].toUpperCase();
    for (let j = 1; j < str.length; j++) {
        str[j].toLowerCase();
    }
    return str;
}

getTitle(title);

function getServicePercentPrices(sumItog, sum0) {
    return sumItog - sum0;
}

servicePercentPrice = getServicePercentPrices(fullPrice, fullPrice * (rollback/100));

fullPrice - (fullPrice * (rollback/100))

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
//console.log(typeof title);
//console.log(typeof fullPrice);
//console.log(typeof adaptive);
console.log(servicePercentPrice);

//console.log(screens.length);
//console.log('Стоимость верстки экранов ' + (screenPrice) + ' рублей/ долларов/гривен/юани');
//console.log('Стоимость разработки сайта ' + (fullPrice) + ' рублей/ долларов/гривен/юани');

//console.log((screens.toLowerCase()).split(', '));
//console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));
console.log(servicePercentPrice);
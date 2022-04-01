'use strict';

let title;
let screens;
let screenPrice;
let rollback=10;

let adaptive;
let service1;
let service2;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let sum0 = 0;

const isNumber = function(num) {
    return !isNaN((parseFloat(num))) && isFinite(num);
}

const asking = function() {
    title=prompt('Как называется ваш проект?', 'proJect');
    screens=prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    

    do {
        screenPrice=+prompt('Сколько будет стоить данная работа?');

    } while (!isNumber(screenPrice));

    console.log(screenPrice, typeof screenPrice);
    adaptive=confirm('Нужен ли адаптив на сайте?');
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}
const getFullPrice = function() {
    return screenPrice + allServicePrices;
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

const getAllServicePrices = function() {

    let sum = 0;
    for (let i = 0; i < 2; i++) {

        let sum1 = 0;
        
        if (i == 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Липкий хедер');
        } else if (i == 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'прибить футер к низу');
        }

        do {
           
            sum1 = parseFloat(prompt('Сколько это будет стоить?'));
            

        } while (!isNumber(sum1));

        sum += +sum1;

    }

    return sum;
}

const getTitle = function(str) {
    str.trimStart();
    str[0].toUpperCase();
    for (let j = 1; j < str.length; j++) {
        str[j].toLowerCase();
    }
    return str;
}

function getServicePercentPrices(sumItog) {
    sum0 = sumItog*(rollback/100);
    return sumItog - sum0;
}

asking();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(fullPrice);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log((screens.toLowerCase()).split(', '));
console.log(servicePercentPrice);
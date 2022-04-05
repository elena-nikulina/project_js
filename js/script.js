'use strict';

let title1 = document.getElementsByTagName('h1')[0];
let buttons = document.getElementsByClassName('handler_btn');
let plus = document.querySelector('.screen-btn');
let others = document.querySelectorAll('.other-items');

let order1 = [];
let order2 = [];

let range = document.querySelector('.rollback').querySelector('input[type="range"]');
let rangeValue = document.querySelector('.rollback').querySelector('span.range-value');

let totals = document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen');

console.log(title1);
 for(let button of buttons) {
     console.log(button);
 }
console.log(plus);

    for(let i = 0; i < others.length; i++) {
        if (others[i].classList.contains('percent')) {
            order1.push(others[i]);
        }
    }
    console.log(order1);

    for(let i = 0; i < others.length; i++) {
        if (others[i].classList.contains('number')) {
            order2.push(others[i]);
        }
    }
    console.log(order2);

console.log(range);
console.log(rangeValue);

for (let j = 0; j < totals.length; j++) {
    console.log(totals[j]);
}

for (let screen of screens) {
    console.log(screen);
}

/*const appData = {
    title: '',
    screens: [],  
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    services: {},

    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    sum0: 0,

    asking: function() {

        do {
            appData.title=prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title));
        

        for (let i = 0; i < 2; i++) {

            let name = '';

            do {
                name = prompt('Какие типы экранов нужно разработать?');

            } while (appData.isNumber(name));
            
            let price = 0;

            do {
                price=+prompt('Сколько будет стоить данная работа?');
        
            } while (!appData.isNumber(price));

            appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) {

            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name));
            
            let sum1 = 0;
    
            do {
               
                sum1 = parseFloat(prompt('Сколько это будет стоить?'));
                
    
            } while (!appData.isNumber(sum1));
    
            appData.services[name] = +sum1;
    
        }
    
        appData.adaptive=confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getRollbackMessage: function(price) {
        switch(true) {
            case price >= 30000:
                return 'Даем скидку в 10%';
                break;
            case price >= 15000 && appData.fullPrice < 30000:
                return 'Даем скидку в 5%';
                break;
            case price >= 0 && appData.fullPrice < 15000:
                return 'Скидка не предусмотрена';
                break;
            default: 
                return 'Что-то пошло не так';
                break;
        }
    },


    getFullPrice: function() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
        
    },

    getTitle: function() {
        appData.title = appData.title.trimStart();
        appData.title[0].toUpperCase();
        for (let j = 1; j < appData.title.length; j++) {
            appData.title[j].toLowerCase();
        }
        return appData.title;
    },

    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice*(appData.rollback/100);
    },

    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.title);
        console.log(appData.screens);
        //for (let key in appData) {
         //   console.log(appData[key]); 
        //}
    },

    start: function() {
        appData.isNumber();
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },

    isNumber: function(num) {
        return !isNaN((parseFloat(num))) && isFinite(num);

}

}

appData.start();*/


        
        



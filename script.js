'use strict';

const appData = {
    title: '',
    screens: '',  
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    service1: '',
    service2: '',
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    sum0: 0,

    asking: function() {
        appData.title=prompt('Как называется ваш проект?', 'proJect');
        appData.screens=prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice=+prompt('Сколько будет стоить данная работа?');
    
        } while (!appData.isNumber(appData.screenPrice));
    
        appData.adaptive=confirm('Нужен ли адаптив на сайте?');
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

    getAllServicePrices: function() {

        let sum = 0;
    
        for (let i = 0; i < 2; i++) {
    
            let sum1 = 0;
    
            if (i == 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Липкий хедер');
            } else if (i == 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'прибить футер к низу');
            }
    
            do {
               
                sum1 = parseFloat(prompt('Сколько это будет стоить?'));
                
    
            } while (!appData.isNumber(sum1));
    
            sum += +sum1;
    
        }
    
        return sum;
    },

    getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices;
        
    },

    getTitle: function() {
        appData.title.trimStart();
        appData.title[0].toUpperCase();
        for (let j = 1; j < appData.title.length; j++) {
            appData.title[j].toLowerCase();
        }
        return appData.title;
    },

    getServicePercentPrices: function() {
        return appData.fullPrice - appData.fullPrice*(appData.rollback/100);
    },

    logger: function() {
        //console.log(appData.fullPrice);
        //console.log(appData.servicePercentPrice);
        //console.log(appData.title);

        for (let key in appData) {
            console.log(appData[key]); 
        }
    },

    start: function() {
        appData.isNumber();
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
    },

    isNumber: function(num) {
        return !isNaN((parseFloat(num))) && isFinite(num);

}

//const isNumber = function(num) {
 //   return !isNaN((parseFloat(num))) && isFinite(num);
}

//appData.isNumber();
appData.start();

  
        
        



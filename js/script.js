'use strict';

const title1 = document.getElementsByTagName('h1')[0];
const buttons = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');

const inputRange = document.querySelector('.rollback input[type="range');
const inputRangeValue = document.querySelector('.rollback span.range-value');

let screens = document.querySelectorAll('.screen');

 const  startBtn = buttons[0];
 const  resetBtn = buttons[1];

const orderItemsPercent = document.querySelector('.other-items.percent');

const orderItemsNumber = document.querySelector('.other-items.number');

const totals = document.getElementsByClassName('total-input');

 const total = totals[0];
 const totalCount = totals[1];
 const totalCountOther = totals[2];
 const fullTotalCount = totals[3];
 const totalCountRollback = totals[4];

const appData = {
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
    init: function() {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        //appData.start();
    },
    addTitle: function() {
        document.title = title.textContent;
    },  
    asking: function() {

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
    
        //appData.adaptive=confirm('Нужен ли адаптив на сайте?');
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
        appData.addScreens();
        appData.addServices();
        //appData.isNumber();
        //appData.asking();
        //appData.addPrices();
        //appData.getFullPrice();
        //appData.getServicePercentPrices();
        //appData.getTitle();
        //appData.logger();
    },
    addScreens: function() { 
        screens = document.querySelectorAll('.screen'); 
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent
           
            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            });
        });

        console.log(appData.screens);
        
    },
    addServices: function() {
  
        orderItemsPercent.forEach((item) => {
            console.log(item);
        });
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    }
    

}

appData.init();


        
        



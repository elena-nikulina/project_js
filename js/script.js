"use strict";

const title1 = document.getElementsByTagName("h1")[0];
const buttons = document.getElementsByClassName("handler_btn");
const buttonPlus = document.querySelector(".screen-btn");

const inputRange = document.querySelector('.rollback input[type="range"]');
const inputRangeValue = document.querySelector(".rollback span.range-value");

let screens = document.querySelectorAll(".screen");
let screensSelects = document.querySelectorAll('.screen select');
let screensInputs = document.querySelectorAll('.screen input[type="text"]');
let countScreen = 0;
const startBtn = buttons[0];
const resetBtn = buttons[1];

let orderItemsPercent = document.querySelectorAll(".other-items.percent");

const orderItemsNumber = document.querySelectorAll(".other-items.number");

const totals = document.getElementsByClassName("total-input");

const total = totals[0];
const totalCount = totals[1];
const totalCountOther = totals[2];
const fullTotalCount = totals[3];
const totalCountRollback = totals[4];

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 0,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  fullPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  sum0: 0,
  count: 0,
  init: function () {
    this.addTitle();
    inputRange.addEventListener("input", this.getRollback);
    startBtn.addEventListener("click", this.start);
    buttonPlus.addEventListener("click", this.addScreenBlock);
    resetBtn.addEventListener("click", this.reset);
    //appData.start();
  },
  start: function () {
    appData.allDisable();
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    //appData.getServicePercentPrices();
    //appData.logger();
    console.log(appData);
    appData.showResult();
  },
  addTitle: function () {
    document.title = title.textContent;
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.count += +screen.count;
      console.log(appData.count);
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    //console.log(appData.screenPrice);
    this.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;
    this.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getRollback: function () {
    inputRangeValue.textContent = inputRange.value + "%";
    appData.rollback = +inputRange.value;
  },

  getServicePercentPrices: function () {
    this.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.title);
    console.log(appData.screens);
    //for (let key in appData) {
    //   console.log(appData[key]);
    //}
  },
  allDisable: function() {
    screensSelects = document.querySelectorAll('.screen select');
    screensInputs = document.querySelectorAll('.screen input[type="text"]');
    for(let screenSelect of screensSelects) {
      screenSelect.disabled = true;
    }
    if (screens.length > 1) {
      for(let n = 0; n < screens.length; n++) {
        screens[n].disabled = true;
      }
    }
    for(let screenInput of screensInputs) {
      screenInput.disabled = true;
    }
    orderItemsPercent.disabled = true;
    orderItemsNumber.disabled = true;
    startBtn.style.display = 'none';
    resetBtn.style.display = 'block';
  },
  reset: function() {
    startBtn.style.display = 'block';
    resetBtn.style.display = 'none';
    screensSelects = document.querySelectorAll('.screen select');
    for(let screenSelect of screensSelects) {
      screenSelect.disabled = false;
    }
    screensInputs = document.querySelectorAll('.screen input[type="text"]');
    //console.log(screensInputs);

    //let inputMainAll = document.querySelectorAll('input[type="text"]');
    for(let screenInput of screensInputs) {
      screenInput.value = '';
    }
    for(let tot of totals) {
      tot.value = '';
    }
    //input[type="text"].innerHTML = '';
    inputRange.value = 0;
    inputRangeValue.textContent = 0 + '%';

    for(let screenInput of screensInputs) {
      screenInput.disabled = false;
      screenInput.value = '';
    }
    orderItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      //const label = item.querySelector("label");
      //const input = item.querySelector("input[type=text]");
      //input.value = '';
      if (check.checked) {
        check.checked = false;
        
        //appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    orderItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      //const label = item.querySelector("label");
      //const input = item.querySelector("input[type=text]");
      //input.value = '';
      if (check.checked) {
        check.checked = false;
        //appData.servicesNumber[label.textContent] = +input.value;
      }
    });
    //const cloneScreen = screens[0].cloneNode(true);
    //screens[screens.length - 1].after(cloneScreen);
    screens.forEach((screen, index) => {
      if (index !== 0) {
        screen.remove();
      }
    }); 
    /*if (screens.length > 1) {
      for(let j = 1; j < screens.length; j++) {
      screens.length = 1;
      }
    }*/

    let select = document.querySelector('select');
    select.value = "";

    for(let k = 0; k < totals.length; k++) {
      totals[k].innerHTML = '';
    }
    appData.screens.length = 0;

    appData.screenPrice = 0,
    appData.rollback = 0,
    appData.adaptive = true,
    appData.servicesPercent = {},
    appData.servicesNumber = {},
    appData.fullPrice = 0,
    appData.servicePricesPercent = 0,
    appData.servicePricesNumber = 0,
    appData.servicePercentPrice = 0,
    appData.sum0 = 0,
    appData.count = 0,

    appData.init();
  },
  
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.count;
  },
  
  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const count = screen.querySelector("input");
      const selectValue = select.options[select.selectedIndex].value;
      const selectName = select.options[select.selectedIndex].textContent;
      if (selectValue === '' || input.value === 0 || input.value === '' || selectValue === 0) {
        appData.screens.length = 0;
        return ;
      } else {
        appData.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: +count.value,
        });
      }
     
    });
  },
  addServices: function () {
    orderItemsPercent = document.querySelectorAll(".other-items.percent");
    orderItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    orderItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });

    //console.log(appData);
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    const input = cloneScreen.querySelector('input');
    input.value = '';
    screens = document.querySelectorAll(".screen");
    screens[screens.length - 1].after(cloneScreen);
    //if (countScreen !== 0) {
    //  screens[screens.length - 1].before(cloneScreen);

    //}
    countScreen++;

  },
};

appData.init();

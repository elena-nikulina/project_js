"use strict";

const title1 = document.getElementsByTagName("h1")[0];
const buttons = document.getElementsByClassName("handler_btn");
const buttonPlus = document.querySelector(".screen-btn");

const inputRange = document.querySelector('.rollback input[type="range');
const inputRangeValue = document.querySelector(".rollback span.range-value");

let screens = document.querySelectorAll(".screen");

const startBtn = buttons[0];
const resetBtn = buttons[1];

const orderItemsPercent = document.querySelectorAll(".other-items.percent");

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
    appData.addTitle();
    appData.getRollback();
    //startBtn.disabled = true;
    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    //appData.start();
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
    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getRollback: function () {
    inputRange.addEventListener("input", function () {
      inputRangeValue.textContent = inputRange.value + "%";
      appData.rollback = +inputRange.value;
    });
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice =
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

  start: function () {
    //appData.noResult();
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    //appData.getServicePercentPrices();
    //appData.logger();
    console.log(appData);
    appData.showResult();
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

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const count = screen.querySelector("input");
      const selectValue = select.options[select.selectedIndex].value;
      const selectName = select.options[select.selectedIndex].textContent;
      if (selectValue === '' || input.value === 0 || input.value === '') {
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
    screens[screens.length - 1].after(cloneScreen);
  },
};

appData.init();

let title="project";
let screens="Простые, Сложные, Интерактивные";
let screenPrice=10;
let rollback=99;
let fullPrice=1000000;
let adaptive=true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log('Стоимость верстки экранов ' + (screenPrice) + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + (fullPrice) + ' рублей/ долларов/гривен/юани');

let scr=screens.toLowerCase();
let arr=scr.split('');
console.log(arr);
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));



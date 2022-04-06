'use strict';

let books = document.querySelector('.books');
let items = document.querySelectorAll('.books .book');
items[0].querySelector('h2 > a').textContent = items[0].querySelector('h2 > a').textContent.trim();


let sorted = [...items].sort(function(a, b) {
    
    if (a.querySelector('h2 > a').textContent[6] >= b.querySelector('h2 > a').textContent[6]) {
        return 1;
    } else {
        return -1;
    }
    
});

books.innerHTML = '';

for (let book of sorted) {
    books.appendChild(book);
}
let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

sorted[2].querySelector('h2 > a').textContent = "Книга 3. this и Прототипы Объектов";

let adv = document.querySelector('.adv');
adv.style.display = 'none';

let sortUl1 = sorted[1].querySelector('ul');
console.log(sortUl1);

let sortUl1Li = sortUl1.querySelectorAll('li');

sortUl1Li[10].before(sortUl1Li[2]);

sortUl1Li[6].before(sortUl1Li[3]);

sortUl1Li[7].before(sortUl1Li[8]);


sortUl1Li[7].before(sortUl1Li[4]);

sortUl1Li[7].before(sortUl1Li[5]);

let sortUl4 = sorted[4].querySelector('ul');
console.log(sortUl4);

let sortUl4Li = sortUl4.querySelectorAll('li');

sortUl4Li[3].before(sortUl4Li[9]);

sortUl4Li[9].before(sortUl4Li[5]);

sortUl4Li[6].before(sortUl4Li[2]);

sortUl4Li[8].before(sortUl4Li[5]);

let sortUl5 = sorted[5].querySelector('ul');

let sortUl5Li = sortUl5.querySelectorAll('li');
let li = document.createElement('li');
li.innerHTML = 'Глава 8: За пределами ES6';

sortUl5.insertBefore(li, sortUl5Li[9]);



const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const loca_origin = location.origin;

const notification = $('.alert');
const load = $('.load');
const headerTitle = $('.header_title');
const backround = $('.backround');
const backround2 = $('.backround2');
const loadtTitle = $('.load_title');
const login = $('.login-page');

// function checkBlock(c) {
//     console.log(c.classList === 'load');
// }

function logOut() {
    notification.classList.add('noneBlock');
    load.classList.add('block');
    backround.classList.add('noneBlock');
    headerTitle.classList.add('noneBlock');
    loadtTitle.classList.add('block');

    setTimeout(displayHeaven, 2000);
}

function cancel() {
    alert('Có cái quần, lên thiên đường đi cưng');
    logOut();
}

function displayHeaven() {
    headerTitle.classList.remove('noneBlock');
    headerTitle.innerText = 'Server Thiên Đường';

    loadtTitle.classList.remove('block');

    load.classList.remove('block');

    backround.classList.remove('noneBlock');

    backround.classList.add('noneBlock');
    backround2.classList.remove('noneBlock');

    backround2.classList.remove('noneBlock');

    login.classList.remove('noneBlock');
}
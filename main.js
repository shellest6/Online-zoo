const burger = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.navigation');

console.log(1);
console.log(burger);


burger.addEventListener('click', function() {
    navigation.classList.toggle('mobile');
    // openBurger.classList.toggle('transformation');
    burger.classList.toggle('open');
    // overlay.classList.toggle('shadow');
})
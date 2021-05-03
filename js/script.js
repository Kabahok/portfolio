const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuItem1 = document.querySelector('.menu__link-item_1'),
      menuItem2 = document.querySelector('.menu__link-item_2'),
      menuItem3 = document.querySelector('.menu__link-item_3'),
      menuItem4 = document.querySelector('.menu__link-item_4'),
      menuItem5 = document.querySelector('.menu__link-item_5'),
      menuItem6 = document.querySelector('.menu__link-item_6')


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

menuItem1.addEventListener('click', () =>{
    menu.classList.remove('active')
});
menuItem2.addEventListener('click', () =>{
    menu.classList.remove('active')
});
menuItem3.addEventListener('click', () =>{
    menu.classList.remove('active')
});
menuItem4.addEventListener('click', () =>{
    menu.classList.remove('active')
});
menuItem5.addEventListener('click', () =>{
    menu.classList.remove('active')
});
menuItem6.addEventListener('click', () =>{
    menu.classList.remove('active')
});
      
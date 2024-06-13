//https://www.youtube.com/watch?v=ZOa2k0jySh8&list=PLVTUJUbFu7UeD0HL7zOgkoe7fu_n0chaA&index=8
/*const menuBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.close');
const menuNav = document.querySelector('.header-nav-desctop');//mobile
//const bg = document.querySelector('body');*/

//smoothScroll.init();отношение к появлению блока не имеет

//Добавление 4 -го юла при нажатии на три точки, код из чата. Расширение nav
const menuBtn = document.querySelector('.burger');
const listOpen = document.querySelector('.nav-desctop-list-four');
//Для появления меню в моб версии
const menuNavMob = document.querySelector('.header-nav-mobile');
const menuClose = document.querySelector('.close');
const menuNav = document.querySelector('.header-nav-desctop');/*этот я прописал
, когда думал обойтись без header-nav-mobile*/
//const bg = document.querySelector('body');

//ОСНОВНОЙ РАБОЧИЙ Расширение nav-desctop
let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  if(isOpen) {
    listOpen.classList.toggle('nav-desctop-list-four-open');//можно toggle вместо add 
    listOpen.style.display = 'flex'; 

    listOpen.classList.add('animate__animated', 'animate__fadeIn');

    menuNav.classList.add('animate__animated', 'animate__expand'); 
    menuNav.style.transform = 'scaleX(1)';//0 при нуле нав исчезает
  } else {  
    listOpen.classList.remove('nav-desctop-list-four-open');
    listOpen.style.display = 'none';

    listOpen.classList.remove('animate__animated', 'animate__fadeIn');

    menuNav.classList.remove('animate__animated', 'animate__expand');
    menuNav.style.transform = 'scaleX(1)';
    //menuNav.classList.add('animate__animated', 'animate__close');// пока не але
    //menuNav.style.transform = 'scaleX(0)';//0 при нуле плавно открывается только 4 блок
  }
  //alert('hi')
});

//Появление и исчезновение header-nav-mobile
menuBtn.addEventListener('click', () => {
  menuNavMob.style.opacity = '1';//в примере был трансформ, я сделал опазити '1'
  //bg.style.backgroundColor = '#00000099';
});

menuClose.addEventListener('click', () => {
 menuNavMob.style.opacity = '0';//в примере был трансформ, я сделал опазити '0'
  //bg.style.backgroundColor = '#E0E0E0';    mousemove
});
//https://www.youtube.com/watch?v=chJQofBSx94 ГАМБУРГЕР. МЕНЮ, 
//СПРЯТАННОЕ ПОД ПЛАШКОЙ ФРИЛАНСЕР ПО ЖИЗНИ

/////////////////////////////////////////////////////
//ДОБАВИТЬ ЭЛЕМЕНТ В НУЖНЫЙ БЛОК НЕ УДАЛЯЯ ЕГО С ПРЕЖНЕГО МЕСТА
// Найти элементы
const addTo = document.querySelector('.addTo');  
const itemUnderBlock2 = document.querySelector('.item-under-block-2');

// Склонировать block-2
const clonedBlock = addTo.cloneNode(true); 

// Добавить клон в item-under-block-2
itemUnderBlock2.appendChild(clonedBlock);
/*В бэйз сцсс на медиа 2.560пх прописал дисплей нон blocк-2 addTo. 
Посавил его в середину блока изменив ордер элементам. Больше описано в бэйз.сцсс*/
///////////////////////////////////////////////

/*//Перестановка элементов, пока не работает
const parent = document.querySelector('.item-under-block-2');

const block2 = parent.querySelector('.block-2');
const block2AddTo = parent.querySelector('.block-2.addTo');

parent.insertBefore(block2AddTo, block2); 
*/
////////////////////////////////////////////////////////

/*УБРАТЬ ЭЛЕМЕНТ С ПОЛЯ ЗРЕНИЯ НА ВО ВСЁМ ПРОЕКТЕ
const element = document.querySelector('.block-2.addTo');
element.style.display = 'none';
*/

/*// Найти элементы ДОБАВИТЬ ЭЛЕМЕНТ В НУЖНЫЙ БЛОК, 
//НО ДОБАВЛЯЕМЫЙ ЭЛЕМЕНТ ПЕРЕХОДИТ СО СВОЕГО ПРЕЖНЕГО МЕСТА ВО ВСЁМ ПРОЕКТЕ
const addTo = document.querySelector('.addTo');
const itemUnderBlock2 = document.querySelector('.item-under-block-2');

// Добавить block-2 в item-under-block-2
itemUnderBlock2.appendChild(addTo);

//ДОБАВИТЬ ЭЛЕМЕНТ В НАЧАЛО БЛОКА
itemUnderBlock2.insertBefore(block2, itemUnderBlock2.firstChild); 
*/

//ОБРЕЗАТЬ ФОТО
/*
const img = document.querySelector('.img-3');
img.classList.add('cropped');
*/

//VARIANT 2 КАК В ЮТЮБЕ пока не работает//https://www.youtube.com/watch?v=ZOa2k0jySh8&list=PLVTUJUbFu7UeD0HL7zOgkoe7fu_n0chaA&index=8
/*menuBtn.addEventListener('click', () => {
  menuNavMob.classList.toggle('.mob--open');//--open это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт и в css тоже нужно сделать запись, у меня сделана в медиазапросе 768, но отключена
 //menuNav.style.transform = 'translateY(-100%)'; //это нужно писать в цсс
 //listOpen.style.display = 'flex';
 alert('hi');
});

menuClose.addEventListener('click', () => {
   menuNavMob.classList.remove('.mob--open');//--open это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт 
 //menuNav.style.transform = 'translateY(0%)'; //это нужно писать в цсс
  //listOpen.style.display = 'none';
 alert('hello');
});*/


/*ЭТО КОД ЧАТА НА МНОГОКРАТНОЕ НАЖАТИЕ ОДНОЙ КНОПКИ. НЕ РАБОТАЕТ
async function init() {

    const burgerBtn = document.querySelector('.burger');
    const navDesktop = await waitForElement('.header-nav-desktop');
    const navDesktopFull = document.querySelector('.header-nav-desktop-full');
    const navMobile = document.querySelector('.header-nav-mobile');
  
    let isOpen = false;
  
    burgerBtn.addEventListener('click', toggleMenu);
  
    async function toggleMenu() {
  
      if(window.innerWidth < 768) {
        toggleMobileMenu();
      } else {
        toggleDesktopMenu();
      }
  
    }
  
    async function toggleDesktopMenu() {
  
      if(!navDesktop) return;
  
      if(!isOpen) {
        navDesktop.style.display = 'none';  
        navDesktopFull.style.display = 'block';
      } else {
        navDesktop.style.display = 'block';
        navDesktopFull.style.display = 'none';
      }
  
      isOpen = !isOpen;
  
    }
  
    function toggleMobileMenu() {
      navMobile.classList.toggle('open'); 
    }
  
  }
  
  document.addEventListener("DOMContentLoaded", init);
  
  async function waitForElement(selector) {
    return new Promise(resolve => {
        let element = document.querySelector(selector);
        if(element) {
          resolve(element);
        } else {
          const observer = new MutationObserver(mutations => {
            if(document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
            }  
          });
      
          observer.observe(document, {
            subtree: true,
            childList: true
          });
        }
      });
    }
    */
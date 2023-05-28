const menu = document.querySelector('.menu-bar');

function showMenu() {
   menu.classList.add('menu-visible');
   menu.classList.remove('menu-hidden');
   
   document.body.classList.add('open-menu');
}

function hideMenu() {
   menu.classList.add('menu-hidden');

   document.body.classList.remove('open-menu');
}
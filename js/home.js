// Menu Bar : Functionality //

const sidebar = document.querySelector('.sidebar');

function showSidebar() {
   sidebar.classList.add('showSide');
}

function hideSidebar() {
   sidebar.classList.remove('showSide');
}

// About : Functionality //

const about = document.querySelector('.about');
var aboutVisible = false;

function aboutSelector() {
   if (aboutVisible == false) {
      about.classList.add('about-visible');
      aboutVisible = true;
   } else {
      about.classList.remove('about-visible');
      aboutVisible = false;
   }
}

// Footer : Basically a href, but on javascript //

document.querySelector('.info1').addEventListener('click', function(e) {
   window.location.href = 'https://www.facebook.com/rhspasigcity?_rdc=1&_rdr';
}, false);

document.querySelector('.info2').addEventListener('click', function(e) {
   window.location.href = 'https://twitter.com/rhsshs2018';
}, false);

document.querySelector('.info3').addEventListener('click', function(e) {
   window.location.href = 'https://www.instagram.com/rhsshs2018/?hl=en';
}, false);
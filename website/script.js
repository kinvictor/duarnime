
const navbar = document.querySelector('.master-nav');
const nav = document.querySelectorAll('.nav');
const navmenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('scrolling', window.scrollY > 200);
    for(let i = 0; i < nav.length; i++) {
        nav[i].classList.toggle('scrolling-text', window.scrollY > 200);
    }
})


const hamBtn = document.querySelector('.ham-btn');
hamBtn.addEventListener('click', function() {
    navmenu.classList.toggle('dor');
})



const accBtns = document.querySelectorAll('.acc-btn');
accBtns.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('acc-active');
    
    let content = this.nextElementSibling;    
    if (content.style.maxHeight) {
      // if the accordion is open
      content.style.maxHeight = null;    
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + 'px';
    }  
  });
});


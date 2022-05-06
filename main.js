var hgnav = document.getElementById('hgnav');
var hg = document.getElementById('hg');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
hg.addEventListener('click', function (){
  if (hgnav.className === 'hgnavi') {
    hgnav.classList.toggle('hg_open');
  }else{hgnav.classList.toggle('hg_open');
  } 
  if (line1.className === 'inner_line') {
  line1.classList.toggle('inner_line_1');
  }else{line1.classList.toggle('inner_line_1');            
  }
  if (line2.className === 'inner_line') {
  line2.classList.toggle('inner_line_2');
  }else{line2.classList.toggle('inner_line_2');            
  }
  if (line3.className === 'inner_line') {
  line3.classList.toggle('inner_line_3');
  }else{line3.classList.toggle('inner_line_3');            
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3.5,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
      1500: {
        slidesPerView: 3.5,
      },
      1000: {
        slidesPerView: 2.5,
      },
      500: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      }
});

const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < jsSmoothScroll.length; i++){
  jsSmoothScroll[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = jsSmoothScroll[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = rect + offset;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  });
}

const topscroll = document.querySelector('#top_scroll');
topscroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function hamburger() {
  document.getElementById('hgnav').classList.toggle('hg_open');
  ;
  document.getElementById('line1').classList.toggle('inner_line_1');
  document.getElementById('line2').classList.toggle('inner_line_2');
  document.getElementById('line3').classList.toggle('inner_line_3');
}

var allclose = document.getElementsByClassName('all-close');
for (var i = 0; i < allclose.length; i++) {
  allclose[i].addEventListener('click', function () {
    hamburger();
    });
  }
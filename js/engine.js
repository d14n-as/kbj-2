

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $('body').toggleClass("overflowhidden");
  $("#nav__overlay").toggleClass("open");
});


var swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  direction: 'horizontal',
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});


var swiper = new Swiper('.swiper-testimoni', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  direction: 'horizontal',
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});


var swiper = new Swiper('.swiper-client', {
  slidesPerView: 7,
  spaceBetween: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  direction: 'horizontal',
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 5,
    },
  }
});

$(window).ready(function () {
  ityped.init(document.querySelector('.ityped'), {
    strings: ["Desain yang Beragam: Tim desain kami siap membantu mewujudkan visi Anda menjadi desain yang menarik dan sesuai dengan identitas merek Anda.", "Kualitas Terbaik: Kami menggunakan bahan kaos berkualitas tinggi dan teknologi sablon canggih untuk memastikan hasil akhir yang tahan lama dan nyaman dipakai.", "Pengalaman dan Kepercayaan: Ribuan pelanggan puas telah memilih layanan sablon kaos custom kami untuk kebutuhan mereka."],
    loop: true,
  });
})


$('#trigger-modal').click(function () {
  $('#closet').css('z-index', '9999');
  $('.swiper-home').css('z-index', '-1');
  $('#modal').show();
  $('body').addClass('overflow-hidden');
  $('header').addClass('z-index-0');
});

$('#closet').click(function () {
  $('#modal').hide();
  $('body').removeClass('overflow-hidden');
  $('header').removeClass('z-index-0');
  $('.swiper-home').css('z-index', '0');
});


gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.animx-area').forEach(section => {
  const elems = section.querySelectorAll('.animx-item');
  gsap.set(elems, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    overwrite: 'auto',
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 50%',
    end: '+=900',
    onEnter: () => gsap.to(elems, {
      y: 0,
      opacity: 1,
      stagger: 0.5,
    })
  });
});


gsap.to(".play1", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section-1",
    scrub: true
  },
});


gsap.to(".play2", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section-2",
    scrub: true
  },
});


var btnToTop = $('.backtotop');
var waBtn = $('.wa-mob');

$(window).scroll(function () {
  if ($(window).scrollTop() > 700) {
    btnToTop.addClass('show');
    waBtn.addClass('show');
  } else {
    btnToTop.removeClass('show');
    waBtn.removeClass('show');
  }
});

btnToTop.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});



function scrollWin() {
  window.scrollBy(0, 700);
}

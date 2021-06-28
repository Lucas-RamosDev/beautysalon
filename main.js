/* --- ABRE E FECHA O MENU QUANDO CLICAR NO ICONE --- */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    
    // se tiver a classe 'show' ele tira, se não tiver ele coloca a class 'show'.
    nav.classList.toggle('show')
  
  })
}

/* --- QUANDO CLICAR EM ALGUM ITEM DO MENU ESCONDER O MENU --- */

const links = document.querySelectorAll('nav ul li a')

for( const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* --- MUDAR O READER DA PAGINA QUNADO DER SCROLL --- */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

  window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // scroll é menor que a altura do header
      header.classList.remove('scroll')
    }
  })
}



/* --- Testimonials - carousel slider swiper (aula 03 - 35min) --- */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, /* qts slides posso ver */
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,

  /* -- faz com que apareça 2 slides por seção, qd atingir siza grande -- */
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    }
  }
});

/* SCROLLREVEAL -> Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `  
  , { interval: 100 }
)


/* --- BOTÃO VOLTAR PARA O TOPO --- */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })

}

/* --- MENU ATIVO QUANDO SELECIONADO --- */
/* quando clicar ou rolar (scrow) no menu que deseja o mesmo ficar ativo */

const sections = document.querySelectorAll('main section[id]')// seleciona todas as tags section que contenham "ID" -> "section[id]"
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}


/* --- When Scroll --- */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");

const saudacao = 'document.querySelector("#saudacao");'
console.log(saudacao);

const btnHtml = document.querySelector('#html')
const tecnologiaHtml = document.querySelector('#tecnologias-html')

const btnCss = document.querySelector('#css')
const tecnologiaCss = document.querySelector('#tecnologias-css')

const btnJs = document.querySelector('#js')
const tecnologiaJs = document.querySelector('#tecnologias-js')

const btnReact = document.querySelector('#react')
const tecnologiaReact = document.querySelector('#tecnologias-react')


hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

link1.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

link2.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

link3.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

link4.addEventListener("click", () =>{
   nav.classList.toggle("active");
})





btnHtml.addEventListener('click', () =>{
    if (tecnologiaHtml.style.display == 'none') {
        tecnologiaHtml.style.display = 'block'
    } else {
        tecnologiaHtml.style.display = 'none'
    }
})

btnCss.addEventListener('click', () =>{
    if (tecnologiaCss.style.display == 'none') {
        tecnologiaCss.style.display = 'block'
    } else {
        tecnologiaCss.style.display = 'none'
    }
})

btnJs.addEventListener('click', () =>{
    if (tecnologiaJs.style.display == 'none') {
        tecnologiaJs.style.display = 'block'
    } else {
        tecnologiaJs.style.display = 'none'
    }
})

btnReact.addEventListener('click', () =>{
    if (tecnologiaReact.style.display == 'none') {
        tecnologiaReact.style.display = 'block'
    } else {
        tecnologiaReact.style.display = 'none'
    }
})


//MY OBSERVER
//const myObserver = new IntersectionObserver ((entries) =>{
//    entries.forEach((entry) =>{
//        if(entry.isIntersecting === true){
//            entry.target.classList.add('show')
//        } else{
//            entry.target.classList.remove('show')
//        }
//    })
//});

//const elements = document.querySelectorAll('.hidden')

//elements.forEach((element) => myObserver.observe(element))
//FIM MY OBSERVER

//DATA ANIME PARA MAIS ELEMENTOS//
const item = document.querySelectorAll('[data-anime');
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    // console.log(windowTop)

    item.forEach(element => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll()
})
//FIM DATA ANIME PARA MAIS ELEMENTOS//
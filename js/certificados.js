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
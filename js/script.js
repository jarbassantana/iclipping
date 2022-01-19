function menuFixed() {
    window.addEventListener('scroll', handleMenu)
    function handleMenu() {
        const headerMenu = document.getElementById('header')
        if (headerMenu && window.scrollY >= 200) {
            headerMenu.classList.add('menu-fixed')
        } else {
            headerMenu.classList.remove('menu-fixed')
        }
    }
}
menuFixed()

function scrollMenu() {
    const menuLinks = document.querySelectorAll('.menu-container a[href^="#"]')
    const scrollBtn = document.querySelector('.scroll-bottom a[href^="#"]')
    if (menuLinks) {
        menuLinks.forEach(link => {
            link.addEventListener('click', handleClick)
        })
    }

    if (scrollBtn) {
        scrollBtn.addEventListener('click', handleClick)
    }
}

function handleClick(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    console.log('fui clicado')
    // forma alternativa
    const topo = section.offsetTop
    window.scrollTo({
        top: topo - 100,
        behavior: 'smooth'
    })
}

scrollMenu()

// menu mobile

function menuMobile() {
    const menuMobile = document.getElementById('btn-mobile-js')
    const overlayMenu = document.querySelector('.js-overlay')
    menuMobile.addEventListener('click', handleMenu)
    overlayMenu.addEventListener('click', handleMenu)
}

function handleMenu(event) {
    document.documentElement.classList.toggle('menu-opened')
    console.log('fui clicado')
}

menuMobile()

const myAddressesArray = [
    './img/background1.jpg',
    './img/background2.jpg',
    './img/background3.jpg',
    './img/background4.jpg',
    './img/bg-clipping-strategic.jpg'
]

const randomBgAddress =
    myAddressesArray[Math.floor(Math.random() * myAddressesArray.length)]

function randomImage() {
    const heroSection = document.getElementById('home')
    if (heroSection) {
        for (let index = 0; index < myAddressesArray.length; index++) {
            heroSection.style.backgroundImage = 'url(' + randomBgAddress + ')'
        }
    }
}
randomImage()

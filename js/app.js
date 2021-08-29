const btn = document.getElementById('toggle-menu')
const mobileNav = document.querySelector('.header-nav')
const body = document.querySelector('body')
const menu = document.getElementById('menu-list')
const menuEls = menu.querySelectorAll('li')
console.log(menuEls)
btn.addEventListener('click', () => {
    mobileNav.classList.toggle('active')

    mobileNav.classList.contains('active') ? btn.classList = 'fas fa-times' : btn.classList = 'fas fa-bars'
})
const hideMenu = () => {
    mobileNav.classList.remove('active')
    btn.classList = 'fas fa-bars'

}

menuEls.forEach(list => {
    list.addEventListener('click', hideMenu)
});


// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     mobileNav.classList.remove('active')
//     btn.classList = 'fas fa-bars'
// })


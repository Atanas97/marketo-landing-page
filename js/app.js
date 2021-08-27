const btn = document.getElementById('toggle-menu')
const mobileNav = document.querySelector('.header-nav')
const body = document.querySelector('body')
console.log(body)
btn.addEventListener('click', () => {
    mobileNav.classList.toggle('active')

    mobileNav.classList.contains('active') ? btn.classList = 'fas fa-times' : btn.classList = 'fas fa-bars'
})

// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     mobileNav.classList.remove('active')
//     btn.classList = 'fas fa-bars'
// })
const primaryNav = document.querySelector('.primary-nav__list')
const navToggle = document.querySelector('.mobile-nav-toggle')
const overlay = document.querySelector('.overlay')

navToggle.addEventListener('click', () => {
  const isOpened = primaryNav.dataset.open === 'true' ? true : false

  if (!isOpened) {
    openNav()
  } else {
    closeNav()
  }
})

document.addEventListener('click', (e) => {
  if (e.target.matches('.overlay')) closeNav()
})

function openNav() {
  primaryNav.setAttribute('data-open', true)
  navToggle.setAttribute('aria-expanded', true)
  primaryNav.parentElement.classList.add('overlay')
}

function closeNav() {
  primaryNav.setAttribute('data-open', false)
  navToggle.setAttribute('aria-expanded', false)
  primaryNav.parentElement.classList.remove('overlay')
}

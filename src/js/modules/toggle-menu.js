const menuInit = () => {
    const toggleMenu = document.querySelector('.toggle-menu')

    if (!toggleMenu) return

    const menu = document.querySelector('.navigation__menu')
    const navigationSocial = document.querySelector('.navigation__social')
    const navigationPics = document.querySelector('.navigation__pics')
    const requisites = document.querySelector('.requisites')
    const politics = document.querySelector('.politics')
    const phoneTime = document.querySelector('.phone-time')

    const handleToggleMenu = () => {
        toggleMenu.classList.toggle('toggle-menu_active')
        menu.classList.toggle('menu_active')
        navigationSocial.classList.toggle('navigation__social_active')
        navigationPics.classList.toggle('navigation__pics_active')
        requisites.classList.toggle('requisites_active')
        politics.classList.toggle('politics_active')
        phoneTime.classList.toggle('phone-time_active')
    }

    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit
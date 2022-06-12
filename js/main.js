// Declare Variables
const dropdowns = document.querySelectorAll('.dropdown')
const navbarButton = document.querySelector('[navbar-button]')

// DropDowns
dropdowns.forEach(dropdown => {
    dropdown.children[0].addEventListener('click' , e => {
        let status = e.target.parentElement.hasAttribute('dropdown-open')
        dropdowns.forEach(_ => _.removeAttribute('dropdown-open'))
        if (!status) dropdown.toggleAttribute('dropdown-open')
    })
})

navbarButton.addEventListener('click' , () => {
    document.querySelector('.navbar-secondry .container-fluid').toggleAttribute('navbar-open');
})

// Body Event Click
document.body.addEventListener('click' , e => {
    if (e.target.matches('[dropdown-button]')) return;

    dropdowns.forEach(dropdown => {
        dropdown.removeAttribute('dropdown-open')
    })
})
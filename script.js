const burgerMenuIcon = document.querySelector('header nav button img')
const navUl = document.querySelector('header nav ul')

burgerMenuIcon.addEventListener('click', () => {
    if([...navUl.classList].includes('dropped')){
        navUl.classList.remove('dropped')
    }else{
        navUl.classList.add('dropped')
    }
})

document.addEventListener('click', e => {
    if(e.target != navUl && e.target != burgerMenuIcon && [...navUl.classList].includes('dropped')){

        navUl.classList.remove('dropped')
    }
    
})



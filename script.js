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


// JavaScript to handle touch events and simulate hover
const hoverables = document.querySelectorAll('.hoverable');

hoverables.forEach(item => {
    item.addEventListener('touchstart', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('touchend', function () {
        setInterval(() => {
            item.classList.remove('hovering');
        }, 1);
    });
    
    item.addEventListener('touchcancel', function () {
        setInterval(() => {
            item.classList.remove('hovering');
        }, 1);
    });

    item.addEventListener('mouseover', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('mouseenter', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('mouseleave', function () {
        item.classList.remove('hovering');
    });

});


//EAANsG1BpdpABO2ukAeEB8WS5x7ann8aGw0VbcYgoPyTHKHDmTs7RrGHCxeHQWdjMzAQJyQm5UGgzEhBZB8wonjKb9Vq0A7XOlQUezE9hKZA5OyG2fBeSyLMeSGYBDRAQYnBZCHA2tFrNZAJIpQZAggKixSFLEYIisZA7EdQBcCCEFevVZAsZBMHD6SulUamhsdZAl
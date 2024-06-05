//animation script
        let heroTl = gsap.timeline()
        heroTl.from('header', {opacity: 0, y: "-100%", duration: 1}, 0.5)
        heroTl.from('#hero .text', { y: "30%", duration: 1}, 0)
        heroTl.from('#hero .wrapper .wrapper:first-of-type .big span', {
            textContent: 0,
            duration: 2,
            ease: Power1.easeIn,
            snap: { textContent: 1 }
        }, 0)
        heroTl.from('#hero .wrapper .wrapper:last-of-type .big span', {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 }
        }, 0)
        heroTl.from("#hero .wrapper img", {transform: "translateY(100%)", duration: 0.75}, 0.75)

        if(window.innerWidth/window.innerHeight > 1.3){
            // services section
            let servicesTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            servicesTL.from('#services div img', {scale: 0.7, duration: 0.5}, 0)
            servicesTL.from('#services .text-wrapper', {y: "30%", duration: 0.5}, 0.25)

            //about section - story
            let aboutTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            aboutTL.from('#about .story img', {x: "-50%", duration: 0.5}, 0)
            aboutTL.from('#about .story .text', {x: "50%", duration: 0.5}, 0)

            //about section - experience
            let experienceTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about .experience .wrapper',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })

            experienceTL.from('#about .experience .wrapper:first-of-type svg', {scale: 0.5, duration: 0.5}, 0)
            experienceTL.from('#about .experience .wrapper.helped .num span', {
                textContent: 0,
                duration: 1,
                ease: Power1.easeIn,
                snap: { textContent: 1 },
                stagger: 1,
            }, 0)
            experienceTL.from('#about .experience .wrapper.years .num span', {
                textContent: 0,
                duration: 0.75,
                ease: Power1.easeIn,
                snap: { textContent: 1 },
                stagger: 1,
            }, 0)


            //have a questions section
            let questionTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#get-answers',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            questionTL.from('#get-answers .container > div:first-of-type', {x: "-50%", duration: 0.5}, 0)
            questionTL.from('#get-answers .container > div:last-of-type ', {x: "50%", duration: 0.5}, 0)


        } else {

            let services1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            services1TL.from('#services .online-therapy img', {scale: 0.7, duration: 0.5}, 0)
            services1TL.from('#services .online-therapy .text-wrapper', {y: "30%", duration: 0.5}, 0.25)

            let services2TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#services .clinical-therapy',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            services2TL.from('#services .clinical-therapy img', {scale: 0.7, duration: 0.5}, 0)
            services2TL.from('#services .clinical-therapy .text-wrapper', {y: "30%", duration: 0.5}, 0.25)

            //about section
            let about1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            about1TL.from('#about .story img', {x: "-50% ", duration: 0.5}, 0)
            let about2TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about .story .text',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            about2TL.from('#about .story .text', {x: "50%", duration: 0.5})


            //about section - experience
            let experience1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about .experience .wrapper',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            experience1TL.from('#about .experience .wrapper:first-of-type svg', {scale: 0.5, duration: 0.5}, 0)
            let experience2TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about .experience .wrapper.helped',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            experience2TL.from('#about .experience .wrapper.helped .num span', {
                textContent: 0,
                duration: 1,
                ease: Power1.easeIn,
                snap: { textContent: 1 },
                stagger: 1,
            }, 0)
            let experience3TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about .experience .wrapper.years',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            experience3TL.from('#about .experience .wrapper.years .num span', {
                textContent: 0,
                duration: 0.75,
                ease: Power1.easeIn,
                snap: { textContent: 1 },
                stagger: 1,
            }, 0)

            //about section
            let question1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#get-answers',
                    start: 'top 70%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            question1TL.from('#get-answers .container > div:first-of-type', {x: "-50% ", duration: 0.5}, 0)
            let question2TL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#get-answers .container > div:last-of-type',
                    start: 'top 90%',
                    end: 'bottom center',
                    scrub: false,
                    // markers: true
                }
            })
            question2TL.from('#get-answers .container > div:last-of-type', {x: "50%", duration: 0.5})
        }


        let whatIDoTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#about .what-i-do',
                start: 'top 90%',
                end: 'bottom center',
                scrub: false,
                // markers: true
            }
        })
        whatIDoTL.from('#about .what-i-do h4', {x: '-5%', duration: 0.5}, 0)
        whatIDoTL.from('#about .what-i-do p', {x: '-10%', duration: 0.75}, 0.1)
    
// back to top button
    
let backToTopBtn = document.getElementById("back-to-top");

//show hide button on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
backToTopBtn.classList.remove('hide')
} else {
backToTopBtn.classList.add('hide')
}
}
//back to top on click
backToTopBtn.onclick = function topFunction() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}
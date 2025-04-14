function locomotiveAnimation() { 
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#container"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation()

function loadingAnimation() {
    gsap.from("#page-name-text div", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
    })
    gsap.from("#page-name-text h1", {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 0.8,
        stagger: 0.3
    })
}
loadingAnimation()

function menuDisappear() {
    gsap.to("#menuBar a", {
        transform: "translateX(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page-name-text",
            scroller: "#container",
            start: "top 0",
            end: "top -15%",
            scrub: true
        }
    })
}
menuDisappear()


function geckoTextAnimation() {
    gsap.from("#gecko-info-text", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scale: 2,
        scrollTrigger: {
            trigger: "#whale-info-text",
            scroller: "#container",
            start: "bottom 75%",
            // scrub: true
        }
    })
}
geckoTextAnimation()

function newsAnimation() {
    var swiper = new Swiper(".mySwiper", {
        freeMode: true,
        allowTouchMove: true,
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 0 ,
            disableOnInteraction: false ,
            // waitForTransition: false,
        },
        speed: 3000,
    });
}
newsAnimation()

function newsTextAnimation() {
    gsap.from("#current-news", {
        transform: "translateX(-100%)",
        duration:1,
        stagger:0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#gecko-info-text",
            scroller: "#container",
            start: "top 10%",
            // scrub: true
        }
    })
}
newsTextAnimation()

window.onload = function () {
    var swiper = new Swiper(".slider-container1 .swiper", {
        loop: true,
        intitialSlide: 2,
        grabCursor: true,
        centeredSlides: true,
        speed: 1100,
        spaceBetween: 70,
        slidesPerView: "auto",
        pagination: {
            el: ".slider-container1 .swiper-pagination",
            dynamicBullets: true,
        },
        mousewheel: {
            thresholdDelta: 70,
        },
        effect: "coverflow",
        coverFlowEffect: {
            rotate: 45,
            stretch: 50,
            depth: 20,
            modifier: 1,
            slideShadows: false,
            useTransform: true,
        },
    });
};

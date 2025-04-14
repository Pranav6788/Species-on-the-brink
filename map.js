const {innerHeight} = window;
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

function menuDisappear() {
    gsap.to("#menuBar a", {
        transform: "translateX(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#history-intro-page-1",
            scroller: "#container",
            start: "top 0",
            end: "top -15%",
            scrub: true
        }
    })
}
menuDisappear()

function historyAnimation1() {
    gsap.to('#history-intro-page-1 h1', {
        scale:100,
        opacity: 0,
        stager: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger:"#history-intro-page-1",
            pin:true,
            scroller: "#container",
            // end: `+=${innerHeight*1.3}`,
            end: innerHeight,
            scrub: true
        }
    });
}
historyAnimation1()

function historyAnimation2() {
    gsap.from('#history-intro-page-2 h1', {
        transform: "translateX(-100%)",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger:"#history-intro-page-2",
            pin:true,
            scroller: "#container",
            // end: `+=${innerHeight*1.3}`,
            scrub: true
        }
    });
}
historyAnimation2()

function historyAnimation3() {
    gsap.from('#history-intro-page-3-copy h1', {
        transform: "translateY(-100%)",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger:"#history-intro-page-3",
            pin:true,
            scroller: "#container",
            // end: `+=${innerHeight*1.3}`,
            scrub: true
        }
    });
}
historyAnimation3()

function historyAnimation4() {
    gsap.from('#history-intro-page-4 h1', {
        rotation: 180,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger:"#history-intro-page-4",
            scroller: "#container",
            pin:true,
            // end: `+=${innerHeight*1.3}`,
            scrub: true
        }
    });
}
historyAnimation4()
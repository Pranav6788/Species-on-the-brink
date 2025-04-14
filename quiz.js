function locomotiveAnimation() { 
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#quiz-container"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#quiz-container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#quiz-container").style.transform ? "transform" : "fixed"
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
            trigger: "#quiz-container",
            scroller: "#quiz-container",
            start: "top 0%",
            end: "top -15%",
            scrub: true
        }
    })
}
menuDisappear()


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-questions');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.classList.add('submit-button');
    form.appendChild(submitButton);

    function calculateResults() {
        const answers = {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        };

        const questions = document.querySelectorAll('.quiz-question');
        questions.forEach((question, index) => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                answers[selectedOption.value]++;
            }
        });
        const maxAnswer = Math.max(answers.a, answers.b, answers.c, answers.d);

        let result = '';

        if (maxAnswer === answers.a) {
            result = 'The Mammoth';
        } else if (maxAnswer === answers.b) {
            result = 'The Saber-Toothed Tiger';
        } else if (maxAnswer === answers.c) {
            result = 'The Dodo';
        } else if (maxAnswer === answers.d) {
            result = 'The Woolly Rhinoceros';
        }

        displayResult(result);
    }

    function displayResult(species) {
        const descriptions = {
            "The Mammoth": "You’re calm, thoughtful, and wise beyond your years. Just like the mighty mammoth, you approach life with patience and strategy. You're someone others look to for guidance, and you value deep reflection and meaningful connection.",
            "The Saber-Toothed Tiger": "You're bold, fearless, and never back down from a challenge. Much like the saber-toothed tiger, your energy is magnetic and your passion infectious. You dive headfirst into adventures and lead with confidence.",
            "The Dodo": "You’re adaptable, observant, and a little mysterious. Like the dodo, you blend in with your environment, bringing a quiet strength and quirky charm. You may be underestimated, but you're always a step ahead.",
            "The Woolly Rhinoceros": "You’re strong, loyal, and community-driven. The woolly rhino represents your dedication to teamwork and protection. You face life head-on, always looking out for those you care about."
        };
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result');
        resultContainer.innerHTML = `<h2 class="display-res-h2">Your Extinct Species: ${species}</h2>
        <p class="text-xl mb-4">${descriptions[species]}</p>
        <a class="text-md text-gray-600" href="map.html">Want to learn more about extinct animals? Head back to our Explore or Blog sections!</a>`;
    
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = '';
        quizContainer.appendChild(resultContainer);
    
        if (window.locoScroll) {
            window.locoScroll.update();
        }
        ScrollTrigger.refresh();
    }
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        calculateResults();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const texts = [
        "Our website offers a variety of educational games designed to make learning fun and interactive. Here are some of the advantages:",
        "Our games promote creativity and problem-solving skills through engaging activities.",
        "Safe and child-friendly environment with content designed to develop critical thinking skills."
    ];

    // New point lists for each slide
    const points = [
        [
            "Engaging and interactive content",
            "Develops critical thinking skills",
            "Encourages creativity and problem-solving",
            "Safe and child-friendly environment"
        ],
        [
            "Creative learning games",
            "Interactive story-telling",
            "Fun quizzes to test knowledge",
            "Colorful animations and characters"
        ],
        [
            "Designed by education experts",
            "Aligned with curriculum standards",
            "Supports learning at different levels",
            "Promotes independent learning"
        ]
    ];

    const textElement = document.querySelector('.carousel-text');
    const pointsElement = document.getElementById('carousel-points');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        textElement.textContent = texts[index];  // Update text

        // Clear existing points
        pointsElement.innerHTML = "";

        // Add new points
        points[index].forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            pointsElement.appendChild(li);
        });
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);  // Initialize first slide
});

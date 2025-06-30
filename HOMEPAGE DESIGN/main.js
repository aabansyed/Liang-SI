// slider code strts here
let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let autoSlideInterval;

        function showSlide(index) {
            // Remove active and prev classes from all slides
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i < index) {
                    slide.classList.add('prev');
                } else if (i === index) {
                    slide.classList.add('active');
                }
            });
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }
            
            showSlide(currentSlideIndex);
            resetAutoSlide();
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
            resetAutoSlide();
        }

        function autoSlide() {
            currentSlideIndex++;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            }
            showSlide(currentSlideIndex);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(autoSlide, 3000);
        }

        // Initialize auto-slide
        autoSlideInterval = setInterval(autoSlide, 3000);

        // Pause auto-slide on hover
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        slider.addEventListener('mouseleave', () => resetAutoSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Touch/swipe support
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const diff = startX - endX;
            const swipeThreshold = 50;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    changeSlide(1); // Swipe left - next slide
                } else {
                    changeSlide(-1); // Swipe right - previous slide
                }
            }
        }

        // slider code ends here
        
        // page 7 js starts here

        

    function closeDetails() {
      const readmoreView = document.getElementById('readmore-view');
      const mainView = document.getElementById('main-view');

      readmoreView.classList.remove('active');

      setTimeout(() => {
        readmoreView.style.display = 'none';
        mainView.style.display = 'flex';
      }, 500);
    }
    // end here
    
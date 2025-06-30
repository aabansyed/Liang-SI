
        
        // Live Clock Function
        function updateClock() {
            const now = new Date();
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            const day = days[now.getDay()];
            let hours = now.getHours();
            hours = hours % 12 || 12;
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            document.getElementById('liveClock').textContent = `${day}-${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

        }

        // Update clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);



        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');

        function toggleMobileMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }

        function closeMobileMenu() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Event Listeners
        hamburger.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
// footer.js
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// // email 

// function sendmail() {
//   let parms = {
//     subject: document.getElementById("subject").value,
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   }

//   emailjs.send("service_j232i4c", "template_x0cmtsi", parms).then(alert("Email Sent!!,you will be respond shorttly, ThankYou. "))
// }

function loadAndGo(url) {
  event.preventDefault(); // Stop navigation

  const loader = document.getElementById('loading-overlay');
  loader.style.display = 'flex';

  setTimeout(() => {
    window.location.href = url;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fade => {
    appearOnScroll.observe(fade);
  });
});
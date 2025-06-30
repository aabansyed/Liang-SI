  // Clock logic
        const hour = document.querySelector('.hour');
        const min = document.querySelector('.min');
        const dot = document.querySelector('.dot');

        let showDot = true;

        function updateClock() {
            const now = new Date();
            showDot = !showDot;
            dot.classList.toggle('invisible', showDot);
            let hr = now.getHours() % 12 || 12;
            hour.textContent = String(hr).padStart(2, '0');
            min.textContent = String(now.getMinutes()).padStart(2, '0');
        }

        setInterval(updateClock, 500);
        updateClock();

        // Hamburger toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

// Shared counter logic for both navbar and footer
  let visits = localStorage.getItem("visitCount");

  if (!visits) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }

  localStorage.setItem("visitCount", visits);

  // Update both counters
  const navCounter = document.getElementById("counter-display");
  const footerCounter = document.getElementById("counter");

  if (navCounter) {
    navCounter.textContent = "visitor: " + visits;
  }

  if (footerCounter) {
    footerCounter.textContent = visits;
  }
  


// footer.js
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('year').textContent = new Date().getFullYear();
      });






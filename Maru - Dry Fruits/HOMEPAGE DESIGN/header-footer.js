//   this is clock animation
    const hour = document.querySelector('.hour');
    const min = document.querySelector('.min');
    const dot = document.querySelector('.dot');
    const days = document.querySelectorAll('.week > div');

    let showDot = true;

    function updateClock() {
      const now = new Date();

      // Blinking colon
      showDot = !showDot;
      dot.classList.toggle('invisible', showDot);

      // 12-hour format
      let hr = now.getHours() % 12 || 12;
      hour.textContent = String(hr).padStart(2, '0');
      min.textContent = String(now.getMinutes()).padStart(2, '0');

      // Show only today, hide others
      days.forEach((d, i) => {
        if (i === now.getDay()) {
          d.classList.add('active');
          d.style.display = 'block';
        } else {
          d.classList.remove('active');
          d.style.display = 'none';
        }
      });
    }

    setInterval(updateClock, 500);
    updateClock();


// footer.js
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('year').textContent = new Date().getFullYear();
      });






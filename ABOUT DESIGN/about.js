function revealContent(block) {
  const text = block.querySelector('.about-text');
  if (text.classList.contains('hidden')) {
    text.classList.remove('hidden');
    setTimeout(() => text.classList.add('show'), 10);
  }
}

function fadeOut(img) {
  img.classList.add('fade-out');
}
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
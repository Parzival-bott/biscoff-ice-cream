document.addEventListener('DOMContentLoaded', () => {

  /* SLIDES */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  slides.forEach((slide, index) => {
    if (index !== 0) slide.classList.add('hidden');
  });

  function showSlide(newIndex) {
    if (newIndex < 0 || newIndex >= slides.length) return;

    slides[currentSlide].classList.add('hidden');
    currentSlide = newIndex;
    slides[currentSlide].classList.remove('hidden');

    // typing only on slide 1
    if (currentSlide === 1) startTyping();

    // confetti only on FINAL slide (index 3)
    if (currentSlide === 0 || currentSlide === 1 || currentSlide === 2 || currentSlide === 3) startConfetti();
    else stopConfetti();
  }

  /* NAVIGATION */
  document.getElementById('nextbtn')?.addEventListener('click', () => showSlide(1));
  document.getElementById('nextbtn2')?.addEventListener('click', () => showSlide(2));
  document.getElementById('nextbtn3')?.addEventListener('click', () => showSlide(3));

  document.getElementById('prevbtn')?.addEventListener('click', () => showSlide(0));
  document.getElementById('prevbtn2')?.addEventListener('click', () => showSlide(1));
  document.getElementById('prevbtn3')?.addEventListener('click', () => showSlide(2));

  /* MUSIC */
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;

  bgMusic.volume = 0.4;

  musicBtn?.addEventListener('click', () => {
    if (!isPlaying) {
      bgMusic.play();
      musicBtn.textContent = '⏸ Pause Music';
    } else {
      bgMusic.pause();
      musicBtn.textContent = '▶ Play Music';
    }
    isPlaying = !isPlaying;
  });

  /* TYPING EFFECT */
  const message =
    "You are kind, beautiful, strong, and everything I ever wished for. Life feels perfect with you by my side 💖";
  const typeText = document.getElementById('typeText');
  let charIndex = 0;
  let typingInterval;

  function startTyping() {
    clearInterval(typingInterval);
    typeText.textContent = '';
    charIndex = 0;

    typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        typeText.textContent += message.charAt(charIndex++);
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  }

  /* HEARTS */
  const heartsContainer = document.getElementById('hearts');

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (18 + Math.random() * 40) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);

  /* CONFETTI */
  const confettiContainer = document.getElementById('confetti');
  let confettiInterval = null;

  function startConfetti() {
    if (confettiInterval) return;

    confettiInterval = setInterval(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const colors = ['#ff6b6b', '#feca57', '#54a0ff', '#5f27cd'];
      c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      c.style.left = Math.random() * 100 + 'vw';
      c.style.animationDuration = (3 + Math.random() * 3) + 's';

      confettiContainer.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }, 200);
  }

  function stopConfetti() {
    clearInterval(confettiInterval);
    confettiInterval = null;
  }

});

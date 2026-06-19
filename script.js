
  // Nav scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

  // Mobile drawer
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    drawer.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', close_);
  function close_() {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }

  // Scroll reveal with stagger
  const io = new IntersectionObserver(entries => {
    let delay = 0;
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = delay + 's';
        e.target.classList.add('in');
        io.unobserve(e.target);
        delay += 0.1;
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
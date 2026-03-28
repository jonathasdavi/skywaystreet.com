/* ========================================
   28E: Last Stop - Pitch Deck Scripts
   ======================================== */

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const heroHeight = window.innerHeight;
  initFloatingGallery();

  // PRELOADER: espera o carregamento completo da página
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', function () {
    if (preloader) {
      preloader.classList.add('hidden');
      // opcional: remover do DOM depois da animação
      setTimeout(() => preloader.parentNode.removeChild(preloader), 800);
    }
  });




    // Show/hide navigation on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight * 0.5) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }

        // Animate sections on scroll
        animateSections();
    });

function initFloatingGallery() {
  const gallery = document.getElementById('floatingGallery');
  if (!gallery) return;

  const items = gallery.querySelectorAll('.gallery-item');
  const track = gallery.querySelector('.gallery-track');

  // --- AUTO‑SCROLL INFINITO DO CARROSSEL ---
  if (!track || !items.length) return;

  // Garante que a animação CSS não interfere
  track.style.animation = 'none';

  let translateX = 0;
  let lastTime = performance.now();
  const speed = 100; // px por segundo – aumenta/diminui pra acelerar/desacelerar
  let paused = false;

  // Pausar quando o utilizador passa o rato por cima da galeria
  gallery.addEventListener('mouseenter', () => { paused = true; });
  gallery.addEventListener('mouseleave', () => { paused = false; });

  function loop(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    if (!paused) {
      // anda para a esquerda
      translateX -= speed * dt;

      // como o track tem a sequência DUPLICADA,
      // metade da largura é o comprimento de 1 volta
      const halfWidth = track.scrollWidth / 2;

      // quando completar uma volta, “salta” meia largura para trás,
      // mantendo o padrão contínuo (sem tranco visual)
      if (Math.abs(translateX) >= halfWidth) {
        translateX += halfWidth * (translateX < 0 ? 1 : -1);
      }

      track.style.transform = `translateX(${translateX}px)`;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
  // --- FIM DO BLOCO DE AUTO‑SCROLL ---

  const modal      = document.getElementById('galleryModal');
  const modalImg   = document.getElementById('galleryModalImage');
  const modalVideo = document.getElementById('galleryModalVideo'); // novo
  const modalText  = document.getElementById('galleryModalText');
  const btnClose   = document.getElementById('galleryModalClose');
  const btnPrev    = document.getElementById('galleryModalPrev');
  const btnNext    = document.getElementById('galleryModalNext');

  if (!modal || !modalImg || !modalText) return;

  let currentIndex = 0;

  // Monta lista de slides com tipo (image | video)
  const slides = Array.from(items).map(item => {
    const img       = item.querySelector('img');
    const videoSrc  = item.querySelector('video source');
    const captionEl = item.querySelector('.gallery-caption');

    return {
      type: img ? 'image' : 'video',
      src:  img ? img.src : (videoSrc ? videoSrc.src : ''),
      alt:  img ? img.alt : '',
      caption: captionEl ? captionEl.textContent.trim() : ''
    };
  });

  function showSlide(index) {
    const slide = slides[index];
    if (!slide) return;

    // Se não existir vídeo no HTML, cai sempre para imagem
    if (slide.type === 'video' && modalVideo) {
      // esconder imagem
      modalImg.style.display = 'none';

      // preparar e mostrar vídeo
      modalVideo.style.display = 'block';
      modalVideo.src = slide.src;
      modalVideo.play();
    } else {
      // mostrar imagem
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.style.display = 'none';
      }

      modalImg.style.display = 'block';
      modalImg.src = slide.src;
      modalImg.alt = slide.alt;
    }

    modalText.textContent = slide.caption;
  }

  function openModal(index) {
    currentIndex = index;
    showSlide(currentIndex);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';

    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Clique nos itens da galeria para abrir o modal
  items.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => openModal(index));
  });

  // Controles do modal
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnNext)  btnNext.addEventListener('click', goNext);
  if (btnPrev)  btnPrev.addEventListener('click', goPrev);

  // Fechar clicando fora do conteúdo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Teclado: ESC, seta esquerda/direita
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;

    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft')  goPrev();
  });

  // Botões externos da galeria (scroll esquerda/direita)
  const btnGalleryPrev = document.getElementById('galleryPrev');
  const btnGalleryNext = document.getElementById('galleryNext');

  if (btnGalleryPrev && btnGalleryNext) {
    const firstItem    = gallery.querySelector('.gallery-item');
    const scrollAmount = firstItem ? firstItem.offsetWidth + 16 : 400;

    btnGalleryPrev.addEventListener('click', () => {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnGalleryNext.addEventListener('click', () => {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
}



    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Initialize section animations
    initSectionAnimations();
    
    // Animate allocation bars when visible
    observeAllocationBars();
});

// Section fade-in animations
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Trigger initial check
    setTimeout(animateSections, 100);
}

function animateSections() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Observe allocation bars for animation
function observeAllocationBars() {
    const bars = document.querySelectorAll('.allocation-fill');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        bars.forEach(bar => observer.observe(bar));
    }
}


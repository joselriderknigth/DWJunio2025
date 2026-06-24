(() => {
  'use strict';

  /* ========================================== */
  /* 1. MÓDULO DE COMENTARIOS                   */
  /* ========================================== */
  const commentForm = document.querySelector('.comments__form');
  if (commentForm) {
      const textArea = document.querySelector('#commentText');
      const charCount = document.querySelector('#charCount');
      const commentsList = document.querySelector('#commentsList');
      const emojiBtn = document.querySelector('.comments__emoji-btn');
      const emojiList = document.querySelector('.comments__emoji-list');

      const updateCharCountHandler = () => {
          if (charCount && textArea) charCount.textContent = textArea.value.length;
      };

      if (textArea) textArea.addEventListener('input', updateCharCountHandler);

      const toggleEmojiListHandler = () => {
          if (!emojiList) return;
          const isHidden = emojiList.hasAttribute('hidden');
          if (isHidden) {
              emojiList.removeAttribute('hidden');
          } else {
              emojiList.setAttribute('hidden', 'true');
          }
      };

      if (emojiBtn) emojiBtn.addEventListener('click', toggleEmojiListHandler);

      if (emojiList) {
          emojiList.addEventListener('click', (event) => {
              if (event.target.classList.contains('comments__emoji-item') && textArea) {
                  textArea.value += event.target.textContent;
                  updateCharCountHandler();
              }
          });
      }

      const saveComment = (text) => {
          const stored = JSON.parse(localStorage.getItem('comments') || '[]');
          stored.unshift(text);
          if (stored.length > 50) stored.length = 50;
          localStorage.setItem('comments', JSON.stringify(stored));
      };

      const submitCommentHandler = (event) => {
          event.preventDefault();
          if (!textArea) return;
          const text = textArea.value.trim();
          if (!text) return;

          const li = document.createElement('li');
          li.classList.add('comments__item');
          li.textContent = text;

          if (commentsList) commentsList.prepend(li);
          saveComment(text);
          commentForm.reset();
          updateCharCountHandler();
      };

      commentForm.addEventListener('submit', submitCommentHandler);

      document.addEventListener('click', (e) => {
          if (emojiList && !e.target.closest('.comments__emoji-picker')) {
              emojiList.setAttribute('hidden', 'true');
          }
      });

      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && emojiList) {
              emojiList.setAttribute('hidden', 'true');
          }
      });

      const loadComments = () => {
          const stored = JSON.parse(localStorage.getItem('comments') || '[]');
          if (commentsList) {
              stored.forEach(comment => {
                  const li = document.createElement('li');
                  li.classList.add('comments__item');
                  li.textContent = comment;
                  commentsList.append(li);
              });
          }
      };
      loadComments();
  }

 /* ========================================== */
  /* 2. MÓDULO DE CARRUSEL (Actualizado)        */
  /* ========================================== */
  const container = document.querySelector('.carrouselr-container');
  if (container) {
      const list = container.querySelector('.carrouselr-list');
      const items = container.querySelectorAll('.carrousel');
      const btnLeft = container.querySelector('.btn--left');
      const btnRight = container.querySelector('.btn--right');
      
      let currentPosition = 0;
      const maxPosition = items.length - 1; // Si hay 3 noticias, el máximo es 2

      const updateCarousel = () => {
          // Desliza la lista usando transformaciones (Mucho más eficiente que margin)
          list.style.transform = `translateX(-${currentPosition * 100}%)`;
          
          // Efecto visual: Atenuar flechas si estamos en el límite
          if (btnLeft && btnRight) {
              btnLeft.style.opacity = currentPosition === 0 ? '0.3' : '1';
              btnLeft.style.cursor = currentPosition === 0 ? 'default' : 'pointer';
              
              btnRight.style.opacity = currentPosition === maxPosition ? '0.3' : '1';
              btnRight.style.cursor = currentPosition === maxPosition ? 'default' : 'pointer';
          }
      };

      if (btnLeft && btnRight) {
          btnLeft.addEventListener('click', () => {
              if (currentPosition > 0) {
                  currentPosition--;
                  updateCarousel();
              }
          });

          btnRight.addEventListener('click', () => {
              if (currentPosition < maxPosition) {
                  currentPosition++;
                  updateCarousel();
              }
          });
      }
      
      // Inicializar el estado de las flechas al cargar la página
      updateCarousel();
  }

  /* ========================================== */
  /* 3. MÓDULO DE ACORDEONES Y TABS             */
  /* ========================================== */
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length > 0) {
      accordions.forEach(acc => {
          acc.addEventListener('click', () => {
              acc.classList.toggle('active');
              
              const panel = acc.nextElementSibling;
              if (panel) {
                  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
              }
          });
      });
  }

  const tabs = document.querySelectorAll('.tab');
  if (tabs.length > 0) {
      const tabContents = document.querySelectorAll('.tab__content');
      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              const target = tab.dataset.tab;
              
              tabs.forEach(t => {
                  t.classList.remove('active');
                  t.setAttribute('aria-selected', 'false');
              });
              
              tab.classList.add('active');
              tab.setAttribute('aria-selected', 'true');
              
              tabContents.forEach(content => {
                  content.classList.toggle('active', content.classList.contains(`tab__content--${target}`));
              });
          });
      });
  }

  /* ========================================== */
  /* 4. MÓDULO DE GALERÍA Y LIGHTBOX            */
  /* ========================================== */
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.querySelector('.lightbox-container');
  if (galleryImages.length > 0 && lightbox) {
      const lightboxImg = lightbox.querySelector('.lightbox__img');
      const lightboxClose = lightbox.querySelector('.lightbox__close');

      galleryImages.forEach(img => {
          img.addEventListener('click', () => {
              if (lightboxImg) lightboxImg.src = img.src;
              lightbox.removeAttribute('hidden');
          });
      });

      if (lightboxClose) {
          lightboxClose.addEventListener('click', () => {
              lightbox.setAttribute('hidden', 'true');
          });
      }

      lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) {
              lightbox.setAttribute('hidden', 'true');
          }
      });
  }

  /* ========================================== */
  /* 5. MÓDULO ASIDE POPUP (PRODUCTOS)          */
  /* ========================================== */
  const asidePanels = document.querySelectorAll('.aside__menu .panel');
  const asidePopup = document.querySelector('.aside-popup');
  
  if (asidePanels.length > 0 && asidePopup) {
      const popupTitle = asidePopup.querySelector('#popupTitle');
      const popupText = asidePopup.querySelector('#popupText');
      const popupPicture = asidePopup.querySelector('#popupPicture');
      const popupClose = asidePopup.querySelector('.lightbox__close');

      asidePanels.forEach(panel => {
          panel.style.cursor = 'pointer';
          
          panel.addEventListener('click', () => {
              const btn = panel.previousElementSibling;
              if (!btn) return;
              
              const title = btn.dataset.title;
              const imgBase = btn.dataset.img;
              const text = btn.dataset.text;

              if (popupTitle) popupTitle.textContent = title;
              if (popupText) popupText.textContent = text;
              if (popupPicture) {
                  popupPicture.innerHTML = `
                      <source srcset="${imgBase}.webp" type="image/webp">
                      <source srcset="${imgBase}.jpg" type="image/jpeg">
                      <img src="${imgBase}.jpg" alt="${title}" loading="lazy">
                  `;
              }
              asidePopup.removeAttribute('hidden');
          });
      });

      if (popupClose) {
          popupClose.addEventListener('click', () => {
              asidePopup.setAttribute('hidden', 'true');
          });
      }

      asidePopup.addEventListener('click', (e) => {
          if (e.target === asidePopup) {
              asidePopup.setAttribute('hidden', 'true');
          }
      });
  }
})();
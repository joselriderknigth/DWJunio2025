/* ----------------------------------------- */
/* 🌟 Variables globales */
/* ----------------------------------------- */
const commentForm = document.querySelector('.comments__form');
const textArea = document.getElementById('commentText');
const charCount = document.getElementById('charCount');
const commentsList = document.getElementById('commentsList');
const emojiBtn = document.querySelector('.comments__emoji-btn');
const emojiList = document.querySelector('.comments__emoji-list');

var container = document.getElementById('carrouselr-container');
var carrouselr = document.getElementById('carrouselr');
var carrousels = document.getElementsByClassName('carrousel').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var carrouselsPerPage = 0;
var carrouselsCount = carrousels - carrouselsPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);
function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams() {
  if (containerWidth < 600) {
    carrouselsPerPage = 1;
  } else if (containerWidth < 900) {
    carrouselsPerPage = 2;
  } else {
    carrouselsPerPage = 3;
  }

  carrouselsCount = carrousels - carrouselsPerPage;

  if (currentPosition < 0) currentPosition = 0;
  if (currentPosition > carrouselsCount) currentPosition = carrouselsCount;

  currentMargin = -(currentPosition * (100 / carrouselsPerPage));
  carrouselr.style.marginLeft = currentMargin + '%';

  buttons[0].classList.toggle('inactive', currentPosition === 0);
  buttons[1].classList.toggle('inactive', currentPosition === carrouselsCount);
}

setParams(container.offsetWidth);

function carrouselRight() {
  currentPosition--;
  setParams();
};

function carrouselLeft() {
  currentPosition++;
  setParams();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') carrouselRight();
  if (e.key === 'ArrowRight') carrouselLeft();
});

(() => {

  /* ----------------------------------------- */
  /* 🧮 Actualizar contador */
  /* ----------------------------------------- */
  const updateCharCountHandler = () => {
    charCount.textContent = textArea.value.length;
  };

  textArea.addEventListener('input', updateCharCountHandler);

  /* ----------------------------------------- */
  /* 😀 Selector de emojis */
  /* ----------------------------------------- */
  const toggleEmojiListHandler = () => {
    const isHidden = emojiList.hasAttribute('hidden');
    isHidden ? emojiList.removeAttribute('hidden') : emojiList.setAttribute('hidden', true);
  };

  emojiBtn.addEventListener('click', toggleEmojiListHandler);

  emojiList.addEventListener('click', (event) => {
    if (event.target.classList.contains('comments__emoji-item')) {
      textArea.value += event.target.textContent;
      updateCharCountHandler();
    }
  });

  /* ----------------------------------------- */
  /* 💬 Enviar comentario */
  /* ----------------------------------------- */
  const submitCommentHandler = (event) => {
    event.preventDefault();

    const text = textArea.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.classList.add('comments__item');
    li.textContent = text;

    commentsList.prepend(li);

    // Guardar en localStorage
    saveComment(text);

    commentForm.reset();
    updateCharCountHandler();
  };

  commentForm.addEventListener('submit', submitCommentHandler);

  /* ----------------------------------------- */
  /* 💾 LocalStorage */
  /* ----------------------------------------- */
  const saveComment = (text) => {
    const stored = JSON.parse(localStorage.getItem('comments') || '[]');

    stored.unshift(text);
    if (stored.length > 50) stored.length = 50;

    localStorage.setItem('comments', JSON.stringify(stored));
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.comments__emoji-picker')) {
      emojiList.setAttribute('hidden', true);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emojiList.setAttribute('hidden', true);
    }
  });

  const loadComments = () => {
    const stored = JSON.parse(localStorage.getItem('comments') || '[]');
    stored.forEach(comment => {
      const li = document.createElement('li');
      li.classList.add('comments__item');
      li.textContent = comment;
      commentsList.append(li);
    });
  };

  loadComments();
})();

const accordions = document.querySelectorAll('.accordion');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');

    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Botones
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Contenido
    tabContents.forEach(content => {
      content.classList.toggle(
        'active',
        content.classList.contains(`tab__content--${target}`)
      );
    });
  });
});

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox__img');
const lightboxClose = document.querySelector('.lightbox__close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.removeAttribute('hidden');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.setAttribute('hidden', true);
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.setAttribute('hidden', true);
  }
});

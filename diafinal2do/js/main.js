/* ----------------------------------------- */
/* 🌟 Variables globales */
/* ----------------------------------------- */
const commentForm = document.querySelector('.comments__form');
const textArea = document.getElementById('commentText');
const charCount = document.getElementById('charCount');
const commentsList = document.getElementById('commentsList');
const emojiBtn = document.querySelector('.comments__emoji-btn');
const emojiList = document.querySelector('.comments__emoji-list');


var currentPosition = 0;
var currentMargin = 0;


var prevKeyActive = false;
var nextKeyActive = true;

const container = document.getElementById('carrouselr-container');
const track = document.getElementById('carrouselr');
const items = document.querySelectorAll('.carrousel');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

var containerWidth = container.offsetWidth;
let index = 0;
let itemsPerView = 1;
let itemWidth = 0;

function updateLayout() {
  const containerWidth = container.offsetWidth;

  if (containerWidth < 600) itemsPerView = 1;
  else if (containerWidth < 900) itemsPerView = 2;
  else itemsPerView = 3;

  const style = getComputedStyle(container);
  const padding =
    parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

  itemWidth = (containerWidth - padding) / itemsPerView;

  items.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });

  moveCarousel();
  updateButtons();
}

function moveCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

function updateButtons() {
  btnLeft.classList.toggle('inactive', index === 0);
  btnRight.classList.toggle(
    'inactive',
    index >= items.length - itemsPerView
  );
}

btnLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    moveCarousel();
    updateButtons();
  }
});

btnRight.addEventListener('click', () => {
  if (index < items.length - itemsPerView) {
    index++;
    moveCarousel();
    updateButtons();
  }
});

window.addEventListener('resize', updateLayout);
updateLayout();


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



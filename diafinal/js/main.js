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
 carrouselsPerPage = 1;
  carrouselsCount = carrousels - 1;

  if (currentPosition < 0) currentPosition = 0;
  if (currentPosition > carrouselsCount) currentPosition = carrouselsCount;

  currentMargin = -currentPosition * 100;
  carrouselr.style.marginLeft = currentMargin + '%';

  // Botón izquierdo
  buttons[0].classList.toggle('inactive', currentPosition === 0);

  // Botón derecho
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
    localStorage.setItem('comments', JSON.stringify(stored));
  };

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
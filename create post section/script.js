const authorInput  = document.getElementById('author');
const titleInput   = document.getElementById('title');
const dateInput    = document.getElementById('date');
const contentInput = document.getElementById('content');
const publishBtn   = document.getElementById('publishBtn');

publishBtn.addEventListener('click', () => {
  const author  = authorInput.value.trim();
  const title   = titleInput.value.trim();
  const date    = dateInput.value;
  const content = contentInput.value.trim();
  if (!author || !title || !date || !content) return;


  authorInput.value  = '';
  titleInput.value   = '';
  dateInput.value    = '';
  contentInput.value = '';
});

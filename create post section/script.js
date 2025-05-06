const authorInput  = document.getElementById('author');
const titleInput   = document.getElementById('title');
const dateInput    = document.getElementById('date');
const contentInput = document.getElementById('content');
const publishBtn   = document.getElementById('publishBtn');
const blogList     = document.getElementById('blogList');

publishBtn.addEventListener('click', () => {
  const author  = authorInput.value.trim();
  const title   = titleInput.value.trim();
  const date    = dateInput.value;
  const content = contentInput.value.trim();
  if (!author || !title || !date || !content) return;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  });

  const postEl = document.createElement('div');
  postEl.className = 'blog-post';
  postEl.innerHTML = `
    <h3>${title}</h3>
    <div class="meta">Author: ${author} | Date: ${formattedDate}</div>
    <p>${content.replace(/\n/g,'<br>')}</p>
  `;
  blogList.appendChild(postEl);

  authorInput.value  = '';
  titleInput.value   = '';
  dateInput.value    = '';
  contentInput.value = '';
});

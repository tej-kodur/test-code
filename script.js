fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const contentDiv = document.getElementById('content');
    data.articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';
      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
        <div class="tags">
          Length: ${article.tags.length}, Concern: ${article.tags.concern}
        </div>
      `;
      contentDiv.appendChild(articleDiv);
    });
  });


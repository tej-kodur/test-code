fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<h1>${data.articles[0].title}</h1><p>${data.articles[0}.summary</p>`;
  });

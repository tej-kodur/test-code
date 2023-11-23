fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('content').innerText = data.articles[0].title;
    
  });

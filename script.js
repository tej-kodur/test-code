fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('content').innerText = data.message;
  });

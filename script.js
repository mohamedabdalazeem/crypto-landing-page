fetch('http://api.mediastack.com/v1/news?access_key=b60c31dd1ec7c871d8ac2597bd30f128&keywords=crypto')
.then(res => res.json())
.then(data => {
  // Get the top 3 articles
  const articles = data.data.sort(() => Math.random() - 0.5).slice(0, 3);
  console.log(data)
  // Render each article to the news feed
  articles.forEach(article => {
    const {title, url, image} = article;
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

    const articleImage = document.createElement('img');
    if(image) {
      articleImage.src = image;
    }else {
      articleImage.src = './images/placeholder.jpg'
    }
    
    articleImage.alt = title;
    articleImage.classList.add('article-image');
    articleContainer.appendChild(articleImage);

    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
    articleTitle.classList.add('article-title');
    articleContainer.appendChild(articleTitle);

    const articleLink = document.createElement('a');
    articleLink.href = url;
    articleLink.textContent = 'Read More';
    articleLink.classList.add('article-link');
    articleContainer.appendChild(articleLink);

    document.getElementById('news-feed').appendChild(articleContainer);
  });
})
.catch(error => console.log(error));

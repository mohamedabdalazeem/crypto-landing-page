fetch('https://newsapi.org/v2/everything?q=crypto&sortBy=popularity&apiKey=14733153d5d0416d8505da08f0382577')
.then(res => res.json())
.then(data => {
  // Get the top 3 articles
  const articles = data.articles.sort(() => Math.random() - 0.5).slice(0, 3);

  // Render each article to the news feed
  articles.forEach(article => {
    const {title, url, urlToImage} = article;
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

    const articleImage = document.createElement('img');
    articleImage.src = urlToImage;
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
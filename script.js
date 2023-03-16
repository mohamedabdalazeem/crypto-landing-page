// fetch('https://newsapi.org/v2/everything?q=crypto&sortBy=popularity&apiKey=14733153d5d0416d8505da08f0382577')
// .then(res => res.json())
// .then(data => {
  
//   const articles = data.articles.sort(() => Math.random() - 0.5).slice(0, 3);

//   articles.forEach(article => {
//     const {title, url, urlToImage} = article;
//     const articleContainer = document.createElement('div');
//     articleContainer.classList.add('article-container');

//     const articleImage = document.createElement('img');
//     if(urlToImage) {
//       articleImage.src = urlToImage;
//     }else {
//       articleImage.src = './images/placeholder.jpg'
//     }
//     articleImage.alt = title;
//     articleImage.classList.add('article-image');
//     articleContainer.appendChild(articleImage);

//     const articleTitle = document.createElement('h3');
//     articleTitle.textContent = title;
//     articleTitle.classList.add('article-title');
//     articleContainer.appendChild(articleTitle);

//     const articleLink = document.createElement('a');
//     articleLink.href = url;
//     articleLink.textContent = 'Read More';
//     articleLink.classList.add('article-link');
//     articleContainer.appendChild(articleLink);

//     document.getElementById('news-feed').appendChild(articleContainer);
//   });
// })
// .catch(error => console.log(error));
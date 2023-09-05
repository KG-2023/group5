
//https://newsapi.org/v2/top-headlines?country=ph&apiKey=d406f5098f6e4663acd729fd42eea9e4



  // Replace 'YOUR_API_KEY' with your actual NewsAPI key
//   const apiKey = 'd406f5098f6e4663acd729fd42eea9e4';
//   const apiUrl = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${apiKey}`;
  
//   async function fetchAndDisplayNews() {
//       try {
//           const response = await fetch(apiUrl);
//           const data = await response.json();
          
//           const articles = data.articles;
//           const outputDiv = document.getElementById('output');
//           outputDiv.innerHTML = ''; // Clear existing content
          
//           articles.forEach(article => {
//               try {
//                   const newsLink = document.createElement('a');
//                   newsLink.href = article.url;
//                   newsLink.target = '_blank';
//                   newsLink.className = 'news-link';
                  
//                   const card = document.createElement('div');
//                   card.className = 'card';
                  
//                   const cardBody = document.createElement('div');
//                   cardBody.className = 'card-body';
                  
//                   const cardTitle = document.createElement('h2');
//                   cardTitle.className = 'card-title';
//                   cardTitle.textContent = article.title;
                  
//                   const cardDescription = document.createElement('p');
//                   cardDescription.textContent = article.description;
                  
//                   const readMoreLink = document.createElement('a');
//                   readMoreLink.href = article.url;
//                   readMoreLink.target = '_blank';
//                   readMoreLink.textContent = 'Read more';
                  
//                   cardBody.appendChild(cardTitle);
//                   cardBody.appendChild(cardDescription);
//                   cardBody.appendChild(readMoreLink);
//                   card.appendChild(cardBody);
//                   newsLink.appendChild(card);
//                   outputDiv.appendChild(newsLink);
//                   outputDiv.appendChild(document.createElement('br'));
//               } catch (err) {
//                   console.log(err);
//               }
//           });
//       } catch (error) {
//           console.error('Error fetching news:', error);
//       }
//   }
  
//   window.addEventListener('load', () => {
//       fetchAndDisplayNews();
//       setInterval(fetchAndDisplayNews, 3000);
//   });
  




async function getNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=ph&apiKey=d406f5098f6e4663acd729fd42eea9e4');
        const data = await response.json();
        const newsArticles = data.articles;
        const output = document.getElementById('output');

        let currentIndex = 0;

        function renderNextArticle() {
            if (currentIndex < newsArticles.length) {
                const article = newsArticles[currentIndex];
                try {
                    const articleImage = article.urlToImage ? article.urlToImage : 'placeholder-image-url.jpg';

                    output.innerHTML += `
                        <a href="${article.url}" target="_blank" class="news-link">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${articleImage}" class="card-img-top" alt="${article.title}" title="${article.title}"><br>
                                    <h2 class="card-title">${article.title}</h2>
                                    <div class="card-text">
                                        <p>${article.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <br>
                    `;
                } catch (err) {
                    console.log(err);
                }

                currentIndex++;
                setTimeout(renderNextArticle, 2000); // 2000 milliseconds = 2 seconds
            } else {
                output.classList.add('news-container');
                output.innerHTML += `<div class="clearfix"></div>`;
                output.innerHTML += `<br><br><br><br>`;
                output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
            }
        }

        renderNextArticle(); // Start rendering news
    } catch (error) {
        console.log(error);
    }
}

getNews();



// async function getNews() {
//     try {
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=ph&apiKey=d406f5098f6e4663acd729fd42eea9e4');
//         const data = await response.json();
//         const newsArticles = data.articles;
//         const output = document.getElementById('output');

//         if (newsArticles && newsArticles.length > 0) {
//             newsArticles.forEach(article => {
//                 try {
//                     const articleImage = article.urlToImage ? article.urlToImage : 'placeholder-image-url.jpg';

//                     const articleElement = document.createElement('div');
//                     articleElement.innerHTML = `
//                         <a href="${article.url}" target="_blank" class="news-link">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <img src="${articleImage}" class="card-img-top" alt="${article.title}" title="${article.title}"><br>
//                                     <h2 class="card-title">${article.title}</h2>
//                                     <div class="card-text">
//                                         <p>${article.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                         <br>
//                     `;

//                     output.appendChild(articleElement);
//                 } catch (err) {
//                     console.log(err);
//                 }
//             });
//         }

//         output.classList.add('news-container');
//         output.innerHTML += `<div class="clearfix"></div>`;
//         output.innerHTML += `<br><br><br><br>`;
//         output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
//     } catch (error) {
//         console.log(error);
//     }
// }

// getNews();


// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg

async function getNews() {
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg')
        .then(d => d.json())
        .then(response => {
            console.log(response.results);
            const output = document.getElementById('output');
            const newsArticles = response.results;
            let currentIndex = 0;

            function renderNextArticle() {
                if (currentIndex < newsArticles.length) {
                    const article = newsArticles[currentIndex];
                    console.log(article.title);
                    
                    try {
                        output.innerHTML += `
                            <a href="${article.url}" target="_blank" class="news-link">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="${article['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${article['media'][0].caption}" title="${article['media'][0].caption}"><br>
                                        <h2 class="card-title">${article.title}</h2>
                                        <div class="card-text">
                                            <p>${article.abstract}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <br>
                        `;
                        console.log(article['media'][0].caption);
                    } catch (err) {
                        console.log(err);
                    }

                    currentIndex++;
                    setTimeout(renderNextArticle, 2000); 
                } else {
                    output.classList.add('news-container');
                    output.innerHTML += `<div class="clearfix"></div>`;
                    output.innerHTML += `<br><br><br><br>`;
                    output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
                }
            }

            renderNextArticle(); // Start rendering news
        });
}

getNews();


// async function getNews() {
//     await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg')
//         .then(d => d.json())
//         .then(response => {
//             const output = document.getElementById('output');
//             const newsArticles = response.results;
//             let currentIndex = 0;

//             async function renderNextArticle() {
//                 if (currentIndex < newsArticles.length) {
//                     const article = newsArticles[currentIndex];
                    
//                     try {
//                         const newsLink = document.createElement('a');
//                         newsLink.href = article.url;
//                         newsLink.target = '_blank';
//                         newsLink.className = 'news-link';
                        
//                         const card = document.createElement('div');
//                         card.className = 'card';
                        
//                         const cardBody = document.createElement('div');
//                         cardBody.className = 'card-body';
                        
//                         const cardTitle = document.createElement('h2');
//                         cardTitle.className = 'card-title';
//                         cardTitle.textContent = article.title;
                        
//                         const cardDescription = document.createElement('p');
//                         cardDescription.textContent = article.abstract;
                        
//                         const image = document.createElement('img');
//                         image.src = article.media[0]['media-metadata'][2].url;
//                         image.className = 'card-img-top';
//                         image.alt = article.media[0].caption;
//                         image.title = article.media[0].caption;
                        
//                         cardBody.appendChild(image);
//                         cardBody.appendChild(cardTitle);
//                         cardBody.appendChild(cardDescription);
//                         card.appendChild(cardBody);
//                         newsLink.appendChild(card);
//                         output.appendChild(newsLink);
//                         output.appendChild(document.createElement('br'));
//                     } catch (err) {
//                         console.log(err);
//                     }

//                     currentIndex++;
//                     await new Promise(resolve => setTimeout(resolve, 2000)); 
//                     await renderNextArticle();
//                 } else {
//                     output.classList.add('news-container');
//                     output.innerHTML += `<div class="clearfix"></div>`;
//                     output.innerHTML += `<br><br><br><br>`;
//                     output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
//                 }
//             }

//             renderNextArticle();
//         });
// }

// getNews();

// async function getNews() {
//     await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg')
//         .then(d => d.json())
//         .then(response => {
//             const output = document.getElementById('output');
//             const newsArticles = response.results;
//             let currentIndex = 0;

//             async function renderNextArticle() {
//                 if (currentIndex < newsArticles.length) {
//                     const article = newsArticles[currentIndex];

//                     try {
//                         const newsLink = document.createElement('a');
//                         newsLink.href = article.url;
//                         newsLink.target = '_blank';
//                         newsLink.className = 'news-link';

//                         const card = document.createElement('div');
//                         card.className = 'card';

//                         const cardBody = document.createElement('div');
//                         cardBody.className = 'card-body';

//                         const cardTitle = document.createElement('h2');
//                         cardTitle.className = 'card-title';
//                         cardTitle.textContent = article.title;

//                         const cardDescription = document.createElement('p');
//                         cardDescription.textContent = article.abstract;

//                         const image = document.createElement('img');
//                         if (article.media && article.media[0] && article.media[0]['media-metadata'] && article.media[0]['media-metadata'][2]) {
//                             // Check if the structure exists before accessing properties
//                             image.src = article.media[0]['media-metadata'][2].url;
//                             image.alt = article.media[0].caption;
//                             image.title = article.media[0].caption;
//                         }

//                         cardBody.appendChild(image);
//                         cardBody.appendChild(cardTitle);
//                         cardBody.appendChild(cardDescription);

//                         card.appendChild(cardBody);
//                         newsLink.appendChild(card);
//                         output.appendChild(newsLink);
//                         output.appendChild(document.createElement('br'));
//                     } catch (err) {
//                         console.log(err);
//                     }

//                     currentIndex++;
//                     await new Promise(resolve => setTimeout(resolve, 60000)); // 60000 milliseconds = 1 minute
//                     await renderNextArticle();
//                 } else {
//                     output.classList.add('news-container');
//                     output.innerHTML += `<div class="clearfix"></div>`;
//                     output.innerHTML += `<br><br><br><br>`;
//                     output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
//                 }
//             }

//             renderNextArticle();
//         });
// }

// getNews();


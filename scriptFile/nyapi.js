
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
                    setTimeout(renderNextArticle, 10000); // 60000 milliseconds = 1 minute
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

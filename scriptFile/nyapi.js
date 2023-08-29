// //https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg

// async function getNews(){
//     await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg')
//     .then(d => d.json())
//     .then(response => {
//         console.log(response.results);
//         for(var i = 0; i < response.results.length; i++){
//             console.log(response.results[i].title);
//             const output = document.getElementById('output');
            
//             try{
//                 output.innerHTML += `
//                     <div class="card">
//                         <div class="card-body">
//                         <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}"><br>
//                         <h2 class="card-title">${response.results[i].title}</h2>
//                             <div class="card-text">
//                                 <p>${response.results[i].abstract}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <br>   
//                     `
//                 console.log(response.results[i]['media'][0].caption);
//             }
//             catch(err){
//                 console.log(err);
//             }
//             // console.log(response.results[i].title);
//             // console.log(i);
//         }
//         document.getElementById('copyright').innerHTML = response.copyright;
//     })
// }
// getNews();

async function getNews() {
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8XvDsxN66beb50lGDSvUeEvDF4KukyEg')
        .then(d => d.json())
        .then(response => {
            console.log(response.results);
            const output = document.getElementById('output');

            for (var i = 0; i < response.results.length; i++) {
                console.log(response.results[i].title);
                
                try {
                    output.innerHTML += `
                        <a href="${response.results[i].url}" target="_blank" class="news-link">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}"><br>
                                    <h2 class="card-title">${response.results[i].title}</h2>
                                    <div class="card-text">
                                        <p>${response.results[i].abstract}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <br>   
                    `;
                    console.log(response.results[i]['media'][0].caption);
                } catch (err) {
                    console.log(err);
                }
            }
            document.getElementById('output').classList.add('news-container');
            output.innerHTML += `<div class="clearfix"></div>`;
            output.innerHTML += `<br><br><br><br>`;
            output.innerHTML += `<div class="card-footer text-center"><p>Source: The New York Times</p></div>`;
        });
}
getNews();

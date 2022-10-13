//fetch api later we can implement 
//more than one page and based on titles params
async function getMovieTitles() {
    const apiUrl = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); 
}

getMovieTitles();
window.addEventListener("DOMContentLoaded", () => {
  
    document.getElementById("search__submitbtn").addEventListener("click", getMovieTitles, false);
    const input = document.getElementById("searchbox");

  //enter now with the function will behave the same ways as our button click
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search__submitbtn").click();
    }
  });

  //fetch api later we can implement
  //more than one page and based on titles params
  async function getMovieTitles() {
    const apiUrl = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";
    const data = await fetch(apiUrl).then((res) => res.json());
    console.log(data);
  }

});

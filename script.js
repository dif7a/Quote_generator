const api_url = "https://api.quotable.io/random";

async function getQuote(url){
const response = await fetch(url);
var data = await response.json();
document.querySelector('blockquote').innerHTML = data.content;
document.querySelector('span').innerHTML = data.author
}
getQuote(api_url);
    
newQuote.addEventListener('click',() => {
    location.reload();
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
};
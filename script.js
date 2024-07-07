const api_url = "https://type.fit/api/quotes";

async function getQuote(url){
const response = await fetch(url);
var data = await response.json();
const index = Math.floor(Math.random()*data.length);
document.querySelector('blockquote').innerHTML = data[index].text;
document.querySelector('span').innerHTML = data[index].author
}
getQuote(api_url);
    
newQuote.addEventListener('click',() => {
    location.reload();
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
};

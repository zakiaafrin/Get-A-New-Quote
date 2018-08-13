// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var quoteText = document.querySelector(".quote-text")       
var quoteAuthor = document.querySelector(".quote-author")   
var button = document.querySelector("button")               

function getQuote() {
    console.log(quoteText)           
    console.log(quoteAuthor)         
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            quoteText.textContent = data.quoteText;                 
            quoteAuthor.textContent = data.quoteAuthor;             
        },
        error: function (error) {
            console.log(error)
        }
        
    })
}
getQuote()

button.addEventListener("click", function (event) {            
    event.preventDefault()
    getQuote()
})
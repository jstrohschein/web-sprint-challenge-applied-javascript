import axios from "axios";

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //handle response
        console.log("Response:", response.data)
        const entryPoint = document.querySelector('.cards-container')
        const articles = response.data.articles


        //bootstrap articles
        articles.bootstrap.forEach(article => {
            const newCard = cardMaker(article)
            entryPoint.appendChild(newCard)
        })

        //javascript articles
        articles.javascript.forEach(article => {
            const newCard = cardMaker(article)
            entryPoint.appendChild(newCard)
        })

        //jqeury articles
        articles.jquery.forEach(article => {
            const newCard = cardMaker(article)
            entryPoint.appendChild(newCard)
        })

        //node articles
        articles.node.forEach(article => {
            const newCard = cardMaker(article)
            entryPoint.appendChild(newCard)
        })

        //technology articles
        articles.technology.forEach(article => {
            const newCard = cardMaker(article)
            entryPoint.appendChild(newCard)
        })


    })
    .catch(error => {
        //handle error
        console.log("Error:", error)
        const entryPoint = document.querySelector('cards-container')
        entryPoint.appendChild(errorMessage())

    })


const errorMessage = () => {

    const alert = document.createElement('div')
    alert.style.height = '1000px'
    alert.style.width = '100%'
    alert.textContent = 'HTTP Request Was Not Successful :('

    return alert
}

const cardMaker = data => {

    //elements
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')

    //structure
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(img)

    //classes
    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //content
    headLine.textContent = data.headline
    img.src = data.authorPhoto
    name.textContent = data.authorName

    //eventlistener
    card.addEventListener('click', () => console.log(headLine.textContent))

    return card
}
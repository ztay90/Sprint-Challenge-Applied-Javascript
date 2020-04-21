// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then( (response) => {
  console.log(response)
  const articlesArray = response.data.articles
  const cardsContainer = document.querySelector('.cards-container')

  articlesArray.javascript.forEach ((event) => {
    cardsContainer.appendChild(articleCards(event.headline, event.authorPhoto, event.authorName))
  })

  articlesArray.bootstrap.forEach ((event) => {
    cardsContainer.appendChild(articleCards(event.headline, event.authorPhoto, event.authorName))
  })

  articlesArray.technology.forEach ((event) => {
    cardsContainer.appendChild(articleCards(event.headline, event.authorPhoto, event.authorName))
  })

  articlesArray.jquery.forEach ((event) => {
    cardsContainer.appendChild(articleCards(event.headline, event.authorPhoto, event.authorName))
  })

  articlesArray.node.forEach ((event) => {
    cardsContainer.appendChild(articleCards(event.headline, event.authorPhoto, event.authorName))
  })
})



function articleCards(headline, authorPhoto, authorName) {
  const cardsDiv = document.createElement('div')
  cardsDiv.classList.add('card')

  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = headline

  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')

  const imgContainerDiv = document.createElement('div')
  imgContainerDiv.classList.add('img-container')

  const authorImg = document.createElement('img')
  authorImg.setAttribute('src', authorPhoto)

  const authorSpan = document.createElement('span')
  authorSpan.textContent = `By ${authorName}`

  cardsDiv.appendChild(headlineDiv)
  cardsDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgContainerDiv)
  authorDiv.appendChild(authorSpan)
  imgContainerDiv.appendChild(authorImg)

  return cardsDiv
}



// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header');

  const dateSpan = document.createElement('span')
  dateSpan.classList.add('date');
  dateSpan.textContent = 'March 28, 2019';

  const headerH1 = document.createElement('h1')
  headerH1.textContent = 'Lambda Times';

  const tempSpan = document.createElement('span')
  tempSpan.classList.add('temp');
  tempSpan.textContent = '98°';

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerContainer = document.querySelector('.header-container')


headerContainer.appendChild(Header())
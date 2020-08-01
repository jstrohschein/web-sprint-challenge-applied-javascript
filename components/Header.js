// STEP 1: Create a header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const header = () => {

    //elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temperature = document.createElement('span')

    //structure
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temperature)

    //classes
    header.classList.add('header')
    date.classList.add('date')
    temperature.classList.add('temp')

    //content
    date.textContent = 'March 28, 2019'
    title.textContent = 'Lambda Times'
    temperature.textContent = '98°'

    return header

}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(header())
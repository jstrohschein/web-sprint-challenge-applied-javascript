import axios from "axios";


// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //success handled here
        console.log("Success: ", response.data.topics)
        const entryPoint = document.querySelector('.topics')
        const topicsArray = response.data.topics

        topicsArray.forEach(topic => {
            const topics = tabMaker(topic)
            entryPoint.appendChild(topics)
        })

    })
    .catch(error => {
        //error handled here
        console.log("Error: ", error)
    })


const tabMaker = data => {

    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = data
    return tab

}
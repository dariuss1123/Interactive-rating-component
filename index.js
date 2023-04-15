const ratings = document.querySelectorAll('.rating')
const button = document.querySelector('button')
let selectedRating = ""

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        removeSelectedClass()
        if (rating.textContent === e.target.dataset.rat) {
            rating.classList.add('selected')
            selectedRating = e.target.dataset.rat
        }
    })
})

function removeSelectedClass () {
    ratings.forEach((rating) => {
        rating.classList.remove('selected')
    })
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (selectedRating !== "") {
        const htmlString =
     `
        <img class="thank-you-img" src="images/illustration-thank-you.svg">
        <p class="selection-text">You selected ${selectedRating} of 5</p>
        <h1 class="thank-title">Thank you!</h1>
        <p class="thank-msg">We appreciate you taking the time
        to give a rating. If you ever need more support, 
        don't hesitate to get in touch!</p>
     `
     document.getElementById('card').innerHTML = htmlString

    }
})
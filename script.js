
function searchProperty() {
    var propertyType = document.getElementById("propertyType").value;
    var location = document.getElementById("location").value;

    // Perform the search based on propertyType and location
    // You can implement your search logic here
    // For this example, we'll just display an alert with the selected values
    alert("Searching for " + propertyType + " in " + location);
}

function animateCardsOnScroll() {
    // Check the screen width before applying the animation
    if (window.innerWidth >= 768) {
        const cards = document.querySelectorAll('.animated-card');

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardHeight = card.getBoundingClientRect().height;
            const windowHeight = window.innerHeight;

            // Adjust the scroll position to trigger the animation a bit earlier
            if (cardTop < windowHeight - cardHeight / 100) {
                card.style.transform = 'translateY(0)';
                card.style.opacity = 1;
            } else {
                card.style.transform = 'translateY(120%)';
                card.style.opacity = 1;
                card.style.transition = 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
            }
        });
    }
}

// Attach the function to the scroll event
window.addEventListener('scroll', animateCardsOnScroll);

// Call the function initially to check the cards' visibility on page load
animateCardsOnScroll();




function redirectToTransactionsDetails() {

    window.location.href = 'transaction.html#TransactionDetails';
}


document.addEventListener("DOMContentLoaded", function () {
    // Your initialization code here

    // Simulate a delay (you can replace this with your actual loading logic)
    setTimeout(function () {
        // Hide the loading screen after the delay
        document.getElementById("loading-screen").style.display = "none";
    }, 2000); // Adjust the delay time (in milliseconds) as needed
});


function redirectToAbout() {

    window.location.href = 'about.html';
}
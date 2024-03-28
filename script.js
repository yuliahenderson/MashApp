        document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const containerHeight = document.querySelector('.container-phone').offsetHeight;
        let index = 0;

        // Set the height of each slide to match its image's height
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            img.onload = function() {
                slide.style.height = img.offsetHeight + 'px';
            }
        });

        function nextSlide() {
            index++;
            if (index === slides.length) {
                index = 0;
            }
            slider.style.transform = `translateY(-${slides[index].offsetTop}px)`;
        }

        setInterval(nextSlide, 5000);
    });


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the scrollable container element
    var container = document.querySelector('.container');

    // Get reference to the button in the fixed header
    var header = document.getElementById('fixedHeader');
    var button = document.getElementById('scrollButton');

    // Function to check if scrolled to the second page
    function isScrolledToSecondPage() {
        var secondPage = document.querySelector('.pages.page2');
        if (secondPage) {
            var containerHeight = container.clientHeight;
            var scrollTop = container.scrollTop;
            var secondPageOffsetTop = secondPage.offsetTop;

            return scrollTop >= secondPageOffsetTop - containerHeight / 2;
        } else {
            console.error('Second page element not found.');
            return false;
        }
    }

    // Attach scroll event listener to the container
    container.addEventListener('scroll', function() {
        // Check if scrolled to the second page
        if (isScrolledToSecondPage()) {
            // Change button color when scrolled to the second page
            header.style.backgroundColor = '#ffffff';
            button.style.color = '#ffffff';
            button.style.backgroundColor = '#000000'; // Change to desired color
        } else {
            // Revert button color to default when not scrolled to the second page
            header.style.backgroundColor = 'transparent';
            button.style.color = '#000000';
            button.style.backgroundColor = '#ffffff'; // Default button color
        }
    });
});




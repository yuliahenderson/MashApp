
    document.addEventListener('DOMContentLoaded', function() {
        // Get reference to the scrollable container element
        var container = document.querySelector('.container');

        // Get reference to the button in the fixed header
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
                button.style.color = '#ffffff';
                button.style.backgroundColor = '#000000'; // Change to desired color
            } else {
                // Revert button color to default when not scrolled to the second page
                button.style.color = '#000000';
                button.style.backgroundColor = '#ffffff'; // Default button color
            }
        });
    });

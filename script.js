



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

//fixed header change

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('fixedHeader');
    var mlogo = document.getElementById('mlogo');
    var button = document.getElementById('scrollButton');
    var nav = document.querySelector('nav');
    var logo = document.getElementById('logo');

    // Store the original logo source
    var originalLogoSrc = mlogo.src;

    function isScrolled5PercentOfPage1() {
        var page1 = document.getElementById('page1');
        if (page1) {
            var scrollTop = window.scrollY || window.pageYOffset;
            var scrollThreshold = page1.offsetHeight * 0.10; // 10% of page1 height
            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 1 element not found.');
            return false;
        }
    }

    function changeColorsAndLogo() {
        if (isScrolled5PercentOfPage1()) {
            // Change colors and logo when scrolled 5% of page1
            header.style.backgroundColor = '#ffffff';
            button.style.color = '#ffffff';
            button.style.backgroundColor = '#000000';
            mlogo.src = 'Images/logo_black.png';
            nav.style.display = 'block';
            logo.style.display = 'none';
        } else {
            // Revert colors and logo when not scrolled 5% of page1
            header.style.backgroundColor = 'transparent';
            button.style.color = '#000000';
            button.style.backgroundColor = '#ffffff';
            mlogo.src = originalLogoSrc;
            nav.style.display = 'none';
            logo.style.display = 'block';
        }
    }

    // Call the function to set initial state based on page load position
    changeColorsAndLogo();

    // Attach scroll event listener to the window
    window.addEventListener('scroll', changeColorsAndLogo);
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Get reference to the button in the fixed header
//     var header = document.getElementById('fixedHeader');
//     var mlogo = document.getElementById('mlogo');
//     var button = document.getElementById('scrollButton');
//     var nav = document.querySelector('nav');
//     var logo = document.getElementById('logo');

//     // Store the original logo source
//     var originalLogoSrc = mlogo.src;

//     // Function to check if scrolled to the second page
//     function isScrolledToSecondPage() {
//         var secondPage = document.querySelector('.pages.page2');
//         if (secondPage) {
//             var containerHeight = window.innerHeight;
//             var scrollTop = window.scrollY || window.pageYOffset;
//             var secondPageOffsetTop = secondPage.offsetTop;

//             return scrollTop >= secondPageOffsetTop - containerHeight / 4;
//         } else {
//             console.error('Second page element not found.');
//             return false;
//         }
//     }

//     // Function to handle scroll events
//     function handleScroll() {
//         // Check if scrolled to the second page
//         if (isScrolledToSecondPage()) {
//             // Change button color when scrolled to the second page
//             header.style.backgroundColor = '#ffffff';
//             button.style.color = '#ffffff';
//             button.style.backgroundColor = '#000000'; // Change to desired color
//             mlogo.src = 'Images/logo_black.png'; // Change to the second logo image URL
//             nav.style.display = 'block'; // show the nav element
//             logo.style.display = 'none'; // hide the logo element
//         } else {
//             // Revert button color to default when not scrolled to the second page
//             header.style.backgroundColor = 'transparent';
//             button.style.color = '#000000';
//             button.style.backgroundColor = '#ffffff'; // Default button color
//             mlogo.src = originalLogoSrc; // Revert to the original logo image
//             nav.style.display = 'none'; // Hide the nav element
//             logo.style.display = 'block'; // Show the logo element
//         }
//     }

//     // Initial call to handleScroll() to set initial state based on page load position
//     handleScroll();

//     // Attach scroll event listener to the window
//     window.addEventListener('scroll', handleScroll);
// });


//Theme-color-meta color change

document.addEventListener('DOMContentLoaded', function() {
    var themeColorMeta = document.getElementById('theme-color-meta');

    function isScrolledTo95PercentOfPage2() {
        var page2 = document.getElementById('page2');
        if (page2) {
            var page2Height = page2.offsetHeight;
            var page2Top = page2.offsetTop;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page2Top + (page2Height * 0.95); // 95% of page2 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 2 element not found.');
            return false;
        }
    }

    function isScrolledTo25PercentOfPage3() {
        var page3 = document.getElementById('page3');
        if (page3) {
            var page3Top = page3.offsetTop;
            var page3Height = page3.offsetHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page3Top + (page3Height * 0.25); // 25% of page3 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 3 element not found.');
            return false;
        }
    }

        function isScrolledTo95PercentOfPage8() {
        var page8 = document.getElementById('page8');
        if (page8) {
            var page8Height = page8.offsetHeight;
            var page8Top = page8.offsetTop;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page8Top + (page8Height * 0.95); // 95% of page8 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 8 element not found.');
            return false;
        }
    }

        function isScrolledTo95PercentOfPage9() {
        var page9 = document.getElementById('page9');
        if (page9) {
            var page9Top = page9.offsetTop;
            var page9Height = page9.offsetHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page9Top + (page9Height * 0.95); // 95% of page9 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 9 element not found.');
            return false;
        }
    }

function handleScroll() {
    var scrolledTo95PercentOfPage2 = isScrolledTo95PercentOfPage2();
    var scrolledTo25PercentOfPage3 = isScrolledTo25PercentOfPage3();
    var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
    var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();

    if (scrolledTo95PercentOfPage2 && !scrolledTo25PercentOfPage3) {
        // Change meta tag color to green when scrolled to 95% of page2 and not scrolled to 25% of page3
        themeColorMeta.setAttribute('content', '#38FF27');
    } else if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
        // Change meta tag color to grey when scrolled to 95% of page8 and not scrolled to 95% of page9
        themeColorMeta.setAttribute('content', '#f4f4f4');
    } else {
        // Reset meta tag color to white if none of the above conditions are met
        themeColorMeta.setAttribute('content', '#ffffff');
    }
}

    // Initial call to handleScroll() to set initial state based on page load position
    handleScroll();

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});

//Fixed header color change to green page 3

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the fixed header
    var header = document.getElementById('fixedHeader');

    // Function to check if scrolled to 95% of page2
    function isScrolledTo90PercentOfPage2() {
        var page2 = document.getElementById('page2');
        if (page2) {
            var page2Height = page2.offsetHeight;
            var page2Top = page2.offsetTop;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page2Top + (page2Height * 0.95); // 95% of page2 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 2 element not found.');
            return false;
        }
    }

    // Function to check if scrolled to 25% of page3
    function isScrolledTo25PercentOfPage3() {
        var page3 = document.getElementById('page3');
        if (page3) {
            var page3Top = page3.offsetTop;
            var page3Height = page3.offsetHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page3Top + (page3Height * 0.25); // 25% of page3 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 3 element not found.');
            return false;
        }
    }

    // Function to handle scroll events
    function handleScroll() {
        var scrolledTo90PercentOfPage2 = isScrolledTo90PercentOfPage2();
        var scrolledTo25PercentOfPage3 = isScrolledTo25PercentOfPage3();

        if (scrolledTo90PercentOfPage2 && !scrolledTo25PercentOfPage3) {
            // Change header color to green if scrolled to 95% of page2 and not scrolled to 25% of page3
            header.style.backgroundColor = '#38FF27';
        }
    }

    // Initial call to handleScroll() to set initial state based on page load position
    handleScroll();

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});

//Fixed header color change to grey page 9

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the fixed header
    var header = document.getElementById('fixedHeader');

    // Function to check if scrolled to 95% of page8
    function isScrolledTo95PercentOfPage8() {
        var page8 = document.getElementById('page8');
        if (page8) {
            var page8Height = page8.offsetHeight;
            var page8Top = page8.offsetTop;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page8Top + (page8Height * 0.95); // 95% of page8 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 8 element not found.');
            return false;
        }
    }

    // Function to check if scrolled to 95% of page9
    function isScrolledTo95PercentOfPage9() {
        var page9 = document.getElementById('page9');
        if (page9) {
            var page9Top = page9.offsetTop;
            var page9Height = page9.offsetHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = page9Top + (page9Height * 0.95); // 95% of page9 height

            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 9 element not found.');
            return false;
        }
    }

    // Function to handle scroll events
    function handleScroll() {
        var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
        var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();

        if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
            // Change header color to green if scrolled to 95% of page8 and not scrolled to 95% of page9
            header.style.backgroundColor = '#f4f4f4';
        }
    }

    // Initial call to handleScroll() to set initial state based on page load position
    handleScroll();

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});


//Page 8/9 color change for theme-color-meta
// document.addEventListener('DOMContentLoaded', function() {
//     var themeColorMeta = document.getElementById('theme-color-meta');

//     function isScrolledTo95PercentOfPage8() {
//         var page8 = document.getElementById('page8');
//         if (page8) {
//             var page8Height = page8.offsetHeight;
//             var page8Top = page8.offsetTop;
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             var scrollThreshold = page8Top + (page8Height * 0.95); // 95% of page8 height

//             return scrollTop >= scrollThreshold;
//         } else {
//             console.error('Page 8 element not found.');
//             return false;
//         }
//     }

//     function isScrolledTo95PercentOfPage9() {
//         var page9 = document.getElementById('page9');
//         if (page9) {
//             var page9Top = page9.offsetTop;
//             var page9Height = page9.offsetHeight;
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             var scrollThreshold = page9Top + (page3Height * 0.95); // 95% of page9 height

//             return scrollTop >= scrollThreshold;
//         } else {
//             console.error('Page 9 element not found.');
//             return false;
//         }
//     }

//     function handleScroll() {
//         var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
//         var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();

//         if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
//             // Change meta tag color to green when scrolled to 95% of page8 and not scrolled to 95% of page9
//             themeColorMeta.setAttribute('content', '#F4F4F4');
//         } else {
//             // Reset meta tag color to white
//             themeColorMeta.setAttribute('content', '#ffffff');
//         }
//     }

//     // Initial call to handleScroll() to set initial state based on page load position
//     handleScroll();

//     // Attach scroll event listener to the window
//     window.addEventListener('scroll', handleScroll);
// });


// //Fixed header color change to gray for page 8/9
// document.addEventListener('DOMContentLoaded', function() {
//     // Get reference to the fixed header
//     var header = document.getElementById('fixedHeader');

//     // Function to check if scrolled to 95% of page8
//     function isScrolledTo95PercentOfPage8() {
//         var page8 = document.getElementById('page8');
//         if (page8) {
//             var page8Height = page8.offsetHeight;
//             var page8Top = page8.offsetTop;
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             var scrollThreshold = page8Top + (page8Height * 0.95); // 95% of page8 height

//             return scrollTop >= scrollThreshold;
//         } else {
//             console.error('Page 8 element not found.');
//             return false;
//         }
//     }

//     // Function to check if scrolled to 95% of page9
//     function isScrolledTo95PercentOfPage9() {
//         var page9 = document.getElementById('page9');
//         if (page9) {
//             var page9Top = page9.offsetTop;
//             var page9Height = page9.offsetHeight;
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             var scrollThreshold = page9Top + (page9Height * 0.95); // 95% of page9 height

//             return scrollTop >= scrollThreshold;
//         } else {
//             console.error('Page 9 element not found.');
//             return false;
//         }
//     }

//     // Function to handle scroll events
//     function handleScroll() {
//         var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
//         var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();

//         if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
//             // Change header color to green if scrolled to 95% of page8 and not scrolled to 95% of page9
//             header.style.backgroundColor = '#F4F4F4';
//         }
//     }

//     // Initial call to handleScroll() to set initial state based on page load position
//     handleScroll();

//     // Attach scroll event listener to the window
//     window.addEventListener('scroll', handleScroll);
// });

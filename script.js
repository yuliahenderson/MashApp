// Function to detect if the device is desktop
function isDesktop() {
    return window.matchMedia("(min-width: 993px)").matches;
}


// Other desktop-specific JavaScript functions (e.g., slider functions) can be initialized here if needed
function desktopSliderFunction() {
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
        if (img.complete) { // Ensure height is set if image is already loaded
            img.onload();
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
}

function desktopInitializeSlider() {
    const slides = document.querySelectorAll('.slide4');
    let currentIndex = 0;
    const intervalTime = 5000; // Interval time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
                console.log(`Showing slide ${i}`);
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
                console.log(`Hiding slide ${i}`);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        console.log(`Next slide index: ${currentIndex}`);
        showSlide(currentIndex);
    }

    // Initial setup
    showSlide(currentIndex);

    // Start the loop
    setInterval(nextSlide, intervalTime); // Change image every intervalTime milliseconds
}

function desktopInitializeSlider7() {
    const slides = document.querySelectorAll('.slide7');
    let currentIndex = 0;
    const intervalTime = 5000; // Interval time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
                console.log(`Showing slide ${i}`);
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
                console.log(`Hiding slide ${i}`);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        console.log(`Next slide index: ${currentIndex}`);
        showSlide(currentIndex);
    }

    // Initial setup
    showSlide(currentIndex);

    // Start the loop
    setInterval(nextSlide, intervalTime); // Change image every intervalTime milliseconds
}

function desktopInitializeSlider2Page7() {
    const slides = document.querySelectorAll('.slide7-2');
    let currentIndex = 0;
    const intervalTime = 10000; // Interval time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
                console.log(`Showing slide ${i}`);
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
                console.log(`Hiding slide ${i}`);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        console.log(`Next slide index: ${currentIndex}`);
        showSlide(currentIndex);
    }

    // Initial setup
    showSlide(currentIndex);

    // Start the loop
    setInterval(nextSlide, intervalTime); // Change image every intervalTime milliseconds
}

function desktopInitializeSlider3Page7() {
    const slides = document.querySelectorAll('.slide7-3');
    let currentIndex = 0;
    const intervalTime = 5000; // Interval time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
                console.log(`Showing slide ${i}`);
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
                console.log(`Hiding slide ${i}`);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        console.log(`Next slide index: ${currentIndex}`);
        showSlide(currentIndex);
    }

    // Initial setup
    showSlide(currentIndex);

    // Start the loop
    setInterval(nextSlide, intervalTime); // Change image every intervalTime milliseconds
}

// Ensure the code runs only when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    if (isDesktop()) {
        console.log("Device is desktop");

        // Initialize desktop-specific functions for page2
        // desktopFixedHeaderFunction();
        desktopSliderFunction();
        desktopInitializeSlider();
        desktopInitializeSlider7();
        desktopInitializeSlider2Page7();
        desktopInitializeSlider3Page7();
    } else {
        console.log("Device is not desktop");
    }
});



// Function to detect if the device is mobile
function isMobile() {
    return window.matchMedia("(max-width: 993px)").matches;
}

// Ensure the code runs only when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    if (isMobile()) {
        console.log("Running mobile-specific scripts...");

        // Mobile-specific JavaScript functions

        // Slider functionality
function mobileSliderFunction() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    // Function to handle image load event
    function handleImageLoad() {
        const slideHeight = this.offsetHeight; // Get the height of the loaded image
        nextSlide(slideHeight); // Call nextSlide function with the slideHeight
    }

    // Attach load event listener to each image
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        img.addEventListener('load', handleImageLoad);
    });

    // Function to transition to the next slide
    function nextSlide(slideHeight) {
        index++;
        if (index === slides.length) {
            index = 0;
        }
        const translateY = -index * slideHeight + 'px';
        slider.style.transform = `translateY(${translateY})`;
    }

    setInterval(() => {
        // Start the slideshow once all images are loaded
        const allImagesLoaded = Array.from(slides).every(slide => slide.querySelector('img').complete);
        if (allImagesLoaded) {
            const slideHeight = slides[0].querySelector('img').offsetHeight;
            nextSlide(slideHeight);
        }
    }, 5000);
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', mobileSliderFunction);

        // Fixed header change on scroll
        function mobileFixedHeaderFunction() {

            var header = document.getElementById('fixedHeader');
            var mlogo = document.querySelector('.mobile-only #mlogo');
            var button = document.querySelector('.mobile-only #scrollButton');
            var nav = document.querySelector('.mobile-only nav');
            var logo = document.querySelector('.mobile-only #logo');

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
                    console.log('Scrolled 5% of Page 1 - changing colors and logo');
                    // Change colors and logo when scrolled 5% of page1
                    header.style.backgroundColor = '#ffffff';
                    button.style.color = '#ffffff';
                    button.style.backgroundColor = '#000000';
                    mlogo.src = 'Images/logo_black.png';
                    mlogo.style = 'width="45px" height="36px';
                    nav.style.display = 'block';
                    logo.style.display = 'none';
                } else {
                    console.log('Not scrolled 5% of Page 1 - reverting colors and logo');
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
        }

        // Theme color meta tag change
        function mobileThemeColorMetaFunction() {
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

            function isScrolledTo95PercentOfPage10() {
                var page10 = document.getElementById('page10');
                if (page10) {
                    var page10Height = page10.offsetHeight;
                    var page10Top = page10.offsetTop;
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollThreshold = page10Top + (page10Height * 0.95); // 95% of page10 height

                    return scrollTop >= scrollThreshold;
                } else {
                    console.error('Page 10 element not found.');
                    return false;
                }
            }

            function isScrolledTo25PercentOfPage11() {
                var page11 = document.getElementById('page11');
                if (page11) {
                    var page11Top = page11.offsetTop;
                    var page11Height = page11.offsetHeight;
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollThreshold = page11Top + (page11Height * 0.25); // 25% of page11 height

                    return scrollTop >= scrollThreshold;
                } else {
                    console.error('Page 11 element not found.');
                    return false;
                }
            }

            function handleScroll() {
                var scrolledTo95PercentOfPage2 = isScrolledTo95PercentOfPage2();
                var scrolledTo25PercentOfPage3 = isScrolledTo25PercentOfPage3();
                var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
                var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();
                var scrolledTo95PercentOfPage10 = isScrolledTo95PercentOfPage10();
                var scrolledTo25PercentOfPage11 = isScrolledTo25PercentOfPage11();

                if (scrolledTo95PercentOfPage2 && !scrolledTo25PercentOfPage3) {
                    console.log('Scrolled to 95% of Page 2 and not 25% of Page 3 - changing meta color to green');
                    // Change meta tag color to green when scrolled to 95% of page2 and not scrolled to 25% of page3
                    themeColorMeta.setAttribute('content', '#38FF27');
                } else if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
                    console.log('Scrolled to 95% of Page 8 and not 95% of Page 9 - changing meta color to grey');
                    // Change meta tag color to grey when scrolled to 95% of page8 and not scrolled to 95% of page9
                    themeColorMeta.setAttribute('content', '#f4f4f4');
                }
                  else if (scrolledTo95PercentOfPage10 && !scrolledTo25PercentOfPage11) {
                    console.log('Scrolled to 95% of Page 10 and not 25% of Page 11 - changing meta color to blue');
                    // Change meta tag color to blue when scrolled to 95% of page10 and not scrolled to 95% of page11
                    themeColorMeta.setAttribute('content', '#00C9FF');
                }
                else {
                    console.log('Resetting meta color to white');
                    // Reset meta tag color to white if none of the above conditions are met
                    themeColorMeta.setAttribute('content', '#ffffff');
                }
            }

            // Initial call to handleScroll() to set initial state based on page load position
            handleScroll();

            // Attach scroll event listener to the window
            window.addEventListener('scroll', handleScroll);
        }

        // Fixed header color change to green on page 3
        function mobileFixedHeaderGreenFunction() {
            var header = document.getElementById('fixedHeader');

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

            function handleScroll() {
                var scrolledTo90PercentOfPage2 = isScrolledTo90PercentOfPage2();
                var scrolledTo25PercentOfPage3 = isScrolledTo25PercentOfPage3();

                if (scrolledTo90PercentOfPage2 && !scrolledTo25PercentOfPage3) {
                    console.log('Scrolled to 95% of Page 2 and not 25% of Page 3 - changing header color to green');
                    // Change header color to green if scrolled to 95% of page2 and not scrolled to 25% of page3
                    header.style.backgroundColor = '#38FF27';
                }
            }

            // Initial call to handleScroll() to set initial state based on page load position
            handleScroll();

            // Attach scroll event listener to the window
            window.addEventListener('scroll', handleScroll);
        }

// Function to initialize the slider
function initializeSlider() {
  const slides = document.querySelectorAll('.slide4-mobile');
  let currentIndex = 0;
  const intervalTime = 5000; // Interval time in milliseconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        slide.classList.remove('inactive');
        console.log(`Showing slide ${i}`);
      } else {
        slide.classList.remove('active');
        slide.classList.add('inactive');
        console.log(`Hiding slide ${i}`);
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log(`Next slide index: ${currentIndex}`);
    showSlide(currentIndex);
  }

  // Initial setup
  showSlide(currentIndex);

  // Start the loop
  setInterval(nextSlide, intervalTime); // Change image every intervalTime milliseconds
}

// Call initializeSlider function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeSlider();
});


        // Fixed header color change to grey on page 9
        function mobileFixedHeaderGreyFunction() {
            var header = document.getElementById('fixedHeader');

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
                var scrolledTo95PercentOfPage8 = isScrolledTo95PercentOfPage8();
                var scrolledTo95PercentOfPage9 = isScrolledTo95PercentOfPage9();

                if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
                    console.log('Scrolled to 95% of Page 8 and not 95% of Page 9 - changing header color to grey');
                    // Change header color to grey if scrolled to 95% of page8 and not scrolled to 95% of page9
                    header.style.backgroundColor = '#f4f4f4';
                }
            }

            // Initial call to handleScroll() to set initial state based on page load position
            handleScroll();

            // Attach scroll event listener to the window
            window.addEventListener('scroll', handleScroll);
        }

// Fixed header color change to blue on page 11
        function mobileFixedHeaderBlueFunction() {
            var header = document.getElementById('fixedHeader');

            function isScrolledTo95PercentOfPage10() {
                var page10 = document.getElementById('page10');
                if (page10) {
                    var page10Height = page10.offsetHeight;
                    var page10Top = page10.offsetTop;
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollThreshold = page10Top + (page10Height * 0.95); // 95% of page10 height

                    return scrollTop >= scrollThreshold;
                } else {
                    console.error('Page 10 element not found.');
                    return false;
                }
            }

            function isScrolledTo25PercentOfPage11() {
                var page11 = document.getElementById('page11');
                if (page11) {
                    var page11Top = page11.offsetTop;
                    var page11Height = page11.offsetHeight;
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollThreshold = page11Top + (page11Height * 0.25); // 25% of page11 height

                    return scrollTop >= scrollThreshold;
                } else {
                    console.error('Page 11 element not found.');
                    return false;
                }
            }

            function handleScroll() {
                var scrolledTo95PercentOfPage10 = isScrolledTo95PercentOfPage10();
                var scrolledTo25PercentOfPage11 = isScrolledTo25PercentOfPage11();

                if (scrolledTo95PercentOfPage10 && !scrolledTo25PercentOfPage11) {
                    console.log('Scrolled to 95% of Page 10 and not 25% of Page 11 - changing header color to blue');
                    // Change header color to grey if scrolled to 95% of page8 and not scrolled to 95% of page9
                    header.style.backgroundColor = '#00C9FF';
                }
            }

            // Initial call to handleScroll() to set initial state based on page load position
            handleScroll();

            // Attach scroll event listener to the window
            window.addEventListener('scroll', handleScroll);
        }

        // Function to initialize all mobile-specific functionality
        function initializeMobileFunctions() {
            mobileSliderFunction();
            mobileFixedHeaderFunction();
            mobileThemeColorMetaFunction();
            mobileFixedHeaderGreenFunction();
            initializeSlider()
            mobileFixedHeaderGreyFunction();
            mobileFixedHeaderBlueFunction()
            // Call other mobile-specific functions here
        }

        // Initialize all mobile functions
        initializeMobileFunctions();
    }
});


//         document.addEventListener('DOMContentLoaded', () => {
//         const collapsibles = document.querySelectorAll('.collapsible');

//     collapsibles.forEach(collapsible => {
//     const toggleIcon = collapsible.querySelector('.toggle-icon');
//     const hiddenContent = collapsible.querySelector('.hidden-content');

//     toggleIcon.addEventListener('click', () => {
//       hiddenContent.classList.toggle('active');
//       toggleIcon.classList.toggle('active');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('.collapsible');
    console.log('Collapsibles found:', collapsibles.length); // Log the number of collapsibles found

    collapsibles.forEach(collapsible => {
        const toggleIcon = collapsible.querySelector('.toggle-icon');
        const hiddenContent = collapsible.querySelector('.hidden-content');

        if (toggleIcon && hiddenContent) { // Ensure both elements exist
            toggleIcon.addEventListener('click', () => {
                hiddenContent.classList.toggle('active');
                toggleIcon.classList.toggle('active');
            });
        } else {
            console.error('Missing .toggle-icon or .hidden-content for a collapsible element:', collapsible);
        }
    });
});



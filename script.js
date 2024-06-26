// Utility functions
function isDesktop() {
    return window.matchMedia("(min-width: 993px)").matches;
}

function isMobile() {
    return window.matchMedia("(max-width: 992px)").matches;
}

// Mobile-specific slider function with debug logs
function mobileSliderFunction() {
    console.log('mobileSliderFunction called');
    const slider = document.querySelector('.mobile-only .slider');
    const slides = document.querySelectorAll('.mobile-only .slide');

    if (!slider || slides.length === 0) {
        console.error('Mobile slider or slides not found for mobileSliderFunction');
        return;
    }

    let index = 0;

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        img.onload = function() {
            slide.style.height = img.offsetHeight + 'px';
        };
        if (img.complete) {
            img.onload();
        }
    });

    function nextSlide() {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateY(-${slides[index].offsetTop}px)`;
    }

    setInterval(nextSlide, 5000);
}

// Desktop-specific slider function
function desktopSliderFunction() {
    console.log('desktopSliderFunction called');
    const slider = document.querySelector('.desktop-only .slider');
    const slides = document.querySelectorAll('.desktop-only .slide');
    let index = 0;

    if (!slider || slides.length === 0) {
        console.error('Desktop slider or slides not found for desktopSliderFunction');
        return;
    }

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        img.onload = function() {
            slide.style.height = img.offsetHeight + 'px';
        };
        if (img.complete) {
            img.onload();
        }
    });

    function nextSlide() {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateY(-${slides[index].offsetTop}px)`;
    }

    setInterval(nextSlide, 5000);
}

// Generic slider initialization function
function initializeSlider(selector, intervalTime = 5000) {
    console.log(`initializeSlider called with selector: ${selector}`);
    const slides = document.querySelectorAll(selector);
    let currentIndex = 0;

    if (slides.length === 0) {
        console.error(`No slides found for selector: ${selector}`);
        return;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.classList.toggle('inactive', i !== index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
}

// Function to initialize fixed header for mobile
function mobileFixedHeaderFunction() {
    const header = document.getElementById('fixedHeader');
    const mlogo = document.querySelector('.mobile-only #mlogo');
    const button = document.querySelector('.mobile-only #scrollButton');
    const nav = document.querySelector('.mobile-only nav');
    const logo = document.querySelector('.mobile-only #logo');
    const originalLogoSrc = mlogo.src;

    function isScrolled5PercentOfPage1() {
        const page1 = document.getElementById('page1');
        if (page1) {
            const scrollTop = window.scrollY || window.pageYOffset;
            const scrollThreshold = page1.offsetHeight * 0.10;
            return scrollTop >= scrollThreshold;
        } else {
            console.error('Page 1 element not found.');
            return false;
        }
    }

    function changeColorsAndLogo() {
        if (isScrolled5PercentOfPage1()) {
            header.style.backgroundColor = '#ffffff';
            button.style.color = '#ffffff';
            button.style.backgroundColor = '#000000';
            mlogo.src = 'Images/logo_black.png';
            mlogo.style.width = '45px';
            mlogo.style.height = '27px';
            nav.style.display = 'block';
            logo.style.display = 'none';
        } else {
            header.style.backgroundColor = 'transparent';
            button.style.color = '#000000';
            button.style.backgroundColor = '#ffffff';
            mlogo.src = originalLogoSrc;
            nav.style.display = 'none';
            logo.style.display = 'block';
        }
    }

    changeColorsAndLogo();
    window.addEventListener('scroll', changeColorsAndLogo);
}

// Function to handle theme color meta change for mobile
function mobileThemeColorMetaFunction() {
    const themeColorMeta = document.getElementById('theme-color-meta');

    function isScrolledToThreshold(pageId, thresholdPercent) {
        const page = document.getElementById(pageId);
        if (page) {
            const pageTop = page.offsetTop;
            const pageHeight = page.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = pageTop + (pageHeight * thresholdPercent);
            return scrollTop >= scrollThreshold;
        } else {
            console.error(`${pageId} element not found.`);
            return false;
        }
    }

    function handleScroll() {
        const scrolledTo95PercentOfPage2 = isScrolledToThreshold('page2', 0.95);
        const scrolledTo25PercentOfPage3 = isScrolledToThreshold('page3', 0.25);
        const scrolledTo95PercentOfPage8 = isScrolledToThreshold('page8', 0.95);
        const scrolledTo95PercentOfPage9 = isScrolledToThreshold('page9', 0.95);
        const scrolledTo95PercentOfPage10 = isScrolledToThreshold('page10', 0.95);
        const scrolledTo25PercentOfPage11 = isScrolledToThreshold('page11', 0.25);

        if (scrolledTo95PercentOfPage2 && !scrolledTo25PercentOfPage3) {
            themeColorMeta.setAttribute('content', '#38FF27');
        } else if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
            themeColorMeta.setAttribute('content', '#f4f4f4');
        } else if (scrolledTo95PercentOfPage10 && !scrolledTo25PercentOfPage11) {
            themeColorMeta.setAttribute('content', '#00C9FF');
        } else {
            themeColorMeta.setAttribute('content', '#ffffff');
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

// Function to initialize fixed header color change for mobile on page 3
function mobileFixedHeaderGreenFunction() {
    const header = document.getElementById('fixedHeader');

    function isScrolledToThreshold(pageId, thresholdPercent) {
        const page = document.getElementById(pageId);
        if (page) {
            const pageTop = page.offsetTop;
            const pageHeight = page.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = pageTop + (pageHeight * thresholdPercent);
            return scrollTop >= scrollThreshold;
        } else {
            console.error(`${pageId} element not found.`);
            return false;
        }
    }

    function handleScroll() {
        const scrolledTo90PercentOfPage2 = isScrolledToThreshold('page2', 0.90);
        const scrolledTo25PercentOfPage3 = isScrolledToThreshold('page3', 0.25);

        if (scrolledTo90PercentOfPage2 && !scrolledTo25PercentOfPage3) {
            header.style.backgroundColor = '#38FF27';
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

// Function to initialize fixed header color change for mobile on page 9
function mobileFixedHeaderGreyFunction() {
    const header = document.getElementById('fixedHeader');

    function isScrolledToThreshold(pageId, thresholdPercent) {
        const page = document.getElementById(pageId);
        if (page) {
            const pageTop = page.offsetTop;
            const pageHeight = page.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = pageTop + (pageHeight * thresholdPercent);
            return scrollTop >= scrollThreshold;
        } else {
            console.error(`${pageId} element not found.`);
            return false;
        }
    }

    function handleScroll() {
        const scrolledTo95PercentOfPage8 = isScrolledToThreshold('page8', 0.95);
        const scrolledTo95PercentOfPage9 = isScrolledToThreshold('page9', 0.95);

        if (scrolledTo95PercentOfPage8 && !scrolledTo95PercentOfPage9) {
            header.style.backgroundColor = '#f4f4f4';
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

// Function to initialize fixed header color change for mobile on page 11
function mobileFixedHeaderBlueFunction() {
    const header = document.getElementById('fixedHeader');

    function isScrolledToThreshold(pageId, thresholdPercent) {
        const page = document.getElementById(pageId);
        if (page) {
            const pageTop = page.offsetTop;
            const pageHeight = page.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = pageTop + (pageHeight * thresholdPercent);
            return scrollTop >= scrollThreshold;
        } else {
            console.error(`${pageId} element not found.`);
            return false;
        }
    }

    function handleScroll() {
        const scrolledTo95PercentOfPage10 = isScrolledToThreshold('page10', 0.95);
        const scrolledTo25PercentOfPage11 = isScrolledToThreshold('page11', 0.25);

        if (scrolledTo95PercentOfPage10 && !scrolledTo25PercentOfPage11) {
            header.style.backgroundColor = '#00C9FF';
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

// Function to initialize collapsible content
function initializeCollapsibles() {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        const toggleIcon = collapsible.querySelector('.toggle-icon');
        const hiddenContent = collapsible.querySelector('.hidden-content');

        if (toggleIcon && hiddenContent) {
            toggleIcon.addEventListener('click', () => {
                hiddenContent.classList.toggle('active');
                toggleIcon.classList.toggle('active');
            });
        } else {
            console.error('Missing .toggle-icon or .hidden-content for a collapsible element:', collapsible);
        }
    });
}

// Function to initialize all desktop-specific functionalities
function initializeDesktopFunctions() {
    console.log('Initializing desktop functions');
    desktopSliderFunction();
    initializeSlider('.desktop-only .slide4');
    initializeSlider('.desktop-only .slide7');
    initializeSlider('.desktop-only .slide7-2', 10000);
    initializeSlider('.desktop-only .slide7-3');
}

// Function to initialize all mobile-specific functionalities
function initializeMobileFunctions() {
    console.log('Initializing mobile functions');
    mobileSliderFunction();
    mobileFixedHeaderFunction();
    mobileThemeColorMetaFunction();
    mobileFixedHeaderGreenFunction();
    mobileFixedHeaderGreyFunction();
    mobileFixedHeaderBlueFunction();
    initializeSlider('.mobile-only .slide4-mobile');
}

// Ensure the code runs only when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    if (isDesktop()) {
        initializeDesktopFunctions();
    } else if (isMobile()) {
        initializeMobileFunctions();
    }
    initializeCollapsibles();
});


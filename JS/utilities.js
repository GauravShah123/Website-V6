class nav extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <nav class="inactive">
            <a href="/" class="logo-wapper"><img src="./Images/Logo.svg" alt="Gaurav Shah Logo" class="nav-logo"></a>
            <ul>
                <li>
                    <a id="nav-menu-home" href="#">Home</a>
                </li>
                <li>
                    <a id="nav-menu-home hide-desktop" href="#selected-works" onclick="toggleNavClassAndNavigate();">Projects</a>
                </li>
                <li>
                    <a id="nav-menu-about" href="/About/about.html">About</a>
                </li>
                <li>
                    <a href="/Resume.pdf" target="_blank" id="nav-menu-resume">Résumé</a>
                </li>
                <li class="cta-wrapper">
                    <button class="cta lets-talk">Let's Talk<span class="material-symbols-outlined">arrow_forward</span></button>
                </li>
            </ul>
            <div class="hamburger nav-hamburger hide-desktop" id="hamburger-6" onclick="navOpen()">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </nav>

        <!-- Let's Talk Modal -->
        <div class="modal-bg-overlay modal-closed">
            <div class="modal">

                <div class="email-copy">
                    <p>gshah@uwaterloo.ca</p>
                    <button class="email-copy-button" id="email-copy-button">Copy</button>
                </div>
                <p>OR</p>
                <a href="https://calendly.com/gs336/30min"><button class="modal-calendly">Schedule a meeting via Calendly</button></a>
                
            </div>
            <button class="close-modal"><span class="material-symbols-outlined">close</span></button>
        </div>
        `
    }
}

function navOpen() {

    document.querySelector("nav").classList.toggle("inactive");
    document.querySelector(".hamburger").classList.toggle("is-active");

}

function toggleNavClassAndNavigate() {
    // Toggle the class on the <nav> element
    document.querySelector("nav").classList.toggle("inactive");
    document.querySelector(".hamburger").classList.toggle("is-active");

    // Get the href attribute of the clicked link
    var linkHref = document.getElementById("nav-menu-home").getAttribute("href");

    // Navigate to the link
    window.location.href = linkHref;
}

class footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- Footer -->
        <footer>
            <div class="footer-about">
            <a href="/" class="logo-wapper"><img src="./Images/Logo.svg" alt="Gaurav's Logo"></a>
                <p>Gaurav Shah, a Global Business and Digital Arts student at the University of Waterloo, is passionate
                    about product management and creating user-centric experiences that drive business growth.</p>
            </div>
            <div class="footer-contact">
                <h3>Contact</h3>
                <ul class="contacts">
                    <li><a href="mailto:gshah@uwaterloo.ca"><span
                                class="material-icons-outlined">email</span>&nbsp;&nbsp;gshah@uwaterloo.ca</a></li>
                    <li><a href="https://www.linkedin.com/in/gs336/"><span class="material-icons-outlined">link</span>&nbsp;&nbsp;linkedin.com/in/gs336/</a></li>
                    <li><span class="material-icons-outlined">location_on</span>&nbsp;&nbsp;Waterloo, Ontario, CA</li>
                </ul>
                <button class="button-flex lets-talk">Let's Talk <span
                        class="material-symbols-outlined">arrow_forward</span></button>
            </div>
        </footer>
    
        <!-- Ending -->
        <div class="ending">
            Made with love, fueled by hot cocoa - Gaurav Shah's portfolio.
        </div>
        `
    }
}

customElements.define("nav-content", nav);
customElements.define("footer-content", footer);

// Close the Modal
const modalBgOverlay = document.querySelector('.modal-bg-overlay');
const modal = document.querySelector('.modal');

function closeModal() {
    modalBgOverlay.classList.add('modal-closed');
    modalBgOverlay.setAttribute('aria-hidden', 'true');
}

modalBgOverlay.addEventListener('click', function (event) {
    if (event.target === modalBgOverlay) {
        closeModal();
    }
});

document.querySelector('.close-modal').addEventListener('click', function (event) {
    closeModal();
});

// Open the Modal
const letsTalkButtons = document.querySelectorAll('.lets-talk');
letsTalkButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log("HI")
        modalBgOverlay.classList.remove('modal-closed');
        modalBgOverlay.setAttribute('aria-hidden', 'false');
    });
});


// Copy Email
const emailCopyButton = document.getElementById('email-copy-button');
const emailCopyText = document.querySelector('.email-copy p');

emailCopyButton.addEventListener('click', function () {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = emailCopyText.textContent;
    document.body.appendChild(textarea);

    // Copy the email text to the clipboard
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Update the button text
    emailCopyButton.textContent = 'Copied!';
    setTimeout(closeModal, 1000);
    setTimeout(copyTexttoNormal, 1500);
});

function copyTexttoNormal() {
    emailCopyButton.textContent = 'Copy';
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
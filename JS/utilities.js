class nav extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <nav class="inactive">
            <a href="/" class="logo-wapper"><img src="./Images/Logo.svg" alt="Gaurav Shah Logo" class="nav-logo"></a>
            <ul>
                <li>
                    <p class="hide-desktop">01</p>
                    <a id="nav-menu-home" href="#">Home</a>
                </li>
                <li class="hide-desktop" style="display: flex;">
                    <p class="hide-desktop">02</p>
                    <a id="nav-menu-home" href="#selected-works" onclick="toggleNavClassAndNavigate();">Projects</a>
                </li>
                <li>
                    <p class="hide-desktop">03</p>
                    <a id="nav-menu-about" href="/About/about.html">About</a>
                </li>
                <li>
                    <p class="hide-desktop">04</p>
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
                <a href="https://calendly.com/gs336/one-on-one"><button class="modal-calendly">Schedule a meeting via Calendly</button></a>
                
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
                <button class="button-flex lets-talk">Let's Talk <span
                    class="material-symbols-outlined">arrow_forward</span></button>
        </div>
        <div class="footer-links-columns-wrapper">
            <div class="footer-case-studies footer-links-column">
                <h3>Case Studies</h3>
                <ul>
                    <li><a href="/Works/Photobooth/photobooth.html">Photobooth</a></li>
                    <li><a href="/Works/InvestMint/InvestMint.html">InvestMint</a></li>
                    <li><a href="/Works/MunchMap/munchmap.html">MunchMap</a></li>
                    <li><a href="/Works/UWMA/UWMA.html">UW Marketing</a></li>

                </ul>
            </div>
            <div class="footer-side-quests footer-links-column">
                <h3>Side Quests</h3>
                <ul>
                    <li><a href="https://www.figma.com/slides/ZZGNo8jGOSPNz2ijmYalzH/The-Art-of-Product-Design-(Starter-Hacks)?node-id=1-294&t=lEXZc0uBZQfRGwej-1" target="_blank">Workshops</a></li>
                    <li><a href="https://youtube.com/playlist?list=PLQ9o7MQ_dB9h0b-oqIfKf-Zqt4M0w0IVp&si=ACdHhkaMszbmGMu2" target="_blank">GBDAonAir Podcast</a></li>
                    <li><a href="https://www.figma.com/design/Zxy72zt1k3NyiSI7V3d1ng/Reno-Font-%5BSharable%5D?node-id=0-1&t=HG1Ulr4LHY8ThybN-1" target="_blank">Reno Font</a></li>
                    <li><a href="https://www.figma.com/design/sUF3K0qORaujpwlfE7M9vx/Posters-%5BSharable%5D?node-id=0-1&t=0xqXOG41Tk3mT3VX-1" target="_blank">Poster Series</a></li>
                    <li><a href="https://www.figma.com/design/7PvjPswt2MMWZU3XwzddYo/YC-Homepage-Redesigns-%5BSharable%5D?node-id=0-1&t=RavBPAkCheboHRSt-1" target="_blank">YC Redesigns</a></li>
                    <li><a href="https://www.figma.com/design/iIP2RTL9JAANCg2Fdv6bnn/Jet-Lag%3A-The-Game-%5BSharable%5D?node-id=1-894&t=x97BAVfZxDZWPCo5-1" target="_blank">Jet Lag: The Game</a></li>

                </ul>
            </div>
            <div class="footer-contact footer-links-column">
                <h3>Contact</h3>
                <ul class="contacts">
                    <li><a href="mailto:gshah@uwaterloo.ca"><span
                                class="material-icons-outlined">email</span>&nbsp;&nbsp;gshah@uwaterloo.ca</a></li>
                    <li><a href="https://www.linkedin.com/in/gs336/"><span
                                class="material-icons-outlined">link</span>&nbsp;&nbsp;linkedin.com/in/gs336/</a></li>
                    <li><span class="material-icons-outlined">location_on</span>&nbsp;&nbsp;Waterloo, Ontario, CA</li>
                </ul>
                
            </div>
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
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
            <!--<li>
                <a href="#selected-works" id="nav-menu-projects">Projects</a>
            </li>-->
            <li>
                <a id="nav-menu-about" href="/About/about.html">About</a>
            </li>
            <li>
                <a href="/Resume.pdf" target="_blank" id="nav-menu-resume">Résumé</a>
            </li>
            <li class="cta-wrapper">
                <button class="cta">Let's Talk<span class="material-symbols-outlined">arrow_forward</span></button>
            </li>
        </ul>
        <span class="material-symbols-outlined nav-hamburger hide-desktop" onclick="navOpen()">menu</span>
    </nav>
        `
    }
}

function navOpen(){

    document.querySelector("nav").classList.toggle("inactive");
    
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


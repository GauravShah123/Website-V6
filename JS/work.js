// Create Table of Contents with all h2

let container = document.querySelector(".content");
let headers = container.querySelectorAll('h2');

let aside = document.querySelector("aside");

for (let i = 0; i < headers.length; i++) {
    let element = headers[i];
    element.setAttribute("id", i);
    aside.innerHTML += `<a href="#` + i + `">` + headers[i].innerText + `</a>`;
}

// Show Nav Bar when user scrolls up
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (previousScrollPosition - currentScrollPosition > 0 || currentScrollPosition < 75) {
        // User has scrolled up
        document.querySelector("nav").classList.remove("hide");
        // document.querySelector("aside").classList.remove("up");
    } else {
        // User has scrolled down or the scroll position hasn't changed
        document.querySelector("nav").classList.add("hide");
        // document.querySelector("aside").classList.add("up");
    }

    previousScrollPosition = currentScrollPosition;
});

// Scroll to top button

let scrollButton = document.querySelector(".scroll-to-top")

// Attach a click event listener to scroll to the top
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add the button to the document body
document.body.appendChild(scrollButton);

// Show or hide the button based on the scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 75) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});

//Add image captions based on alt text
document.querySelectorAll("main img").forEach(image => {
    caption = image.getAttribute("alt");
    let captionTag = document.createElement("p");
    captionTag.classList.add("caption");
    captionTag.innerText = caption;
    image.after(captionTag);
});

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function openTab(openTabLink, closeTabLink, tabToOpen, tabToClose){
    let tabToOpenElem = document.querySelector("#"+tabToOpen);
    tabToOpenElem.classList.remove("hide");
    let tabToCloseElem = document.querySelector("#"+tabToClose);
    tabToCloseElem.classList.add("hide");

    //Change the active link
    document.querySelector("#link"+closeTabLink).classList.remove("active");
    document.querySelector("#link"+closeTabLink).setAttribute("aria-selected", "false")
    document.querySelector("#link"+openTabLink).classList.add("active");
    document.querySelector("#link"+closeTabLink).setAttribute("aria-selected", "true")
}

document.querySelector("#overview").innerHTML+=`<div></div><button class="read button-flex" onclick="document.querySelector('.tab').scrollIntoView(); openTab(2, 1, 'case-study', 'overview');">Read Case Study <span
class="material-symbols-outlined">arrow_forward</span></button>`

// Heads up
const headsUpElements = document.querySelectorAll('p.heads-up');

headsUpElements.forEach((element) => {
    const newHTML = '<b>Heads up: </b>';
    element.innerHTML = newHTML + element.innerHTML;
});
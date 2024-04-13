window.onload = function() {
    document.body.scrollLeft = 0;
};
// GBDA Expander Text
document.querySelector(".GBDA").addEventListener("mouseover", function () {
    var width = this.offsetWidth;
    this.style.width = "fit-content";
    this.innerHTML = `<div class='small-gbda-text' style='width:` + width + `px; height: 100%; line-height: 100%; font-size: calc(var(--fz-h2) * 36.5 / 100); display: inline-block'; pointer-events: all; display: flex; alight-items: center; justify-content: center; font-family: 'Clash Display', sans-serif; text-alight: center;>Global Business <br> and Digital Arts</div>`
})

document.querySelector(".about-text").addEventListener("mousemove", function (event) {
    if (!document.querySelector(".GBDA:hover")) {
        document.querySelector(".GBDA").innerHTML = "GBDA";
    }
})

function scrollToPM() {
    let yPos = document.getElementById('why-pm').getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
}

const factsInnerElement = document.querySelector('.facts-inner');
const factsOptions = [
    'wears red jackets.',
    'does things for the plot.',
    'eats a lot of cereal.',
    'loves Bollywood! <3',
    'overuses Figma.',
    'lived on 3 continents.',
    'loves to sing.'
];

let previousIndex;

function getRandomIndex() {
    let newIndex = Math.floor(Math.random() * factsOptions.length);
    // Ensure it doesn't repeat the previous index
    while (newIndex === previousIndex) {
        newIndex = Math.floor(Math.random() * factsOptions.length);
    }
    previousIndex = newIndex;
    return newIndex;
}

setInterval(() => {
    const randomIndex = getRandomIndex();
    factsInnerElement.textContent = factsOptions[randomIndex];
}, 2500);

function pause(){
    const marqueeContent = document.querySelectorAll('.marquee-content');
    marqueeContent.forEach(content => content.classList.toggle('paused'));

    const icon = document.getElementById('icon');
    if (icon.textContent.trim() === 'pause_circle') {
        icon.textContent = 'play_circle';
    } else {
        icon.textContent = 'pause_circle';
    }
}

// Function to create caption below each image
function createCaptions() {
    const marqueeItems = document.querySelectorAll('.marquee-item');
    marqueeItems.forEach(item => {
        const imgAlt = item.querySelector('img').getAttribute('alt');
        const caption = document.createElement('p');
        caption.classList.add('caption');
        caption.textContent = imgAlt;
        item.appendChild(caption);
    });
}

// Call the function to create captions
createCaptions();
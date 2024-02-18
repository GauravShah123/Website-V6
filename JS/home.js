document.getElementById("nav-menu-home").classList.add("active");

document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector('.big-footer-h1');
    const glowingCircle = document.querySelector('.big-footer .glowing-circle');
  
    let mouseX = 0;
    let mouseY = 0;
  
    function updateCirclePosition() {
      const dx = mouseX - glowingCircle.offsetLeft;
      const dy = mouseY - glowingCircle.offsetTop;
      glowingCircle.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy - 425}px)`;
      requestAnimationFrame(updateCirclePosition);
    }
  
    glowingCircle.style.opacity = 0; // Initially hide the glowing circle
  
    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    name.addEventListener("mouseenter", function () {
      const rect = name.getBoundingClientRect();
      glowingCircle.style.left = rect.left + window.pageXOffset + rect.width / 2 + "px";
      glowingCircle.style.top = rect.top + window.pageYOffset + rect.height / 2 + "px";
      glowingCircle.style.opacity = 1;
      glowingCircle.style.height = "200px";
      updateCirclePosition();
    });
  
    name.addEventListener("mouseleave", function () {
      glowingCircle.style.opacity = 0;
      glowingCircle.style.height = "10px";

    });
  });
  
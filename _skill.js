const wrapper = document.getElementById("skillsWrapper");
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

// Button scroll
rightBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: 200, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: -200, behavior: "smooth" });
});

// Drag scroll (premium feel 😏)
let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("mouseleave", () => {
    isDown = false;
});

wrapper.addEventListener("mouseup", () => {
    isDown = false;
});

wrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 2;
    wrapper.scrollLeft = scrollLeft - walk;
});
const sections = document.querySelectorAll("section");
const beau = document.querySelector('.beau');
const gradients =["linear-gradient(to right, #155799, #159957)",
                  "linear-gradient(to right, #021B79, #0575E6)",
                  "linear-gradient(to right, #b31217, #e52d27)",
                  "linear-gradient(to right, #292a2c, #232526)"
                ];
const options ={
        threshold : 0.1
};
let a = new IntersectionObserver(navCheck,options);
function navCheck(entries) {
    entries.forEach(entry=> {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions ={
            height: coords.height,
            width : coords.width,
            top :coords.top,
            left :coords.left
        };
        if (entry.isIntersecting){
            beau.style.setProperty("left", `${directions.left}px`);
            beau.style.setProperty("top", `${directions.top}px`);
            beau.style.setProperty("height", `${directions.height}px`);
            beau.style.setProperty("width", `${directions.width}px`);
            beau.style.background=gradients[gradientIndex]
        }
    
    });
}
sections.forEach(section=>{
    a.observe(section);
});

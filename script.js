let elementsArray = document.querySelectorAll(".fade--up, .fade--in, .fade--up-delay, .fade--in-delay");
console.log(elementsArray);
window.addEventListener('scroll', fadeUp ); 
function fadeUp() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeUp();



let outer = document.getElementById('outer'),
        wrapper = document.getElementById('wrap'),
        maxWidth  = outer.clientWidth,
        maxHeight = outer.clientHeight;
window.addEventListener("resize", resize);
resize();
function resize(){let scale,
    width = window.innerWidth,
    height = window.innerHeight,
    isMax = width >= maxWidth && height >= maxHeight;

    scale = Math.min(.9*(width/maxWidth), .9*(height/maxHeight));
    outer.style.transform = isMax?'':'scale(' + scale + ')';
    wrapper.style.width = isMax?'':maxWidth * scale;
    wrapper.style.height = isMax?'':maxHeight * scale;
}
const square = document.createElement('div');
document.body.appendChild(square);

let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";
let grow = true; //flaga

window.addEventListener('scroll', function() {
    if (size >= window.innerHeight / 2) {
        grow = false;   //grow = !grow --> odwrócenie wartości;
    }

    else if (size <= 0) {
        grow = true;
    }

    if (grow == true) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

    else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
})
    

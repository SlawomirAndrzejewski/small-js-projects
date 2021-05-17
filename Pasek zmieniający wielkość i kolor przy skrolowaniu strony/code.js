const div = document.createElement('div');
document.body.appendChild(div);
let size = 20;
let grow = true;
 
 document.body.style.height = "10000px";
 div.style.width = "100%";
 div.style.height = size;
 div.style.position = "fixed";
 div.style.left = "0";
 div.style.top = "0";
 div.style.backgroundColor = "green";

const changeHeight = function() {
    if (size >= window.innerHeight / 2) {
        grow = false;
    }

    else if (size <= 0) {
        grow = true;
    }

    if (grow == true) {
        size += 10;
        div.style.height = size + "px";
        div.style.backgroundColor = "green";
    }
    else {
        size -= 10;
        div.style.height = size + "px";
        div.style.backgroundColor = "yellow";
    }
}

 document.addEventListener('scroll', changeHeight);

 



 
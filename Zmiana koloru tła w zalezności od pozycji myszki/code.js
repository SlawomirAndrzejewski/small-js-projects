const body = document.querySelector('body');

body.addEventListener('click', () => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);
    if (x % 2 == 0 && y % 2 == 0){
        body.style.backgroundColor = 'red';
    }
    else if (x % 2 != 0 && y % 2 != 0) {
        body.style.backgroundColor = 'blue';
    }
    else {
        body.style.backgroundColor = 'green';
    } 
}) 
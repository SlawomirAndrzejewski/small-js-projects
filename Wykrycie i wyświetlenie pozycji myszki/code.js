const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY);
    h1.textContent = `${e.clientX}, ${e.clientY}`;
})
const btn = document.querySelector("button");
const list = document.querySelectorAll("li");
let size = 10;

// PĘTLA
btn.addEventListener('click', () => {
    size++;
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'block';
        list[i].style.fontSize = `${size}px`;
    }
})

// METODA FOREACH
btn.addEventListener('click', () => {
    size++;
    list.forEach((listItem) => {
        listItem.style.display = 'block';
        listItem.style.fontSize = size + 'px';
    })
})
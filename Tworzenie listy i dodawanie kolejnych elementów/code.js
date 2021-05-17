let size = 10;
let orderElement = 1;
const btn = document.createElement('button');

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Dodaj elementy listy';
    document.body.appendChild(btn); 

    const ul = document.createElement('ul');
    document.body.appendChild(ul); 

    btn.addEventListener('click', createLiElements); //wywołanie funkcji dodającej elementy listy
}

const createLiElements = () => {
    for (i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }
}

init(); //wywołanie funkcji inicjalizującej

let options = ['Nie', "tak"];
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const addOptions = (e) => {
    e.preventDefault();
    const newOption = input.value;
    options.push(newOption);
    input.value = '';
}

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    console.log(index);
    h1.textContent = options[index];
}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showOptions = () => {
    alert(options.join(' --- --- '));
}

document.querySelector('.add').addEventListener('click', addOptions);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.clean').addEventListener('click', resetOptions);
document.querySelector('.showOptions').addEventListener('click', showOptions);




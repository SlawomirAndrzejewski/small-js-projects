const btn = document.querySelector('button');
const names = ['Martyna', 'Sławomir', 'Barbara', 'Spajkuszek'];
const div = document.querySelector('div');


const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `Wylosowane imię to ${names[index]}`;
}


btn.addEventListener('click', nameGenerator);
const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ['user', 'wiosna', ];
const messages = ['Wyjechałem na zawsze', 'Piękna pora roku'];

input.addEventListener('input', (e) => {
    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
    
    
    
    // console.log(e.target.value);
    // if (password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = '';
    // }
    // else {
    //     div.textContent = '';
    // }
})

input.addEventListener('focus', () => {
    input.classList.add('active');
})

input.addEventListener('blur', () => {
    input.classList.remove('active');
})
const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ['jedEN', 'dWa'];
const messages = ['super', 'działa!'];

const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = '';

    passwords.forEach((item, i) => {
        if(item.toLowerCase() === text.toLowerCase()) {
            div.textContent = messages[i];
        }
    })
    
    // passwords.forEach((password, index) => {
    //     if (password === text) {
    //         div.textContent = messages[index];
    //         e.target.value = '';
    //     }
    // })
}

input.addEventListener('input', showMessage);
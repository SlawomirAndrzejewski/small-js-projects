let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// const changeColor = (e) => {
//     let key = e.keyCode;

//     if (key == 38) {
//         document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
//     }
//     else if (key == 40) {
//         document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
//     }
// }

const changeColor = (e) => {
    let key = e.keyCode;

    switch (key) {
        case 38:
        document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;  
    }
    switch (key) {
        case 40:
        document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;  
    }
}

window.addEventListener('keydown', changeColor);
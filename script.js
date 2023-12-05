const a = 90;
const b = 80;
const c = 70;
const d = 60;
const f = 50;

function Checkgrade(e) {
    e.preventDefault();

    let mygrade = document.querySelector(`#mygrade`).value;

    let message = '<ul>';

    console.log('RUNNING... ' + mygrade)
    if (mygrade >= a) {
       message += `<li> You Have A Grade of A </li>`;
    } else if (mygrade >= b) {
        message += `<li> You Have A Grade of B </li>`;
    } else if (mygrade >= c) {
        message += `<li> You Have A Grade of C </li>`;
    } else if (mygrade >= d) {
        message += `<li> You Have A Grade of D </li>`;
    } else if (mygrade < f) {
        message += `<li> You Have A Grade of F </li>`;
    }
    message += '</ul>'
    document.querySelector('#output').innerHTML = message;
}

document.querySelector(`form`).addEventListener("submit", Checkgrade);

document.querySelector(`form`).addEventListener("Submit", Checkgrade);


const a = 95;
const b = 85;
const c = 75;
const d = 65;
const f = 55;


function Checkgrade(e) {
    e.preventDefault();

    let mygrade = document.querySelector(`input`).value;


    let message = '<ul>';

    console.log('RUNNING... ' + mygrade)
    if (mygrade < a && mygrade >= b) {
       message+= `<li> You Have A Grade of A </li>`;
    }

    if (mygrade < b && mygrade >= c) {
        message += `<li> You Have A Grade of B </li>`;
    }

    if (mygrade < c && mygrade >= d) {
        message += `<li> You Have A Grade of C </li>`;
    }

    if (mygrade < d && mygrade >= f) {
       message += `<li> You Have A Grade of D </li>`;
    }

    if (mygrade < f && mygrade >= f) {
        message += `<li> You Have A Grade of F </li>`;
     }
    message += '</ul>'
    document.querySelector('#output').innerHTML = message;
}
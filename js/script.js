var wizards = ['OH',
               'uh', 
               'POOO'];

// Get the listID element
var listID = document.querySelector('#list');

const list = wizards.map( wizard => (
    `<li> ${wizard} </li>`
    )).join('');

// Create markup
listID.innerHTML = `<ul> ${list} </ul>`;
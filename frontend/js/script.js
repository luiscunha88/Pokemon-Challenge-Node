'use strict'


const corFlex = document.querySelector('.flex-container').style.backgroundColor='#dd55ff';


function pokeType() {
    document.getElementById('type').classList.toggle('show')
}

window.onclick = function(e) {
    if (!e.target.matches('#pokemon-type')) {
        let myDropdown = document.getElementById("type");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
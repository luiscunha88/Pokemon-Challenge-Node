'use-strict'

const pokeType = document.getElementById('poke-type')
const weaknesses = document.getElementById('weaknesses')
const type = document.getElementById('type')

function dropdownType() {
    pokeType.classList.toggle('hidden')
}

function dropdownWeakness() {
    weaknesses.classList.toggle('hidden')
}



// function pokeType() {
//     document.getElementById('poke-type').classList.toggle('hidden')
// }
//
// window.onclick = function(e) {
//     if (!e.target.matches('#type')) {
//         let myDropdown = document.getElementById("poke-type")
//         if (!myDropdown.classList.contains('hidden')) {
//             myDropdown.classList.add('hidden')
//         }
//     }
// }
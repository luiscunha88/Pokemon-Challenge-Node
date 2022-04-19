const axios = require('axios')
const fs = require('fs')

const url = `https://pokeapi.glitch.me/v1/pokemon/`
const dataFolder = `./api-calls/pokeapi-glitch-v1/`
const type = `.json`


// i vai de 1 a 807(api v1 possui informação referente a 807 pokemons)
for(let i=1 ; i< 808 ; i++) {
    // vai ser verificado se existe um ficheiro naquela localização com aquele nome, caso dê erro, é feito o call à API
    // e gravado o ficheiro que está em falta
    fs.access(dataFolder + i + type, function (error) {
        if (error) {
            console.log("DOES NOT exist:" + i )
            axios.get(url + i)
                .then(response => {
                    fs.writeFile(dataFolder + i + type, JSON.stringify(response.data), function (err) {
                        if (err) throw err
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(`Pokemon ${i} saved`)
        } else {
            console.log("exists:" + i);
        }
    })
}

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response
// https://sebhastian.com/node-check-if-file-exists/
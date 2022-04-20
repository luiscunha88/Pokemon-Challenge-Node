const axios = require('axios')
const fs = require('fs')

const url = `https://pokeapi.co/api/v2/ability/`
const dataFolder = `./api-calls/abilities/`
const type = `.json`

for(let i=1 ; i< 268 ; i++) {
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
            console.log(`Type ${i} saved`)
        } else {
            console.log("exists:" + i);
        }
    })
}

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response
// https://sebhastian.com/node-check-if-file-exists/

// https://pokeapi.glitch.me/v1/pokemon/
const fs = require('fs')
const { Pool, Client } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'qaz1234',
    port: 5432,
})

const dataFolder = `./api-calls/pokeapi-v2/`
const type = `.json`

for(let i=1 ; i<808 ; i++){

    fs.readFile(dataFolder + i + type, "utf-8",  (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        let poke = JSON.parse(data)

        //console.log(poke[0])


    pool.query(`UPDATE pokemon SET weight = '${poke.weight/10}', height = '${poke.height/10}', base_exp = '${poke.base_experience}', hp = '${poke.stats[0].base_stat}', atk = '${poke.stats[1].base_stat}', def = '${poke.stats[2].base_stat}', special_attack = '${poke.stats[3].base_stat}', special_defense = '${poke.stats[4].base_stat}', speed = '${poke.stats[5].base_stat}', total ='${poke.stats[0].base_stat + poke.stats[1].base_stat + poke.stats[2].base_stat + poke.stats[3].base_stat + poke.stats[4].base_stat + poke.stats[5].base_stat}' WHERE id = '${i}'`, (err, res) => {
        console.log(err, res);
    })

    })

}


// pool.query(
//     `INSERT INTO pokemon(id, name, species, generation, picture, family, evolution_stage, evolution_line0, evolution_line1, evolution_line2)VALUES('${poke[0].number}','${poke[0].name}','${poke[0].species}', '${poke[0].gen}', '${poke[0].sprite}', '${poke[0].family.id}', '${poke[0].family.evolutionStage}', '${poke[0].family.evolutionLine[0]}', '${poke[0].family.evolutionLine[1]}', '${poke[0].family.evolutionLine[2]}')`,
//     (err, res) => {
//         console.log(err, res);
//     }
// )



// './api-calls/pokeapi-v2/1.json'

// './api-calls/pokeapi-glitch-v1/1.json'
//     console.log(pokemon[0].description) - os dados da api v1 são um vetor de objetos


// https://jsonworld.com/demo/how-to-connect-nodejs-with-postgresql

// https://kb.objectrocket.com/postgresql/how-to-update-a-postgresql-table-with-node-842#insert+some+records+into+the+postgresql+table

// https://ubiq.co/database-blog/how-to-update-multiple-columns-in-postgresql/
const fs = require('fs')
const { Pool, Client } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'qaz1234',
    port: 5432,
})


fs.readFile('./api-calls/pokeapi-glitch-v1/1.json', "utf-8",  (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    let poke = JSON.parse(data)

    console.log(poke[0].number + '\n' + poke[0].name)

    pool.query(`UPDATE pokemon SET name = '${poke[0].name}' WHERE id = 1`, (err, res) => {
        console.log(err, res);
        pool.end();
    })

})


    // `INSERT INTO pokemon(id, weight, height, base_exp, hp, atk, def, special_attack, special_defense, speed)VALUES('${poke.id}','${poke.weight/10}','${poke.height/10}', '${poke.base_experience}','${poke.stats[0].base_stat}', '${poke.stats[1].base_stat}', '${poke.stats[2].base_stat}', '${poke.stats[3].base_stat}', '${poke.stats[4].base_stat}', '${poke.stats[5].base_stat}' )`,

// pool.query(
//     `INSERT INTO pokemon(name, species, description, gender, generation)VALUES('${poke[0].name}','${poke[0].species}', '${poke[0].gender}', '${poke[0].description}', '${poke[0].gen}')`,
//     (err, res) => {
//         console.log(err, res);
//         pool.end();
//     }
// )

// './api-calls/pokeapi-v2/1.json'

// './api-calls/pokeapi-glitch-v1/1.json'
//     console.log(pokemon[0].description) - os dados da api v1 são um vetor de objetos


// https://jsonworld.com/demo/how-to-connect-nodejs-with-postgresql

// https://kb.objectrocket.com/postgresql/how-to-update-a-postgresql-table-with-node-842#insert+some+records+into+the+postgresql+table
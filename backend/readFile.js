const fs = require('fs')
const { Pool, Client } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'qaz1234',
    port: 5432,
})




fs.readFile('./api-calls/pokeapi-v2/1.json', "utf-8",  (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    let poke = JSON.parse(data)
    console.log(poke.id + '\n' + poke.name)

    pool.query(
        "INSERT INTO pokemon(id, name, weight)VALUES(poke.id, poke.name, poke.weight)",
        (err, res) => {
            console.log(err, res);
            pool.end();
        }
    )
})




// './api-calls/pokeapi-v2/1.json'

// './api-calls/pokeapi-glitch-v1/1.json'
//     console.log(pokemon[0].description) - os dados da api v1 são um vetor de objetos
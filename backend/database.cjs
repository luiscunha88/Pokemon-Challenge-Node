const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'qaz1234',
    port: 5432,
})

client.connect()


client.query(
    "INSERT INTO pokemon(id, name, age, address, email)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')",
    (err, res) => {
        console.log(err, res);
        pool.end();
    }
);
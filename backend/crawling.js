import request from "request";
import fs from "fs";

const url = `https://pokeapi.co/api/v2/pokemon/`
const dataFolder = `./api-calls/pokeapi-v2/`
const type = `.json`

for(let i=1 ; i<899 ; i++) {
  request.get(url + i, (error, response, body) => {
    if(error) {
      return console.dir(error)
    }

    fs.writeFile(dataFolder + i + type, body, (err) => {
      if (err) throw err;
      console.log(`Data ${i} written to file`);
    });
    // console.dir(JSON.parse(body))

  })
}

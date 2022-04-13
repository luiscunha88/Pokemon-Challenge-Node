import request from "request";
import axios from "axios"
import fs from "fs";

const url = `https://pokeapi.glitch.me/v1/pokemon/`
const dataFolder = `./api-calls/pokeapi-glitch-v1/`
const type = `.json`

for(let i=1; i< 3 ; i++) {
  axios.get(url + i)
      .then(response => {
        fs.writeFile(dataFolder + i + type, JSON.stringify(response.data), function (err) {
          if(err) throw err
        });
      })
      .catch(err => {
        console.log(err)
      });
      console.log(`Pokemon ${i} saved`)
}

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response
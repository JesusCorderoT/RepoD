

const axios = require('axios');


async function makeGetRequest() {
    const response = await axios.get('https://rickandmortyapi.com/api/character/1');

    let data = response.data;
    console.log(data);


}

makeGetRequest();
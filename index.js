const fs = require("fs");
require('dotenv').config();
const axios = require('axios').default;
const args = process.argv.slice(2);
const dir = `${__dirname}`;
const JsonPath = `${dir}/jsons`;
const startIndex = args[0];
const endIndex = args[1];
const CID = process.env.CID;



const getjson = () => {
    fs.readdir(JsonPath, (err) => {
        if (err) {
        fs.mkdirSync(`${dir}/jsons`, { recursive: true});
        console.log('Creating Path to Store Jsons...');
      }
      });
    console.log(`%cFetching ${endIndex - startIndex + 1} json from ${CID}`, `color: red`);
    //fs.rmSync(JsonPath, { recursive: true, force: true });
    //fs.mkdirSync(`${dir}/jsons`, { recursive: true});
    for(let i = startIndex; i <= endIndex; i++) {
    axios.get(`https://sweetsea.mypinata.cloud/ipfs/${CID}/${i}.json`)
  .then(function (response) {
    fs.writeFileSync(`${JsonPath}/${i}.json`, JSON.stringify(response.data, null, 2));
  })
  .catch(function (error) {
    console.log(error);
  })
}
};

if (endIndex === "10000") {
  console.log("You cant pass 10000 as endindex, MAX 9999")
} else {
  getjson();
}



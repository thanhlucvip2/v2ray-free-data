const axios = require("axios");
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.my-ip.io/ip.json",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

 });

const axios = require("axios");
const express = require("express");
const qs = require("qs");
const dayjs = require("dayjs");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.my-ip.io/ip.json",
    headers: {},
  };

  setInterval(() => {
    const now = dayjs();
    axios
      .request(config)
      .then((response) => {
        postDAta({
          ip: response.data.ip,
          date: now.format("YYYY-MM-DD HH:mm"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 10000);
});

const postDAta = (datasss) => {
  let data = qs.stringify(datasss);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://61a897c033e9df0017ea39cd.mockapi.io/api/ver1/ip",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

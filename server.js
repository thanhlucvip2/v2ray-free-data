const axios = require("axios");
const express = require("express");
const qs = require("qs");
const dayjs = require("dayjs");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://api.myip.com/", requestOptions)
    .then((response) => response.json())
    .then((result) => res.json(result))
    .catch((error) => console.log("error", error));
});
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
        console.log({
          ip: response.data.ip,
          date: now.format("YYYY-MM-DD HH:mm"),
          name: "server 4",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 4000);
});

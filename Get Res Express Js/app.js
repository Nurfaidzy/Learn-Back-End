const express = require("Express");
const https = require("https");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const place = req.body.cityName;
  const key = "u id";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place +
    "&appid=" +
    key;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const cuaca = JSON.parse(data);
      const angin = cuaca.wind.speed;
      const suhu = cuaca.main.temp;
      const simbol = cuaca.weather[0].icon;
      const menyimbol =
        "http://openweathermap.org/img/wn/" + simbol + "@2x.png";
      res.write(
        "<p>Temperatur di " + place + " adalah " + suhu + " celcius</p>"
      );
      res.write(
        "<p>Kecepatan angin saat ini di " + place + " adalah " + angin + " </p>"
      );
      res.write("<img src=" + menyimbol + " />");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server Running in port 3000");
});

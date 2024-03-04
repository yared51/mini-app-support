const express = require("express");
const app = express();
const axios = require("axios");
app.set("views", __dirname + "/dist");
app.set("view engine", "pug");
app.use(express.static("dist"));

app.get(
  "/",
  async (req, res) => {
    console.log(req);
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.send({ msg: "missing authorization header" });
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (!token) return res.send({ msg: "missing token" });
    let response = await axios
      .get("https://cbebirrpaymentgateway.cbe.com.et:8888/auth/user", {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return res.send({ msg: "invalid token" });
      });
    if (!response.data) return res.send({ msg: "invalid token" });

    console.log("mdfg");
    res.render("index", { value: token });
    //   // res.render('index', { title: 'CbeSugar',cbetoken:'123'})
  },
  (req, res) => {}
);
app.listen(5005, () => console.log("Server is running on port 5005"));

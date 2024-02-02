const express = require("express");
const app = express();
const axios = require("axios");

app.set("views", __dirname + "/dist");
app.set("view engine", "pug");
app.use(express.static("dist"));

app.get(
  "/",
  async (req, res, next) => {
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
    next();

    // get the authorization header from request
    //   const reqHasAuthorizationHeader = req.headers["authorization"];

    //   // if the request has authorization header then validate it
    //   if (reqHasAuthorizationHeader) {
    //     // get the token
    //     const token = req.header("authorization").replace("Bearer ", "");
    //     console.log(token);
    //     // validate it
    //     if (token) {
    //       let response = await axios.get(
    //         "https://cbebirrpaymentgateway.cbe.com.et:8888/auth/user",
    //         {
    //           headers: {
    //             "content-type": "application/json",
    //             accept: "application/json",
    //             Authorization: "Bearer ${token}",
    //           },
    //         }
    //       );
    //       //
    //       if (response.data.phone) {
    //         console.log("i got a phone of " + response.data.phone);
    //         next();
    //       } else {
    //         console.log("invalid token");
    //         res.send({ msg: "invalid token" });
    //       }
    //     } else {
    //       res.send({ msg: "missing token" });
    //     }
    //   } else {
    //     res.send({ msg: "missing authorization header" });
    //   }
    // },
    // (req, res) => {
    //   // if you land on this it means the request have valid token so render your page and pass the token to the page
    //   res.render("index", {
    //     token: req.header("authorization").replace("Bearer ", ""),
    //   });
    //   // res.render('index', { title: 'CbeSugar',cbetoken:'123'})
  },
  (req, res) => {
    console.log("mdfg");
    res.render("index", { val: req.headers["authorization"] });
  }
);
app.listen(5005, () => console.log("Server is running on port 3000"));

var express = require("express");
var axios = require("axios");
var router = express.Router();

router.get("/users", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((apiResponse) => {
      res.json(apiResponse.data);
    })
    .catch((error) => {
      res.json(error.data);
    })
});

router.use("*", (req, res) => {
  const errorResp = {
    code: 500,
    message: "Internal server Error"
  };
  res.status(500).send(errorResp);
});

module.exports = router;

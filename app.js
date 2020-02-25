const express = require("express");
const app = express();
const emailer = require("./utilities/email");
app.use(express.static("public"));
app.use(express.json());
app.post("/email", async function(req, res) {
  try {
    if (req.body) {
      await emailer(req.body);
      console.log("Email is send");
      res.json({
        result: "email send "
      });
    } else {
      res.json({
        result: "enter data of patient"
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
});
var port=process.env.PORT||3000
app.listen(port, function() {
  console.log("Server is listening at port 3000");
});

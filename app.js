const express = require("express");
const app = express();
const emailer = require("./server");
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
        result: "enter data of user"
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
});
app.listen(3000, function() {
  console.log("Server is listening at port 3000");
});

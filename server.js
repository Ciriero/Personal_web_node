const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const EmailSender = require("./sendeEmail")


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;

app.post("/send", async (req, res) => {
    try {
      const { name, email, text} = req.body
      EmailSender({name,email,text})
      res.json({ mssg: "Your message sent successfully" });
    } catch (error) {
      res.status(404).json({ mssg: "Error ❌" });
    }
  });
  
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
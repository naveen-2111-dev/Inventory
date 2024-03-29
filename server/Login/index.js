const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const AUTH = require("../schema/AuthData.js");
const port = process.env.PORT;
const pass = encodeURIComponent(process.env.DB_PASSWORD);
console.log("pass", pass);
const url = `mongodb+srv://Naveen_Rajan_M:${pass}@cluster0.utblumr.mongodb.net/`;
const PASSKEY = process.env.PASS_KEY;
const myMail = "rmjayanth555@gmail.com";
const MATERIAL = require("../schema/material.js");
console.log(url)
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("error in connection",err);
  });

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mp.packers.offecial@gmail.com",
    pass: PASSKEY,
  },
});

app.post("/sender", async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    await mailer.sendMail({
      from: email,
      to: myMail,
      subject: `mr./ms. ${name} is trying to contact you`,
      text: `Mobile: ${number}, message: ${message} , email ${email}`
    });
  } catch {
    res.status(500).send("mailingfailed");
  }
})

app.post("/forgetpassword", async (req, res) => {
  const { email } = req.body;
  try {
    const FindUser = await AUTH.findOne({ email });
    if (FindUser) {
      const RetrievedPassword = FindUser.password;
      const username = FindUser.name;

      await mailer.sendMail({
        to: email,
        subject: `MP Packers and Movers login credentials:`,
        text: `Your password, Mr./Ms. ${username}, is: ${RetrievedPassword}`,
      });

      res.json("Password sent successfully");
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Some internal error occurred");
  }
});

app.post("/register", async (req, res) => {
  const { name, password, email, phone } = req.body;
  const existingUser = await AUTH.findOne({ name });
  const existingEmail = await AUTH.findOne({ email });
  const existingNumber = await AUTH.findOne({ phone });

  if (existingUser) {
    res.json("Username Already Exists");
  } else {
    if (existingEmail || existingNumber) {
      res.json("Phone number or email already used");
    } else {
      try {
        AUTH.create(req.body)
          .then(() => res.json("success"))
          .catch(() => res.json("failed"));
      } catch {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }
});

app.post("/login", async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  await AUTH.findOne({ email }).then((userData) => {
    if (userData) {
      if (userData.password === password) {
        res.json("success");
      } else {
        res.json("failed");
      }
    } else {
      res.json("data not found");
    }
  });
});

app.get("/username/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);

  try {
    if (email) {
      const FindingUser = await AUTH.findOne({ email });

      if (!FindingUser) {
        res.status(404).json("UserNotFound");
      } else {
        const ProfileUser = FindingUser.name;
        res.json(ProfileUser);
      }
    }
  } catch (err) {
    res.status(404).json("error", err);
  }
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});


//material
app.get("/material", async (req, res) => {
  try {
    const response = await MATERIAL.find();
    console.log("data:", response);

    if (response && response.length > 0) {
      res.json(response);
    } else {
      res.json("no data found");
    }
  } catch (err) {
    res.status(404).json("some error has occured");
  }
});

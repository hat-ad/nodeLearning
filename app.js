require("./src/DB/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
const User = require("./src/Model/userModel");
app.get("/", (req, res) => {
  console.log(req.body);
  res.send("HELLO");
});

// create
app.post("/create", (req, res) => {
  const { name, roll } = req.body;
  const newUser = new User({ name, roll });
  newUser.save();
  // res.send({ name, roll, add: "random" });
  res.status(201).json({ name, roll, add: "random" });
});

//read
app.get("/read", async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.json({
      users: users,
    });
  } catch (error) {
    res.status(500).json({ message: "Something occured" });
  }
});

//update
app.patch("/update", async (req, res) => {
  const { id, name } = req.body;

  const updatedDetails = await User.updateOne({ _id: id }, { name: name });
  res.json({
    updated: updatedDetails,
  });
});

//delete
app.delete("/delete", async (req, res) => {
  const { id } = req.body;
  const deleted = await User.deleteOne({ _id: id });
  res.send(deleted);
});

app.listen(port, () => {
  console.log(`connection is live at port : ${port} `);
});

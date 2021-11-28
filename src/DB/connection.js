const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://test:test%401234@cluster0.2anry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection success"))
  .catch((e) => console.log("not sucess:", e));

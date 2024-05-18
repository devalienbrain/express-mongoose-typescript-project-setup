import app from "./app";
import config from "./app/config";

// const mongoose = require("mongoose");
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

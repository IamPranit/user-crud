const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://userAdmin:EtKd((*wY^G![<c9c3@users.a8wyj.mongodb.net/Users?retryWrites=true&w=majority";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnection;

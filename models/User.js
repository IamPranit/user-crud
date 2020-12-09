const mongoose = require("mongoose");
const fs = require("fs");

const imgPath = "../images/img.png";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    required: true,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  profileImage: {
    type: Buffer,
  },
});

// UserSchema.pre("save", () => {
//   UserSchema.path("email").validate(function (value, done) {
//     this.model("User").countDocuments(
//       {
//         email: value,
//       },
//       function (err, count) {
//         if (err) {
//           return done(err);
//         }
//         // If `count` is greater than zero, "invalidate"
//         done(!count);
//       }
//     );
//   }, "Email already exists");
// });

module.exports = mongoose.model("User", UserSchema);

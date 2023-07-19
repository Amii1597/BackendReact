const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const storySchema = new mongoose.Schema({
id:{
  type:Number,
  required: true,
},
heading:{
  type: String,
  required: true,
},
description:{
  type: String,
  required: true,
},
image:{
  type: [String],
  required: true,
 
},
category:{
  // type: mongoose.Schema.Types.ObjectId,
  type:String,
  required: true,

},

});

// We are hashing the password
// storySchema.pre("save", async function (next) {
//   console.log("hii from inside");
//   if (this.isModified("password")) {
//     this.password = bcrypt.hash(this.password, 12);
//   }
//   next();
// });
  // we r genreating token
//   storySchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };
const Story = mongoose.model("STORY", storySchema);
module.exports = Story;

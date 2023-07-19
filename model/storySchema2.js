const mongoose = require("mongoose");

const storySchema2 = new mongoose.Schema({

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
  type:String,
  required: true,
  ref: 'category'
},
});


const Story2 = mongoose.model("STORY2", storySchema2);

module.exports = Story2;

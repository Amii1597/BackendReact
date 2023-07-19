const mongoose = require("mongoose");

const storySchema3 = new mongoose.Schema({

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


const Story3 = mongoose.model("STORY3", storySchema3);

module.exports = Story3;

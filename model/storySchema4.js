const mongoose = require("mongoose");

const storySchema4 = new mongoose.Schema({

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


const Story4 = mongoose.model("STORY4", storySchema4);

module.exports = Story4;

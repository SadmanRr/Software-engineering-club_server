const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const NoticeSchema= mongoose.Schema({
    name: {  
        type: String,
       
    },
    
  
}, {
    timestamps: true
});
 
 
const Notice = new mongoose.model("Notice", NoticeSchema
);
module.exports = Notice; 
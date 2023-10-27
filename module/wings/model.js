const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const WingSchema= mongoose.Schema({
    name: {  
        type: String,
        required: [true, "provide a valid name"],
        
    },
    details: {  
        type: String,
        required: [true, "provide a valid name"],
        
    },
    img: {  
        type: [String],
        // required: [true, "provide a valid name"],
    },
  
}, {
    timestamps: true
});
 
 
const Wing = new mongoose.model("Wing", WingSchema
);
module.exports = Wing; 
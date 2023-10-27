const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const EventSchema= mongoose.Schema({
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
 
 
const Event = new mongoose.model("Event", EventSchema
);
module.exports = Event; 
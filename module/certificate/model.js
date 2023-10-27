const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const CertificateSchema= mongoose.Schema({
  id: {  
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
 
 
const Certificate = new mongoose.model("Certificate", CertificateSchema
);
module.exports = Certificate; 
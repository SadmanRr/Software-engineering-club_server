
const Event = require("./model");
 

module.exports.getProductService = async (filters,qs)=>{
       const totalCount = await Event.countDocuments(filters);
       const page = Math.ceil(totalCount / 10);
       const result = await Event.find(filters).sort({ createdAt: -1 })
       .skip(qs.skip)
       .limit(qs.limit) 
       return{
        result,
        totalCount,
        page 
       }
}
module.exports.postProductService = async (data,imgPath)=>{
   console.log(imgPath);
  const images = imgPath.map(file => `${process.env.MAIN_PATH}${file.path}`);
  //  console.log(images,"this is path"); 
    const newItem = {...data,img:images}
     
    return await Event.create(newItem)
}
// module.exports.likeUpdateProductService =async(id,productId)=>{
//  ; 
//     const r = await User.findById(id)
//     const finds = r.wishlist.find(item=>item==productId)
//     if(finds){
//     const result = await User.findByIdAndUpdate(
//         id, // Assuming you have implemented authentication middleware and 'result._id' is the user's ID
//          { $pull: { wishlist : productId } }, // Removing 'id' from the 'hiredPhotographer' array
//         { new: true } // Returns the updated document
//       );
//       console.log(result,"thgiosf");
//       return result;
      
//     }
//     else{ 
//      return  await User.findByIdAndUpdate(
//         id, // Assuming you have implemented authentication middleware and 'result._id' is the user's ID
//         { $addToSet: { wishlist: { $each: [productId] } } }, // Adding 'id' to the 'hiredPhotographer' array
//         { new: true } // Returns the updated document
//       ); 
        
//     }
// }


// module.exports.getOneProductService = async (id)=>{
  
//      const result = await Product.findById(id)
     
//     return result
// }
// module.exports.updateProductService = async (id,values)=>{
//   const result = await Product.updateOne({_id:id},{$set:values})
//   return result
// }
module.exports.deleteProductService = async (id)=>{
  
  const result = await Event.deleteOne({_id:id})
    console.log(result);
 return result
}
// module.exports.deleteBulkProductService = async (ids)=>{
  
//   const result = await Product.deleteMany({_id:ids})
  
//  return result
// }
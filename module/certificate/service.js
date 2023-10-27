
const Certificate = require("./model");
 

module.exports.getProductService = async (filters,qs)=>{
       const totalCount = await Certificate.countDocuments(filters);
       const page = Math.ceil(totalCount / 10);
       const result = await Certificate.find(filters).sort({ createdAt: -1 })
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
     
    return await Certificate.create(newItem)
}
 

module.exports.getOneProductService = async (id)=>{
  
     const result = await Certificate.findById(id)
     
    return result
}  
 
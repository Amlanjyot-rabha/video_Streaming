import cloudinary from 'cloudinary'
import fs from "fs"
dotenv.config({
    path:'../.env'
})

cloudinary.config({
    cloudName:process.env.CLOUD_NAME,
    cloudKey:process.env.CLOUD_KEY,
    cloudSecret:process.env.CLOUD_SECRET
})
const cloudinaryUpload=async (localFilepath)=>{
 try{
    if(!localFilepath) return null
    const fileUpload=cloudinary.uploader.upload(localFilepath, {
        resource_type:auto,
    })
       fs.unlinkSync(localFilepath)
       console.log("file has been uploaded")
       return fileUpload
 }
 catch{
    fs.unlinkSync(localFilepath)
    console.log("./util/cloudinary here is the problem with localfilepath")
    
 }
}
export default cloudinaryUpload
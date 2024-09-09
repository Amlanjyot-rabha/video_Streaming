import mongoose,{Schema} from "mongoose"
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new Schema({
 videoFile:{
  type:String,
  required:true
 },
 thumbNail:{
   type:String,
   required:true
 },
 title:{
   type:String,
   required:true
 },
 duration:{
   type:Number,
   required:true
 },
 discription:{
  type:String,
  required:true
 },
 views:{
   type:Number,
   default:0
 },
 isPublish:{
   type:Boolean,
   default:true
 },
 woner:{
    type:Schema.Types.ObjectId,
    ref:'user'
 }


},{
    timestamps:true
})
videoSchema.plugin( mongooseaggregatepaginate)
export const video =mongoose.model('video',videoSchema) 
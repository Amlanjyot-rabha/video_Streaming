 import mongoose,{Schema} from 'monogoose'
 import mongoosePagenateAggrigate from 'mongoose-aggregate-paginate-v2'

 const commentSchema=new Schema({
  content:{
      type:String,
      required:true,
  },
  video:{
    type:Schema.Types.ObjectId,
    ref:"video",
},
woner:{
    type:Schema.Types.ObjectId,
    ref:"user"
}
},
{
timestamps:true
})
commentSchema.plugin(mongoosePagenateAggrigate)
export const comment=mongoose.model('comment',commentSchema)

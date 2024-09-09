 import mongoose,{Schema} from "mongoose"

 const SubscriptionSchema= new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,
        required:true
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
 },
{
    timestamps:true
})

export const  subcription = mongoose.model('subscription',  SubscriptionSchema)
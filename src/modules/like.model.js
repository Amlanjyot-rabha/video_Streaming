import mongoose,{Schema} from 'mongoose'

const likeSchema=new Schema({
    video:{
        type:Schema.Types.ObjectId,
        ref:'video'
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"comment"
    },
    likeBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    tweet:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
},
{
    timestamps:true
}
)
export const like=mongoose.model('like',likeSchema)
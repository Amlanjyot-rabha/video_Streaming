import mongoose,{Schema} from 'mongoose'

const playListSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    video:[
        {
            type:Schema.Types.ObjectId,
            ref:'video'
        }
    ],
    woner:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timeStamps:true
})
export const playlist=mongoose.model('playlist',playListSchema)
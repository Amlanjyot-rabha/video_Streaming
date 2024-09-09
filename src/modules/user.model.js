import mongoose,{Schema} from "Schema"
import monoogseaggregatepaginate from "mongoose-aggregate-paginate-v2"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    userName:{
      type:String,
      requied:true,
      unique:true,
      lowercase:true,
      trim:true,
      index:true
    },
    email:{
        type:String,
        requied:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        requied:true,
        unique:true,
        index:true
    },
    avatar:{
     type:String,
     required:true
    },
    coverimage:{
    type:String
    },
    watchHistory:{
     type:Schema.Types.ObjectId,
     ref:"video"
    },
    password:{
      type:String,
      required:[true,"password is required"]
    },
    refreshToken:{
   type:String
    }
},{
  timestamps:true
})

 userSchema.pre('save',async function(next){
     if(!this.modified('password'))
      return next()
    this.password = await bcrypt.hash(this.password,10)
    return next()
 } )

 userSchema.methods.isPsswordCorrect=async function(password){
  return await bcrypt.compare(password,this.passowrd)
 }

 userSchema.methods.CreateAccessToken=async function(){
     jwt.sign({
      _id:this._id,
      email:this.email,
      userName:this.uerName,
      fullName:this.fullName
     },
      
     process.env.ACCSESS_TOKEN_SECRET,
     {
      expriesIn:ACCSESS_TOKEN_EXPIRY
     }
    
    )
 }
 userSchema.methods.CreateAccessToken=async function(){
     jwt.sign({
      _id:this._id,
      email:this.email,
      userName:this.uerName,
      fullName:this.fullName
     },
      
     process.env.ACCSESS_TOKEN_SECRET,
     {
      expriesIn:ACCSESS_TOKEN_EXPIRY
     }
    
    )
 }

 userSchema.methods.CreateAccessToken=async function(){
  jwt.sign({
   _id:this._id,
   email:this.email,
   userName:this.uerName,
   fullName:this.fullName
  },
   
  process.env.ACCSESS_TOKEN_SECRET,
  {
   expriesIn:ACCSESS_TOKEN_EXPIRY
  }
 
 )
}



userSchema.methods.CreateRefereshToken=async function(){
  jwt.sign({
   _id:this._id,
  },
   
  process.env.REFRESH_TOKEN_SECRET,
  {
   expriesIn:REFRESH_TOKEN_EXPIRY
  }
 
 )
}

export const user=mongoose.model('user',userSchema)
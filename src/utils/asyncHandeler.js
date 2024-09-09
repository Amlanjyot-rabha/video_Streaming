const asyncHandeler=(requestHandeler)=> async(req,res,next)=>{
  try{
    await requestHandeler(req,res,next)
  }
  catch(error){
    res.status(err.code||500).json({
        success:false,
        message:"utils/asyncHandeler"
    })
  }
}
export default asyncHandeler
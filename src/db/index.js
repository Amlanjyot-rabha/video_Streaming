import mongoose from 'mongoose'
import {DB_NAME} from '../constant.js'
import 'dotenv/config'


 
const databaseConection=async()=>{
   try{
      const connectionInstance= await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
       console.log("everything working properly ")
       console.log(connectionInstance.connection.host)
   }catch(error){
         console.log('problem with connection in db inedx',error);
   }
}
export default databaseConection
 




// // import mongoose from "monogoose"
// // import {DB_NAME} from '../constant.js'
// // // import express from "express"

// // const dataConection=async()=>{
// //   try{
// //     const connectionInstance= await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
// //     console.log(`connected succesfuly ${connectionInstance.connection.host}`)
// //   }
// //     catch(error){  
// //     console.log('error',error);
// // }
// // }

// // dataConection()
// // // const app = express()
// // // (async()=>{
// // //   try{
// // //     await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
// // //     app.on("error",(error)=>{
// // //         console.log("error",error)
// // //         throw error
// // //     })
// // //   }catch(error){
// // //     console.error("error",error)
// // //   }
// // // })() 
// // // app.listen('process.env.PORT')

 
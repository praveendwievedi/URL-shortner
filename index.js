const express=require('express')

const app=express()
const PORT=9001;

const urlRouter=require('./routes/url')
// const dynamicRouter=require('./routes/dynamicRoute')
const {connectToMongodb}=require('./connecton')

connectToMongodb('mongodb://localhost:27017/url-shortner')

app.use(express.json())

app.use('/',urlRouter)
// app.use('/:shortId',dynamicRouter)
// app.get('/:shortId',async () =>{
//   const shortId=req.params.shortId;

//   const entry= await 
// })

app.listen(PORT,()=> console.log(` server started at port: ${PORT}`))
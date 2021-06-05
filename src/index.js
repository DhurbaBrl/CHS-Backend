const express=require('express')
const requestRouter=require('./routers/request')
const offerRouter=require('./routers/offer')
require('./database/mongoose')


const app=express()


app.use(express.json())
app.use(requestRouter)
app.use(offerRouter)


app.listen(3000,()=>{
    console.log('The port is started in port 3000.')
})
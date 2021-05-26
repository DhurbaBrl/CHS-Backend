const express=require('express')
const helpRouter=require('./hlp_request/request')
require('./database/mongoose')


const app=express()


app.use(express.json())
app.use(helpRouter)


app.listen(3000,()=>{
    console.log('The port is started in port 3000.')
})
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app =express()
const port = process.env.PORT ||5000

app.get('/', (req,res)=>{
    return res.status(200).json({message: "hello ankush jj"})
})
app.get('/health', (req,res)=>{
    return res.status(200).json({message: "all is good"})
})

app.get('/contact', (req,res) => {
    return res.status(200).json({message: "contact to ankush 9113140850" })
})

app.listen(port, () =>{
    console.log('server is started at : ', port);
})


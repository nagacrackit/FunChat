const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const config=require('./config/database');
const path=require('path');
const app=express();
const port=process.env.PORT|8080;
mongoose.Promise=global.Promise;
//DB connection
mongoose.connect(config.uri,(err)=>{
    if(err) console.log('error in database');
    else console.log('DB connection successful');
})

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
//Intaract with frontend
// app.use(express.static(__dirname+'/public'));
// app.get('*',(req,res)=>res.sendFile(path.join(__dirname+'/public/index.html')));

app.listen(port,()=>console.log(`Listening on port ${port}`))
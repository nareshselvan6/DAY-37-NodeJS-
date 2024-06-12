import express from "express";
import fs from "fs";
import { log, timeStamp } from "console";
import { format } from "date-fns";



//initialization
const app = express();
const port = 4000;

//middleware
app.use(express.json())



// route for date
app.get('/create',(req,res)=>{
    let today=format(new Date(),'dd--yyyy-HH-mm-ss')
   
    const filepath=`Timestamp/${today}.txt`;
    fs.writeFileSync(filepath,`${today}`,'utf-8');
    let readdata=fs.readFileSync(filepath,"utf-8")
    res.status(200).json(readdata)
    
})

app.get('/read',(req,res)=>{
    let folder="Timestamp";
    fs.readdir(folder,function(err,files){
        if(err){
            console.log(err);
        }else{
            console.log(files);
        }
        res.status(200).json(files)
    })
   
})


//routes
app.get('/',(req,res)=>{
    res.status(200).json({message:'request send '})
})




//running port
app.listen(port,()=>{
    console.log(`app is running in port ${port}`);
})
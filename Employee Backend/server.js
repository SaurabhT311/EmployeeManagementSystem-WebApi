const routes=require('./Routes/routes');
const express=require('express');
var cors = require('cors')
const app=express();

app.use(express.json());
app.use(cors())
app.use('/',routes);

app.use((error,req,res,next)=>{
    let response={
        success:false,
        message:'Internal server error',
        error:error
    }
    res.status(500).send(response);
})

app.listen(3000, ()=>{
    console.log("This is port 3000");
    require('./dbConfig/dbconfig');
})
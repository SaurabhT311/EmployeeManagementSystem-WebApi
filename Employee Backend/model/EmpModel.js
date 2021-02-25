const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is not valid"],
    },
    department: {
        type: String,
        required: true,
    },
  
    mobile:{
        type: Number,
        required: [true,'mobile number is required'],
        maxlength:10,
        minlength:10,
    },
});

let empModell = mongoose.model('EmpDatabase', empSchema);

class EmpModel{
    create=(req,next)=>{ 
            return new Promise((resolve, reject) => {
                empModell.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })

        }
    

    getEmpData= (req,next)=>{
            return new Promise((resolve, reject)=>{
                empModell.find().then((result)=>{
                    resolve(result);
                }).catch((error)=>{
                    reject(error);
                })
            })
        }
    
    updateEmpData=(id, newData)=>{
            return new Promise((resolve,reject)=>{
         empModell.findByIdAndUpdate(id, newData)
        .then((result)=>{
            resolve(result);
        }).catch((error)=>{
            reject(error);
        })
    })
    }
    
    deleteEmpData=(id)=>{
            return new Promise((resolve, reject)=>
            {
                empModell.findByIdAndDelete(id).then((result)=>{
                    resolve(result);
                }).catch((error)=>{
                    reject(error);
                });
            })
    }

}

module.exports=new EmpModel();
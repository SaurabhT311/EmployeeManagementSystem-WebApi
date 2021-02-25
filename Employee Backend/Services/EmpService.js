const empModel=require('../model/EmpModel');

class EmpService{
    addDataService = (req, next) => {
        
            return empModel.create(req).then((result => {
                return ({ message: "Record added successfully!", data: result });
            })).catch((error) => {
                return ({ meassage: "failed to create record!", data: error });
            });
        } 
    

    getDataService = (req,next)=>{
        
        return empModel.getEmpData(req).then((result)=>{
            return ({ message: "Record found successfully", data: result});
            }).catch((error)=>{
                return ({ message: "Record not found", data: error});
            });
        }

    updateDataService=(id,newData,next)=>{
        
            return empModel.updateEmpData(id, newData).then((result)=>{
                return({ message: "Record found successfully", data: result});
            }).catch((error)=>{
                return ({ message: "Record not found", data: error});
            })
        }

    deleteDataService=(id)=>{
       
            return empModel.deleteEmpData(id).then((result)=>{
                return({ message: "Record deleted successfully", data: result});
            }).catch((error)=>{
                return ({message: "Record not found", data: error});
            })
        }
    }


module.exports = new EmpService();
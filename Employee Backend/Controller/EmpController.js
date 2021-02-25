const empService = require('../Services/EmpService');
const response = {};

class EmpController {
    addDataController = (req, res, next) => {
        try {
            console.log(req.body);
            empService.addDataService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response)
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            });
        }
        catch (error) {
            next(error);
        }
    }

    EmpgetDataController = (req, res, next) => {
        try{
            empService.getDataService(req.body).then((result)=>{
                response.success=true;
                response.message=result.message;
                response.data=result.data;
                return res.status(200).send(response);
            }).catch((error)=>{
                response.success=false;
                response.message=error.message;
                response.data=error.error;
                return res.status(400).send(response);
            });
        }
        catch(error){
            next(error);
        }
    }

    EmpUpdateDataController=(req, res, next)=>{
        try{
            let newData=req.body.update;
            let id=req.params.id;
            empService.updateDataService(id, newData).then((result)=>{
                response.success=true;
                response.message=result.message;
                response.data=result.data;
                return res.status(200).send(response);
            }).catch((error)=>{
                response.success=false;
                response.message=error.message;
                response.data=error.error;
                return res.status(400).send(response);
            });
        }
        catch(error){
            next(error);
        }
    }

    EmpDeleteDataController=(req,res,next)=>{
        let empid=req.params.id;
        empService.deleteDataService(empid).then((result)=>{
            response.success=true;
                response.message=result.message;
                response.data=result.data;
                return res.status(200).send(response);
            }).catch((error)=>{
                    response.success=false;
                    response.message=error.message;
                    response.data=error.error;
                    return res.status(400).send(response);
                });
            }
            catch(error){
                next(error);
            }
    }

module.exports = new EmpController();
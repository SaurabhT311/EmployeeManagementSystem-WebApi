const route=require('express').Router();
const empController=require('../Controller/EmpController')

route.get('/employee/getEmpData', empController.EmpgetDataController);

route.post('/employee/addData', empController.addDataController);

route.put('/employee/updateData/:id', empController.EmpUpdateDataController);

route.delete('/employee/delete/:id', empController.EmpDeleteDataController);

module.exports=route;

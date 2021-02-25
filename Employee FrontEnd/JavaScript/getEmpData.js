
// $(document).ready(function () {
//     getEmpdata();
// })
var empData;
function getEmpdata() {
    $.ajax({
        url: "http://localhost:3000/employee/getEmpData",
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            empData = data; //to store data
            //  console.log(data);
            printEmpData(data.data);

        }
    });
}



function printEmpData(empData) {
    console.log("empData", empData);
    var table = document.getElementById('emptable');
    for (let i = 0; i < empData.length; i++) {
        var row = `<tr>
                        <td>${empData[i].firstname}</td>
                        <td>${empData[i].lastname}</td>
                        <td>${empData[i].email}</td>
                        <td>${empData[i].mobile}</td>
                        <td>${empData[i].department}</td>
                        <td> <i class="fas fa-edit"></i></td>
                        <td> <i class="fas fa-trash-alt"></i></td>
            </tr>`

        table.innerHTML = table.innerHTML + row;
    }
}


getEmpdata();


function postaddData() {
    const Firstname = document.getElementById('firstName').value;
    const Lastname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dept = document.getElementById('dept').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    let empData={
        firstname:Firstname,
        lastname:Lastname,
        email:email,
        mobile:phone,
        department:dept,
        password:password  
    }

    $.ajax({
        url: "http://localhost:3000/employee/addData",
        type: "POST",
        dataType: "JSON",
        data: JSON.parse(empData),
        success: function(data){
            console.log(data);
        }  
    });
}






$(document).ready(function () {
    let key = localStorage.getItem("key");
    if (key === "add") {
        console.log("add");
        postaddData();

    }
    else if (key === "edit") {
        let id = localStorage.getItem("id");
        console.log(id);
        updateEmpData();
    } else {
        getEmpdata();
    }
});


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
// getEmpdata();


function printEmpData(empData) {
    console.log("empData", empData);
    if (document.getElementById("emptable") != null) {
        var table = document.getElementById("emptable");

        // var table = document.getElementById('emptable');
        for (let i = 0; i < empData.length; i++) {
            var row = `<tr>
                        <td>${empData[i].firstname}</td>
                        <td>${empData[i].lastname}</td>
                        <td>${empData[i].email}</td>
                        <td>${empData[i].mobile}</td>
                        <td>${empData[i].department}</td>
                        <td> <i class="fas fa-edit"  onclick="redirection('${empData[i]._id}')" ></i></td>
                        <td> <i class="fas fa-trash-alt" onclick="EmpDeleteData('${empData[i]._id}')"></i></td>
            </tr>`

            table.innerHTML = table.innerHTML + row;
        }
    }
}

// getEmpdata();






function postaddData() {

    const Firstname = document.getElementById('firstName').value;
    const Lastname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dept = document.getElementById('dept').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    let empData = {
        firstname: Firstname,
        lastname: Lastname,
        email: email,
        mobile: phone,
        department: dept,
        password: password
    }

    console.log(empData);
    $.ajax({
        url: "http://localhost:3000/employee/addData",
        type: "POST",
        contentType: "application/json",
        dataType: "JSON",
        data: JSON.stringify(empData),
        success: function (data) {
            localStorage.clear();
            console.log(data);
            window.location = "http://127.0.0.1:5500/Employee%20FrontEnd/HTML/front.html";
        }
    });

}

function EmpDeleteData(id) {
    console.log("id", id);
    $.ajax({
        url: `http://localhost:3000/employee/delete/${id}`,
        type: "DELETE",
        success: function (data) {
            console.log(data);
            location.reload();
        }
    })
}


function updateEmpData() {
    let id = localStorage.getItem("id");

     document.getElementById("btn").innerHTML="Update";

    $.ajax({
        url: `http://localhost:3000/employee/getById/${id}`,
        type: "GET",
        success: function (data) {
            console.log(data);


            document.getElementById('firstName').value = data.data.firstname;
            document.getElementById('lastName').value = data.data.lastname;
            document.getElementById('email').value = data.data.email;
            document.getElementById('dept').value = data.data.department;
            document.getElementById('phone').value = data.data.mobile;
            document.getElementById('password').value = data.data.password;

        }
    });
}


function redirection(id) {
    localStorage.setItem("id", id);
    localStorage.setItem("key", "edit");
    window.location = "http://127.0.0.1:5500/Employee%20FrontEnd/HTML/index.html";

}


function addEmployee() {
    localStorage.setItem("key", "add");
    window.location = "http://127.0.0.1:5500/Employee%20FrontEnd/HTML/index.html"
}


















































// document.getElementById("firstName").setAttribute("value", data.firstname);
    // document.getElementById("lastName").setAttribute("value" ,data.lastname);
    // document.getElementById("email").setAttribute("value", data.email);
    // document.getElementById("dept").setAttribute("value" ,data.department);
    // document.getElementById("phone").setAttribute("value", data.mobile);
    // document.getElementById("password").setAttribute("value" ,data.password);    

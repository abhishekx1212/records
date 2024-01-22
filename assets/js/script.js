let data = [
    { id: 1, name: "ram", email: 'ram@gmail.com', age: 20 }
]



function readAll() {
    var tbdata = document.querySelector('.table_data');
    let elements = '';
    data.map((val) => (
        elements += `
            <tr>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.age}</td>
                <td>
                    <button onclick={edit(${val.id})}  class="mt-3 btn btn-success btn-design2 rounded-5 me-2">EDIT</button>
                    <button onclick={del(${val.id})}  class="mt-3 btn btn-success btn-design2 rounded-5">DELETE</button>
                </td>
            </tr>
        `
    ))
    tbdata.innerHTML = elements;
}

function add() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('.create-form').style.display = 'block';
    document.querySelector('.addbtn').style.display = "none";
}

let idx = 2;
function create() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let age = document.querySelector('#age').value;

    if (name === "") {
        document.getElementById('nameError').innerHTML = 'Enter Name!';
        document.getElementById('emailError').innerHTML = 'Enter email!';
        document.getElementById('ageError').innerHTML = 'Enter age!';
    }
    else if (email === "") {
        document.getElementById('nameError').innerHTML = '';
        document.getElementById('emailError').innerHTML = 'Enter email!';
        document.getElementById('ageError').innerHTML = 'Enter age!';
    } else if (age === "") {
        document.getElementById('nameError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = 'Enter age!';
    } else {
        document.getElementById('nameError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = '';
        var newObj = { id: idx++, name, email, age };
        data.push(newObj);
        document.querySelector('.create-form').style.display = 'none';
        document.querySelector('.addbtn').style.display = "block";
        readAll();
    }
}


function edit(id) {
    // console.log(id);
    document.querySelector('.update-form').style.display = 'block';
    document.querySelector('.addbtn').style.display = "none";
    document.querySelector('.create-form').style.display = 'none';

    let updateObj = data.find((fnd) => {
        let fid = fnd.id === id;
        return fid;
    });
    document.querySelector('#update_id').value = updateObj.id;
    document.querySelector('#Uname').value = updateObj.name;
    document.querySelector('#Uemail').value = updateObj.email;
    document.querySelector('#Uage').value = updateObj.age;
}


function update() {
    let id = parseInt(document.querySelector('#update_id').value);
    let name = document.querySelector('#Uname').value;
    let email = document.querySelector('#Uemail').value;
    let age = document.querySelector('#Uage').value

    let updateObj = { id, name, email, age };
    let index = data.findIndex((fnd) => {
        let fidx = fnd.id === id;
        return fidx;
    });
    data[index] = updateObj;

    document.querySelector('.update-form').style.display = 'none';
    document.querySelector('.addbtn').style.display = "block";
    readAll();
}


function del(id) {
    document.querySelector('.update-form').style.display = 'none';
    document.querySelector('.addbtn').style.display = "block";

    let delData = data.filter((fnd) => {
        return fnd.id !== id;
    });
    data = delData;
    readAll();
}
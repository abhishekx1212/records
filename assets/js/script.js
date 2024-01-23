var info = [];

class data {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

window.onload = function () {
    info.push({ id: 1, name: 'Ram', email: 'ram22@gmail.com', age: 22 });
    readAll();
}

function readAll() {
    var tbdata = document.querySelector('.table_data');
    let tr = '';
    info.map((val) => (
        tr += `
            <tr>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.age}</td>
                <td>
                    <div class="btn-box d-flex flex-wrap justify-content-center align-items-center">
                        <button onclick={edit(${val.id})}  class="mt-3 btn btn-success btn-design2 rounded-5 me-2">EDIT</button>
                        <button onclick={del(${val.id})}  class="mt-3 btn btn-success btn-design2 rounded-5">DELETE</button>
                    </div>
                </td>
            </tr>
     `
    ))
    tbdata.innerHTML = tr;
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
    let old = '';
    for (i = 0; i < info.length; i++) {
        if (info[i].email === email) {
            old = info[i].email;
            break;
        }
    }
    if (name === "" || email === "" || age === "") {
        alert('Incomplete Information!');
    } else if (age <= 0) {
        document.getElementById('ageError').innerHTML = 'Invalid age!';
    }
    else {
        if (old === email) {
            document.getElementById('NemailError').innerHTML = 'Already Exist!';
            document.getElementById('ageError').innerHTML = '';
        } else {
            document.getElementById('ageError').innerHTML = '';
            document.getElementById('NemailError').innerHTML = '';
            const newdata = new data(idx++, name, email, age);
            info.push(newdata);
            document.querySelector('.create-form').style.display = 'none';
            document.querySelector('.addbtn').style.display = "block";
            readAll();
        }
    }
}

function edit(id) {
    document.querySelector('.update-form').style.display = 'block';
    document.querySelector('.addbtn').style.display = "none";
    document.querySelector('.create-form').style.display = 'none';

    let updateObj = info.find((fnd) => {
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
    let old = '';
    for (i = 0; i < info.length; i++) {
        if (info[i].email === email) {
            old = info[i].email;
            break;
        }
    }
    if (old === email) {
        console.log('invalid!');
        document.querySelector('#emailError').innerHTML = 'Already exist!';
    } else {
        document.querySelector('#emailError').innerHTML = '';
        let updateObj = { id, name, email, age };
        let index = info.findIndex((fnd) => {
            let fidx = fnd.id === id;
            return fidx;
        });
        info[index] = updateObj;

        document.querySelector('.update-form').style.display = 'none';
        document.querySelector('.addbtn').style.display = "block";
        readAll();
    }
}

function del(id) {
    document.querySelector('.update-form').style.display = 'none';
    document.querySelector('.addbtn').style.display = "block";

    let delData = info.filter((fnd) => {
        return fnd.id !== id;
    });
    info = delData;
    readAll();
}

function back() {
    document.querySelector('.update-form').style.display = 'none';
    document.querySelector('.create-form').style.display = 'none';
    document.querySelector('.addbtn').style.display = "block";
    document.getElementById('ageError').innerHTML = '';
    document.getElementById('NemailError').innerHTML = '';
    document.querySelector('#emailError').innerHTML = '';
}

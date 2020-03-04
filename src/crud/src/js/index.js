"use strict";

let id = document.getElementById("id");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");

let state = [];

function validationId() {
    if (isNaN(id.value)) {
        id.value = "";
        alert("The ID must be a number!")
    }
};

function validationAge() {
    if (isNaN(age.value)) {
        age.value = "";
        alert("The age must be a number!")
    }
};

function updateLocalStorage() {
    localStorage.setItem("personState", JSON.stringify(state));
};

function clear() {
    id.value = "";
    firstName.value = "";
    lastName.value = "";
    age.value = "";
};

function createRow() {
    let table = document.getElementsByClassName("table");
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = id.value;
    let td1 = document.createElement("div");
    td1.classList.add("id");
    td1.innerHTML = id.value;
    let td2 = document.createElement("div");
    td2.classList.add("firstName" + row.id);
    td2.innerHTML = firstName.value;
    let td3 = document.createElement("div");
    td3.classList.add("lastName" + row.id);
    td3.innerHTML = lastName.value;
    let td4 = document.createElement("div");
    td4.classList.add("age" + row.id);
    td4.innerHTML = age.value;

    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4);
    table[0].append(row);
    clear();
};

function getData(event) {
    let el = document.getElementById(id.value);
    if (el) {
        alert(`The person with the ID ${id.value} has been already created!`);
        return;
    }
    if (id.value === 0 || firstName.value === 0 || lastName.value === 0 || age.value === 0) {
        alert("Fill all of the fields, please!");
        return;
    }
    state.push({
        id: id.value,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    });
    createRow();
    updateLocalStorage();
};

function readData(event) {
    let localStor = localStorage.getItem("personState");
    if (localStor != null) {
        state = JSON.parse(localStor);
        for (let i = 0; i < state.length; i++) {
            let table = document.getElementsByClassName("table");
            let row = document.createElement('div');
            row.classList.add("row");
            row.id = state[i].id;
            let td1 = document.createElement("div");
            td1.classList.add("id");
            td1.innerHTML = state[i].id;
            let td2 = document.createElement("div");
            td2.classList.add("firstName" + row.id);
            td2.innerHTML = state[i].firstName;
            let td3 = document.createElement("div");
            td3.classList.add("lastName" + row.id);
            td3.innerHTML = state[i].lastName;
            let td4 = document.createElement("div");
            td4.classList.add("age" + row.id);
            td4.innerHTML = state[i].age;

            row.append(td1);
            row.append(td2);
            row.append(td3);
            row.append(td4);
            table[0].append(row);
            clear();
        }
    }
};

function updateRow(event) {
    if (id.value === 0 || firstName.value === 0 || lastName.value === 0 || age.value === 0) {
        alert("Fill all of the fields, please!");
        return;
    }
    let i = state.findIndex(element => element.id === id.value);
    state[i] = {
        id: id.value,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    }
    updateLocalStorage();
    let el = document.getElementById(id.value);
    if (el) {
        let td2 = document.querySelector(".firstName" + id.value);
        let td3 = document.querySelector(".lastName" + id.value);
        let td4 = document.querySelector(".age" + id.value);
        td2.innerText = firstName.value;
        td3.innerHTML = lastName.value;
        td4.innerHTML = age.value;
        clear();
        return;
    } else if (confirm(`The person with the ID ${id.value} is not in the list! Do you want to create?`)) {
        return createRow();
    }
    clear();
};

function deleteRow(event) {
    if (confirm(`Are you sure that you want to delete the person with ID ${id.value}?`)) {
        let el = document.getElementById(id.value);
        el.remove();
        let i = data.findIndex(element => element.id === id.value);
        data.splice(i, 1);
        updateLocalStorage();
        clear();
    }
};


id.addEventListener("change", validationId);
age.addEventListener("change", validationAge);

let create = document.getElementById("create");
create.addEventListener("click", getData);

let read = document.getElementById("read");
read.addEventListener("click", readData);

let update = document.getElementById("update");
update.addEventListener("click", updateRow);

let del = document.getElementById("delete");
del.addEventListener("click", deleteRow);
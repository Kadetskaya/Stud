"use strict";

let id = document.getElementById("id");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");

id.addEventListener("change", validationId);
function validationId () {
    let regex= /\D/g;
    if(regex.test(this.value)) {
        id.value = "";
        alert("Введите ID цифрами!")
    }
}

age.addEventListener("change", validationAge);
function validationAge () {
    let regex = /\D/g;
    if(regex.test(this.value)) {
        age.value = "";
        alert("Введите возраст цифрами!")
    }
}

let create = document.getElementById("create");
create.addEventListener("click", getData);

function getData (event) {
    let el = document.getElementById(id.value);
        if (el) {
            alert(`Пользователь с ID ${id.value} уже существует!`);
            return;
        }
    if (id.value == 0 || firstName.value == 0 || lastName.value == 0 || age.value == 0) {
        alert("Заполните все поля!");
        return;
    }
    return createRow();
}

function clear () {
    id.value = "";
    firstName.value = "";
    lastName.value = "";
    age.value = "";
}


function createRow () {
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

let update = document.getElementById("update");
update.addEventListener("click", updateRow);

function updateRow (event) {
    if (id.value == 0 || firstName.value == 0 || lastName.value == 0 || age.value == 0) {
        alert("Заполните все поля!");
        return;
    }
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
    } else if (confirm(`Пользователя с ID ${id.value} нет в списке! Создать?`)) {
        return createRow ();
    }
    clear();
};

let del = document.getElementById("delete");
del.addEventListener("click", deleteRow);

function deleteRow (event) {
    if (confirm(`Вы уверенны, что хотите удалить пользователя с ID ${id.value}?`)) {
        let el = document.getElementById(id.value);
        el.remove();
        clear();
    }
};



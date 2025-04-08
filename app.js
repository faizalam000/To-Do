const input = document.querySelector("input");
const addBtn = document.querySelector("#btn");
const ul = document.querySelector("ul");
let editVal = false;
const curUl = localStorage.getItem("ul");

ul.innerHTML = curUl;

addBtn.addEventListener("click", decide);
function decide() {
  if (editVal) {
    update();
  } else {
    add();
  }
}
function add() {
  if (input.value == "") {
    alert("empty ");
  } else {
    const li = document.createElement("li");

    li.innerText = input.value;

    ul.append(li);
    del(li);
    input.value = "";
  }
}

function del(li) {
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.classList.add("del");
  li.append(editBtn);
  li.append(delBtn);
  editBtn.innerText = "✏️";
  editBtn.classList.add("edit");
  localStorage.setItem("ul", ul.innerHTML);

  const Savedul = localStorage.getItem("ul");
}
ul.addEventListener("click", function (e) {
  if (e.target.className == "del") {
    const btn = e.target;
    const parent = e.target.parentElement;
    parent.remove();
    localStorage.setItem("ul", ul.innerHTML);
  } else if (e.target.className == "edit") {
    const btn1 = e.target;
    const parent1 = e.target.parentElement;
    edit(parent1);
  }
});

let curr;

function edit(li) {
  console.dir(li);

  curr = li;

  inner = li.childNodes[0].data;
  input.value = inner;
  addBtn.innerText = "update";
  editVal = true;
}
let updateText;

function update() {
  updateText = input.value;
  curr.childNodes[0].textContent = updateText;
  inner = updateText;
  addBtn.innerText = "add";
  editVal = false;
  input.value = "";
  localStorage.setItem("ul", ul.innerHTML);
}
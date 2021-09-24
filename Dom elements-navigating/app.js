let value;

const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

value=todoList;
value=cardrow;
value=todo;

//child nodes   --- satır boşluklarını da text olarak sayar!!!
value=todoList.childNodes;
value=todoList.childNodes[0];


//children-elements ---- sadece elementleri alır!!!
value=todoList.children;
value=todoList.children[0];
value=todoList.children[todoList.children.length - 1];


value=cardrow;
value=cardrow.children[2].children[1].textContent="xdxdxd";
// .children[1].textContent="xd";


value=todoList;
value=todoList.firstElementChild;
value=todoList.children.length;
value=todoList.childElementCount;


value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

//element kardeşleri
value=todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;


console.log(value);
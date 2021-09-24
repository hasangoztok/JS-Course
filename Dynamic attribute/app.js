const todoInput=document.getElementById("todo");

let element;

element=todoInput;
element=todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");




element=todoInput;
element=todoInput.placeholder;
// element=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","hey");
todoInput.setAttribute("title","Input");


element=todoInput.getAttribute("placeholder");
element=todoInput.getAttribute("title");

// element=todoInput.removeAttribute("name");



element=todoInput.hasAttribute("required"); //required adında bir attribute var mı?(true-false)
element=todoInput.hasAttribute("name"); //name adında bir attribute var mı?(true-false)


console.log(element);
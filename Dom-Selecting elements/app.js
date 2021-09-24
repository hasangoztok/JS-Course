

let element;

//elementi id'ye göre seçme
element=document.getElementById("todo-form");

//class'a göre seçme
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("list-group-item");

//tag
element=document.getElementsByTagName("li");

//queryselector
element=document.querySelector("#todo-form");
element=document.querySelector(".list-group-item");
element=document.querySelector("li");

//queryselectorall
 element=document.querySelectorAll(".list-group-item");
 element.forEach(function(el) {
     console.log(el);
     
 });


console.log(element);

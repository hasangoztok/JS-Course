//element değiştirme(replace)

const cardbody=document.querySelectorAll(".card-body")[1];

const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="task-title";
newElement.textContent="new todos";

//eski element
oldElement=document.querySelector("#tasks-title");


//replacement

cardbody.replaceChild(newElement,oldElement);


console.log(oldElement);
console.log(newElement);
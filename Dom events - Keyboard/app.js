
//keypress
// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key);

//     // console.log("pressed");
// }

//keydown
// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key); 
// }

//keyup 
// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key); 
// }

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");
todoInput.addEventListener("keyup",changeText);

function changeText(e) {
    // console.log(e.key);

    header.textContent=e.target.value;
     console.log(e.target.value);

    
}
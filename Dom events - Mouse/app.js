const cardBody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");
// console.log(title);



//click event
// title.addEventListener("click",run);

// function run(e) {
//     console.log(e.type);
// }
//************** */
//double click event
// title.addEventListener("dblclick",run);
// function run(e) {
//     console.log(e.type);
// }
//************** */
////mousedown (similar to keydown)
// title.addEventListener("mousedown",run);

// function run(e) {
//     console.log(e.type);
// }
//************** */
// //mouseup (similar to keyup)
// title.addEventListener("mouseup",run);

// function run(e) {
//     console.log(e.type);
// }
//************** */
// //mouseover
// title.addEventListener("mouseover",run);

// function run(e) {
//     console.log(e.type);
// }
//************** */
// //mouseout
// title.addEventListener("mouseout",run);

// function run(e) {
//     console.log(e.type);
// }

//************** */

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// function run(e) {
//     console.log(e.type);
// }

//mouse Enter - mouse Leave
cardBody.addEventListener("mouseenter",run)
cardBody.addEventListener("mouseleave",run)
function run(e) {
    console.log(e.type);
}

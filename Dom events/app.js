const filterInput=document.getElementById("filter");



const todoForm=document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);

function submitForm(e) {
    console.log("Submit Event'i");

    e.preventDefault();
}
// filterInput.onfocus=function () {   //eski yöntem
//     console.log("focused");
// }

// filterInput.addEventListener("focus",function(e) {
//     console.log(e);
//     console.log(e.type);  //event'in tipi
//     console.log(e.target);  //event'in nerede oluştuğu
//     console.log(e.target.placeholder);  //event'in nerede oluştuğu
//     console.log(e.target.className);  //event'in class'ı
//     // console.log("focused");
    
// });
// console.log(filterInput);

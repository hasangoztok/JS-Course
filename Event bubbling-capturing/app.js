//event bubbling

// document.querySelector(".container").addEventListener("click",function() {
//     console.log("div container");    
// });
// document.querySelector(".card-row").addEventListener("click",function() {
//     console.log("Card Row");    
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function() {
//     console.log("card body");    
// });
///yukarı çıkıldıkça parent!

//************ */

//Event Capturing Delegation

const cardbody=document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click",run);

function run(e) {
    if(e.target.className==="fa fa-remove"){
        console.log("silme işlemi")
    }
    if(e.target.id==="filter"){
        console.log("filtreleme işlemi");
    }
    if(e.target.id==="clear-todos"){
        console.log("tüm taskları temizleme");
    }
    
    // console.log(e.target);
}



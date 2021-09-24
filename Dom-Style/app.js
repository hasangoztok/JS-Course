const element=document.querySelector("#clear-todos");

//element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//style ve element özelliklerini değiştirme
// element.className="btn btn-success";
// element.style.color="#000";
// element.style.marginLeft="10px";
// element.href="https://www.google.com/";
// element.target="_blank";

// element.textContent="silin!";

// element.textContent="<span>silin</span>"; //yanlışp kullanım
// element.innerHTML="<span style='color:green'>silin</span>"; //doğrusu


// const elements=document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.background="#eee";
// })

//child selector
let element2=document.querySelector("li:first-child");
element2=document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelectorAll("li:nth-child(odd)");
element2=document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.color="red";
    el.style.background="#eee";
})



console.log(element2);



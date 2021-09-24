// function merhaba(){       //function define
//     console.log("Merhaba");  
// }

// merhaba(); //function call
// merhaba();

// function merhaba(name="bilgi yok",age="bilgi yok"){  
    
//         // if(typeof name==="undefined") name="Bilgi yok!";
//         // if(typeof age==="undefined") name="Bilgi yok!";
//         console.log(`İsim ${name} Yaş:${age} `);  
//     }
    
//     merhaba("hasan",26); 
//     merhaba("hüseyin",26); 
//     merhaba("dsfdsf");

// function square(a){

//     console.log(a*a);

// }
// function cube(a){
//     return a*a*a;
// }

// square(3);

// let a=cube(4);
// console.log(a);

// const merhaba=function(name){
//     console.log("merhaba " + name);
// };
// merhaba("hasan");

//**************** */

//Immediately invoked function expression (IIFE)
// (function(name){
//     console.log("merhaba: " + name)
// }) ("Hasan");


const database={
    host:"local host",
    add: function(){
        console.log("added!");
    },
    get:function(){
        console.log("obtained!");
    },
    update:function(id){
        console.log(`Id: ${id} Updated`);
    },
    delete:function(id){
        console.log(`Id: ${id} Deleted`);
    }
}

console.log(database.host);

database.add();
database.delete(10);




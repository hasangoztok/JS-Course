//variable define
// var a=20;

// var b=10;
// var c=30;
// console.log(a,b,c);

//primitive types

// var a=10; //number veri tipi

// console.log(a);
// console.log(typeof a);

// var b=3.14; //number veri tipi

// console.log(b);
// console.log(typeof b);

// var name="hasan"; //string veri tipi

// console.log(name);
// console.log(typeof name);


// //boolean
// var x = true;
// console.log(x);
// console.log(typeof x);


// //null
// var  f=null;
// console.log(f);
// console.log(typeof f) //object olarak gösteriyor ama js hatası!

// //undefined
// var a;
// console.log(a)

//****************************************************************

//reference types

// //arrray
// var numbers=[1,2,3,4,5];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[0])

// var person={
// name:"hasan",
// age:26

// }

// console.log(person);
// console.log(typeof person);

// var date=new Date();
// console.log(date);
// console.log(typeof date);


// var merhaba=function(){
//     console.log("merhaba");
// }
// console.log(merhaba);
// console.log(typeof merhaba);


//primitive vs reference

var a=10;
var b=a;
console.log(a,b);
a=20;                   //a'nın değişiminden b etkilenmedi
console.log(a,b);


var c=[1,2,3];
var d=c;
c.push(4);      //c'ye 4 eklenince d değişti
console.log(c,d);
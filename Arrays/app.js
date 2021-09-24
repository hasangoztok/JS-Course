let value;
let numbers=[34,24,546,34,132,null];
// const numbers2=new Array(1,2,3,45);

const langs=["Phyton","Java","C++","JavaScript"];
const a=["Merhaba",22,null,undefined,3.14];

//eleman sayısı
value=numbers.length;


//indeksleme
value=numbers[2];
value=numbers[numbers.length-1];

//herhangi bir indeksteki değeri değiştirme
numbers[2]=100;



//index of
value=numbers.indexOf(100);

//array sonuna değer ekleme push
numbers.push(2000);


numbers.unshift(3000);

numbers.pop();


numbers.splice(0,3);

numbers.reverse();

value= numbers.sort();


value=numbers;

// value=numbers.sort( //küçükten büyüğe
//     function(x,y){
//         return x-y;
//     }
// );

numbers = [1000, 500, 200, 300,125]
value=numbers.sort( 
);

console.log(value);
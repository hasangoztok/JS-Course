// let i=0;
// while(i<10){
    
//     if(i==5){
//         break;
//     }
//     if(i==3){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//map function
const users=[
    {name:"hasan",age:26},
    {name:"hüseyin",age:26},
    {name:"blabla",age:20}
];

const names=users.map(function(user){
    return user.name;
});
const ages=users.map(function(user){
    return user.age;
});
console.log(names);
let value;
const programmer={
    name:"Hasan göztok",
    age:26,
    email: "hasangoztok@outlook.com",
    langs : ["C","C#"],
    adress: {
        city: "urfa",
        street: "4038"
    },

    work: function(){
        console.log("working...");
    }


}

value=programmer;

value=programmer.email; //genel notasyon
value=programmer["email"];

value=programmer.langs;

value=programmer.adress.city;

programmer.work();


const programmers = [
    {name: "hasan" ,age:26},
    {name: "hüseyin" ,age:26},

];

value=programmers[0].name;

console.log(value);


let value;

const now=new Date();

console.log(now);

const date1=new Date("5-4-1995 06:15:00");

const date2=new Date("May 4 1995");

const date3= new Date("5/5/1995");

value=date1;

value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();

value=date1.getHours();


//objenin değerlerini değiştirme
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1994)


console.log(value);
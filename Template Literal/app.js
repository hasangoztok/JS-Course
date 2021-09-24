const name1="hasan";
const department="IT";
const salary=3000;

// const a="Name:" + name1 + "\n" + "Department:" + department + "\n" +"Salary:" + salary;

// const a=`Name:${name1}\nDepartment:${department}\nSalary:${salary} `

// console.log(a);


// const html="<ul>"+
//             "<li>" + name1 + "</li>"+
//             "<li>" + department + "</li>"+
//             "<li>" + salary + "</li>"+
//             "</ul>";

function a(){
    return "Merhaba";
}
    const html=`
        <ul>
            <li>${name1}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10/5}</li>
            <li>${a()}</li>
            
        </ul>
    
    `        
;
document.body.innerHTML=html;
var emp = {
    id : 101,
    name: 'Nisha',
    score: 250
}

for(var e in emp){
    console.log(e);
    console.log(emp[e]);
}

console.log("==============Array==============");


// const str = 'Opportunity is does not matter you cerate them'

// for(const op of str){
//     console.log(op);
    
// }

var courses : any =  ['angular', 'React', 'javascript'];

// courses.push('java');
// courses.push(10);

// for(var i=0; i<courses.length; i++ ){
//     console.log(courses[i]);
    
// }

//destructure array: 
var [a, b, c] = courses
console.log(a);
console.log(b);
console.log(c);

//destructure object: 
var std = {
    firstName: 'Nisha',
    lastName: 'Phadtare'
}
//if we want to rename our properties that time we use like that
var {firstName : userFirstName, lastName: userLastName} = std;
console.log(userFirstName);  
console.log(userLastName);      

var arr: number[] = [10, 20, 30, 100, 20];

arr.splice(2,3,88,99);
console.log(arr);
//log(arr.toString());

//assignment
console.log('q.1 Create Employee object use loop and de-structure');

var Employee: any = {
    empId : 101,
    empName: 'Nisha',
}

for(var em in Employee){
    console.log(em);
    
}

// console.log('q.1 Create array  use loop and de-structure');

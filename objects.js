var emp = {
    id: 101,
    name: 'Nisha',
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
console.log("==============Array==============");
// const str = 'Opportunity is does not matter you cerate them'
// for(const op of str){
//     console.log(op);
// }
var courses = ['angular', 'React', 'javascript'];
// courses.push('java');
// courses.push(10);
// for(var i=0; i<courses.length; i++ ){
//     console.log(courses[i]);
// }
//destructure array: 
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
//destructure object: 
var std = {
    firstName: 'Nisha',
    lastName: 'Phadtare'
};
//if we want to rename our properties that time we use like that
var userFirstName = std.firstName, userLastName = std.lastName;
console.log(userFirstName);
console.log(userLastName);
var arr = [10, 20, 30, 100, 20];
arr.splice(2, 3, 88, 99);
console.log(arr.toString());

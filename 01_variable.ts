var b: boolean = true;

var a1: any = {
    productId : 1,
    productName: 'iphone',
    productPrice: 25000
}
console.log(a1);

//homogenious array we can't add different type of data. 
var arr1: Array<string> = ['Html5', 'CSS', 'JavaScript', 'Angular8', 'TypeScript'];
console.log(arr1);

//Heterogenious Array :- and by using any we can create Heterogenious array
var arr2: Array<any> = ['Angular', 1234, true];
console.log(arr2);

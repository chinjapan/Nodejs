//num ber
console.log("----Number----");
var varia1 = 123;
var varia2 = 3;
console.log(varia1);
console.log(varia1/varia2);
console.log(varia1*varia2);
console.log(varia1-varia2);
console.log(varia1%2);
//boolean
console.log("----Boolean----");
var bool1 = true;
console.log(bool1);
console.log(true&&true);
console.log(!true);
//Arrays
console.log("----Arrays----");
console.log("Arrays");
var bool1= [];
bool1.push(1); // add at the end
console.log(bool1);//print
bool1.unshift(2); // add to the top
console.log(bool1);
//Object
console.log("----Object----");
var foo ={
    bar:123
};
console.log(foo);
var foo = {
    bar:123,
    bas:{
        bas1:'some string',
        bas2:345
    }
}
console.log(foo);
//function
function  Add(x,y){
    return x+y;
}
console.log("value is " + Add(1,2));

console.log("set timer");
function PrintTimout(){
    console.log('2000 milliseconds have passed since this demo startted');
};
setTimeout(PrintTimout,2000);

console.log("-------function closure---------");
function outerFunction(arg){
    var variableInOuterFunction = arg;
    function bar(){
        console.log(variableInOuterFunction);
    }

    bar();
}
outerFunction("hello closure!");
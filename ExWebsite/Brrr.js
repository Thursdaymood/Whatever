// A variable is a container for storing data
//  Variable behaves as if it was the value that it contains

// Two steps
// 1. Declaration (var,let(variable scroop),const)  2. Assignment (assignment operator)

/*
let name = "Sasipa";
let surname = "Boon-umchu";
let age = "19";


// change inner html using this element
document.getElementById("div1").innerHTML = "Hello " + name;
document.getElementById("div2").innerHTML = "I'm " + age + " years old";
document.getElementById("div3").innerHTML = "Nice to meet you " + name;
*/ 

let num_student = 48;
let num_class = 4;

console.log(num_student+5);
console.log(num_student-4);
console.log(num_class*2);
console.log(num_student/num_class);
console.log(num_student%num_class);
console.log(num_student++);
console.log(num_student--);
console.log("A number of students is "+num_student/num_class);

num_class+=1; //Augmented assignment
console.log(num_class)


/*  Operator precedence
        • Parenthesis ()
        • Exponents
        • Multiplication & Division
    Addition & Subtraction*/


// JS Input
// 1. use window prompt->Easy way  2. usd html text box->difficult

//let username = window.prompt("What is your name?");
//console.log(username)

/*
let username;
let surname;
document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("label1").innerHTML = "Hello " + username;

}

let age = prompt("How old are you?");
let age_dad = prompt("How old is your father?");

//now age and age_dad var is string so before bring to calculate have change into number
console.log(typeof age,typeof age_dad);
age = Number(age);
age_dad = Number(age_dad);
gap_age = age_dad-age
console.log("Gap age is " + gap_age);



let x = Boolean("Hungry");
let y = Boolean("");
console.log(x,typeof x);
console.log(y, typeof y);

let z = Number("Angry");
console.log(z , typeof z);

// const = a variable that cannot be changed
const PI=3.14159;
let radius;
let circumference;

radius = window.prompt("Insert radius :")
radius = Number(radius);
circumference = 2*PI*radius;
console.log("The circumference is " , circumference)


// Math = An intrinsic object that provide basic math functionality and constants
let x = 3.14159;
let y = 3.5
x = Math.round(x);
y = Math.ceil(y)
z = Math.pow(y, 2);
console.log(x , y , z);

const PI= Math.PI;
console.log(PI)
let maximum = Math.max(x , y , z);
let  minimum = Math.min(x , y , z);
console.log(maximum,minimum);

let a;
let b;
let c;

a = window.prompt("Insert A: ");
a = Number(a);
b = window.prompt("Insert B: ");
b = Number(b);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("Side C: ", c);


document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("Abox").value;
    a = Number(a);

    b = document.getElementById("Bbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("Cside").innerHTML = "Side C: " + c;

}

let count = 0;
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function(){
    count = 0;
    document.getElementById("counterlabel").innerHTML = count;
}

let x;
let y;
let z;
console.log(x,y);
document.getElementById("rollButton").onclick = function(){
    let x = Math.random()*6; //random decimal number
    let y = Math.floor(Math.random()*6)+1; //random 1 to 6
    let z = Math.floor(Math.random()*20)+1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}


let username = "Sasipa B.";
console.log(username.length); //length of string
console.log(username.charAt(0)); //Access by index number
console.log(username.indexOf("B")) //Access by char
console.log(username.lastIndexOf("a")) //Pick the last a char

let username1 = "       Sasipa        "
console.log(username1) // it's also print the space
username1 = username1.trim(); //delete the space before and after word
console.log(username1)

console.log(username.toLocaleUpperCase());

console.log(username = username.toLocaleLowerCase());

let phone_num = "123-456-789"
console.log(phone_num.replaceAll("-","*"))
console.log(phone_num.replace("-","*"))

//Slice() extracts a section of a string 
//and returns it as a new string without modifying the original string
let fullname = "Sasipa Boon-umchu";
let firstname = fullname.slice(0,6);
let surname = fullname.slice(7);
console.log(firstname , surname)

let lastname = fullname.slice(fullname.indexOf(" ")+1)
console.log(lastname)

let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ",text2)) //connect the text1 and text2 with space


//method chaining = calling one method after another in one continuous 
//line of code
let music = "feel the rhythm     "
console.log(music.toLocaleUpperCase().trim())
*/

//if statement
let age1 = 21;
if(age1>=18){
    console.log("You're an adult")
}
else if(age1<0){
    console.log("You haven't born yet")
}
else if(age>=65){
    console.log("You're senior citizen")
}
else{
    console.log("You're a child")
}

let millionaire = true;
if(millionaire){
    console.log("Yes, of course")
}
else{
    console.log("It's possible")
}

var a_parent = document.querySelectorAll(".a_parent");
a_parent.forEach(function(a_parent_item){
    a_parent_item.addEventListener("click",function(){
        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
    
})

let costumer = prompt("Enter Your Name")
let age = prompt("Enter your age")
let gender = prompt("Enter your gender")

function g(gender) {

while(gender !="male" &&  gender !="female"){

gender = prompt("Please enter a correct gender")

}

if(gender == "male" ){
    alert("Welcome Mr. "+costumer )

}
else if(gender == "female" ){
alert("Welcome Ms. "+ costumer)
}
else{
    alert("Welcome "+costumer)
}
}
g(gender);

let drink = prompt("What drink do you want ?", "Hot or Cold ?")

let namedrink = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+costumer+"  Drink name : "+namedrink)

let arr=[costumer,gender,drink,namedrink];
for(let i=0;i<arr.length;i++){
console.log(arr[i])}


const task = document.getElementById("task");

const p1 = document.createElement("p");
const ull =document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.style.color="white";
li2.style.color="white";
li3.style.color="white";
li1.style.fontSize="xx-large";
li2.style.fontSize="xx-large";
li3.style.fontSize="xx-large";
p1.style.color="white";
p1.style.fontSize="xx-large";


p1.textContent=costumer;
li1.textContent=gender;
li2.textContent=drink +" "+ namedrink;
li3.textContent=age;
ull.appendChild(li1);
ull.appendChild(li2);
ull.appendChild(li3);
task.appendChild(p1);
task.appendChild(ull);


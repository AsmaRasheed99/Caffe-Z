




// let costumer = prompt("Enter Your Name")
// let age = prompt("Enter your age")
// let gender = prompt("Enter your gender")

// function g(gender) {

// while(gender !="male" &&  gender !="female"){

// gender = prompt("Please enter a correct gender")

// }

// if(gender == "male" ){
//     alert("Welcome Mr. "+costumer )

// }
// else if(gender == "female" ){
// alert("Welcome Ms. "+ costumer)
// }
// }
// g(gender);

// let drink = prompt("What drink do you want ?", "Hot or Cold ?")

// let namedrink = prompt("Name of your drink ?")
// alert("Your drink is being prepared .")
// console.log("Name : "+costumer+"  Drink name : "+namedrink)

// let arr=[costumer,gender,drink,namedrink];
// for(let i=0;i<arr.length;i++){
// console.log(arr[i])}


const form = document.getElementById("form");
const order = document.getElementById("order");

form.style.color = "white";
form.style.fontSize = "x-large";
order.style.color = "white";
order.style.fontSize = "x-large";

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // prevent the default form submission

    let username = event.target.username.value;
    let age = event.target.age.value;
    let type1 = document.getElementById("cold").checked;
    if(type1){
        type1 = "hot";
    }else{
        type1 = "";}
    let type2 = document.getElementById("hot").checked;
    if(type2){
        type2 = "cold";
    }else{
        type2 = "";}
    let drinkname = event.target.drinkname.value;
  

//     (( drinkname=""
//     if (cold==true){
//         drink=drinkname+"cold"}
// if (hot==true){
//     drink=drinkname+"hot"
// }
// ))


    console.log(type1 , type2)

    console.log(username);

    console.log(age);

    console.log(type);

    console.log(drinkname);
    form.reset();

    render(username, age, type1, type2, drinkname);
})

function render(username, age, type1, type2, drinkname) {
    const pName = document.createElement("p");
    const pAge = document.createElement("p");
    const ptype = document.createElement("p");
    const pDrink = document.createElement("p");
   

    pName.textContent = username;
    pAge.textContent = age;
    ptype.textContent = type1 +" "+ type2 +" "+ drinkname;

    order.appendChild(pName);
    order.appendChild(pAge);
    order.appendChild(ptype);
    order.appendChild(pDrink);
    
   
    }
   
  
let customer = prompt("whats  your name");
let gender=prompt("please enter your gender","male or female")

let genderLower = gender.toLowerCase();

if (genderLower == "male") {
    alert("Welcome to Caffe Z Mr. "+" "+customer);
}
else if(genderLower == "female"){
    alert("Welcome to Caffe Z Ms. "+" "+customer);
}
else{
    alert("Welcome to Caffe Z" );
}

let drink=prompt('Do you prefare a hot or cold coffe? ')
let drinkName=prompt('what is your drink name? ')

alert('Please wait,your drink is being prepared.....')

console.log(customer+ " will have " + drinkName)
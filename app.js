
let costumer = prompt("Enter Your Name")
let gender = prompt("Enter your gender")

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

let drink = prompt("What drink do you want ?", "Hot or Cold ?")

let namedrink = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+costumer+"  Drink name : "+namedrink)

let arr=[costumer,gender,drink,namedrink];
for(let i=0;i<arr.length;i++){
console.log(arr[i])}

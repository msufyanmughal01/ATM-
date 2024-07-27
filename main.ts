import inquirer from "inquirer"
let myBalance :number =35000000000000
const pincode :number =1111

console.log (" welcome to the Sufyan Mughal's ATM ")

let first =await inquirer.prompt([{
    name:"pin",
    message:"enter the pin code ",
    type:"number"
}])

if (first.pin === pincode ){
    console.log ("correct pin code")

let second = await inquirer.prompt([{
    name :"options",
    type :"list",
    message:"select the operation",
    choices :["withdraw","balance","fastcash","deposit"]
}])      

if (second.options === "withdraw"){
let third = await inquirer.prompt ([{
    name :"withdraw",
    message:"enter the amount ",
    type:"number"
}])

if (third.withdraw > myBalance ){
    console.log ("insufficiant balance")
}
else{
    (myBalance-=third.withdraw)
    console.log (`your remaining balance is ${myBalance}`)
}
}
if (second.options === "balance"){
    console.log (`${myBalance}`)
}
if (second.options === "fastcash"){
let fas=await inquirer .prompt([{
    name :"fast",
    message:"select the amount ",
    type :"list",
    choices :["1000","2000","5000","10000","20000"]
}]) 
if (myBalance-=fas.fast){
    console.log ("successfully detected"+`now your balance is ${myBalance}`)
}
}
if (second.options === "deposit"){
let depo =await inquirer.prompt([{
    name :"depositssss",
    message:"enter the amount to deposit",
    type:"number"
}])
if (myBalance += depo.depositssss ){
console.log (`remaining balance is ${myBalance}`)}
}
}
else {
    console.log ("wrong pincode ")
}

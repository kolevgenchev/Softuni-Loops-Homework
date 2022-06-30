function cleverLilly(input){
let lillyAge=Number(input[0])
let priceOfWashingMachine=Number(input[1])
let priceOfToy=Number(input[2])
let money=0;
let toys=0;
let counter=0;
for(let i=1;i<=lillyAge;i++){
if(i%2===0){
    counter+=10
    money=(money+counter)-1
}else {
    toys+=1
}
}
let priceForAllToys=toys*priceOfToy
let FinalSumOfLilly=priceForAllToys+money
let diff=Math.abs(FinalSumOfLilly-priceOfWashingMachine)
if(FinalSumOfLilly>=priceOfWashingMachine){
console.log(`Yes! ${diff.toFixed(2)}`)
}else if(FinalSumOfLilly<priceOfWashingMachine){
    console.log(`No! ${diff.toFixed(2)}`)
}
}
cleverLilly(["10",
"170.00",
"6"])
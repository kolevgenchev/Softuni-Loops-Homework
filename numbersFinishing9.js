function finishing9 (input){
    let number1=Number(input[0])
    let number2=Number(input[1])
    let sum=0
    let numbers=""
for(let i=number1;i<=number2;i++){
    if(i%9===0){
    sum+=i
    numbers+=`${i}\n`
    }
}
console.log(`The sum: ${sum}\n${numbers}`)
}finishing9(["100","200"])
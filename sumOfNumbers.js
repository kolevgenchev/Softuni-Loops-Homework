function sumOfNumbers(input){
    let number=Number(input[0])
    let index=1
    let sum=0;
    while(sum<number){
     let currentNumber=Number(input[index])
     index++
     sum+=currentNumber
    }
    console.log(sum)
}
sumOfNumbers(["100",
"10",
"20",
"30",
"40"])

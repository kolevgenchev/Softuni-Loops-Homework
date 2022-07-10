function sumOfTwoNumbers(input){
    let firstNumber=Number(input[0])
    let secondNumber=Number(input[1])
    let magicNumber=Number(input[2])
    let combinationNumber=0
    let isTrue=false
    for(let i=firstNumber;i<=secondNumber;i++){
        for(let h=firstNumber;h<=secondNumber;h++){
            combinationNumber++
            if(i+h===magicNumber){
                console.log(`Combination N:${combinationNumber} (${i} + ${h} = ${magicNumber})`)
                isTrue=true
                break;
               }
        }
       if (isTrue===true){
        break;
       }
      
      
}
if(!isTrue){
    console.log(`${combinationNumber} combinations - neither equals ${magicNumber}
    `)
   }
}
sumOfTwoNumbers(["1",
"2",
"5"])

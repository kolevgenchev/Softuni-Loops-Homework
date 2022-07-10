function numbers (input){
    let index=0
    let counter=0
    let n=Number(input[index])
    index++
    let currentNumber=0
    while(counter<=n){
        currentNumber=currentNumber*2+1
        if (currentNumber>n){
            break;
        }
        console.log(currentNumber)
        counter++
    }
}
numbers(["31"])
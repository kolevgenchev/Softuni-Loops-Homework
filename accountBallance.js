function account (input){
    counter=0
    let index=0
    let allMoney=0
    while(true){
    money=input[index]
    if(money==="NoMoreMoney"){
        break;
    }else if(money<0){
        console.log(`Invalid operation!`)
        break;
    }
    console.log(`Increase: ${parseFloat(money).toFixed(2)}`)
    allMoney+=parseFloat(money)
    index++
    }
    console.log(`Total: ${allMoney.toFixed(2)}`)
}
account(["120",
"45.55",
"-150"])


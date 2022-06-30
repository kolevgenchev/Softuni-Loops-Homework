function devidible (input){
    let number1=Number(input[0])
    let number2=Number(input[1])
    let sum=0;
    let output=''
    for(let i=number1;i<=number2;i++){
        if (i%9===0){
            sum+=i
            output+=i+"\n"
        }
        
    }
    console.log(`The sum: ${sum}
${output}`)
}
devidible(["100", "200"])
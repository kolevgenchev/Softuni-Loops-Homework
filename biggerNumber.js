function biggerNumber (input){
    let inputElement =input[0]
    let index=1
    let maxNumber=Number. MIN_SAFE_INTEGER
    while(inputElement!=="Stop"){
      let currentNum=Number(inputElement)
      if (currentNum>maxNumber){
          maxNumber=currentNum
      }
      inputElement=input[index]
      index++
    }
    console.log(maxNumber)
  }
biggerNumber(["-10",
"20",
"-30",
"Stop"])

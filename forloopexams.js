function forloop (input){
    let a =input[0]
    let final=0;
    for(let i=0;i<=(a.length)-1;i++){
      let index =parseInt(a[i])
    final+=index
    
}
console.log(`The sum of the digits is:${final}`)
}
forloop(["1234"])
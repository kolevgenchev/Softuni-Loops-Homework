function sumOfNumbers(input){
let n=input[0]
let number=0;
let sum=0;
for(let i=0;i<n.length;i++){
    let number = parseInt(n[i])
    sum+=number
}
console.log(sum)
}
sumOfNumbers(["564891"])
function uniquePins (input){
    let a= Number(input[0])
    let b=Number(input[1])
    let c=Number(input[2])
    let string=''
    for(let i=1;i<=a;i++){
        for(let h=2;h<=b;h++){
            for(let v=1;v<=c;v++){
               if(i%2===0&&v%2===0&&(h===2||h===3||h===5||h===7)){
                string+=i+" "+h+" "+v+" "+"\n"
               }
            }
        }
    }
    console.log(string)
}
uniquePins(["3","5","5"])
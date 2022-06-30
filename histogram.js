function histogram (input){
    let n=Number(input[0])
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;
    for(let i=1;i<=n;i++){
        let num=input[i]
        if(num<200){
            p1++
        }else if(num>=200&&num<=399){
            p2++
        }else if (num>=400&&num<=599){
            p3++
        }else if (num>=600&&num<=799){
            p4++
        }else if (num >=800){
            p5++
        }
    }
    let percent1=p1/n*100
    let percent2=p2/n*100
    let percent3=p3/n*100
    let percent4=p4/n*100
    let percent5=p5/n*100
    console.log(percent1.toFixed(2) + "%")
    console.log(percent2.toFixed(2) + "%") 
    console.log(percent3.toFixed(2) + "%")
    console.log(percent4.toFixed(2) + "%")
    console.log(percent5.toFixed(2) + "%")
}histogram(["3",

"1",

"2",

"999"])
function graduation (input){
    let name=input[0]
    let averageScore=0;
    let i=1
    let index=1
    let badCounter=0
    while(i<=12){
        let currentGrade=Number(input[index])
        averageScore+=currentGrade
         if(currentGrade<4){
            badCounter++
        }
        if(badCounter===2){
            console.log(`${name} has been excluded at ${i-1} grade`)
            break;
        }
        if(i===12){
            console.log(`${name} graduated. Average grade: ${(averageScore/i).toFixed(2)}`)
        }
        i++
        index++
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



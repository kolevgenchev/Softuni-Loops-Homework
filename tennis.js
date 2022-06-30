function tennis (input){
    let NumberOfCompetitions=Number(input[0])
    let startingPoints=Number(input[1])
    let FinalPoints=0
    let currentResult=""
    let wins=0
    for(let i=2;i<=NumberOfCompetitions+2;i++){
     currentResult=input[i]
     switch(currentResult){
        case "W":FinalPoints+=2000;break;
        case "F":FinalPoints+=1200;break;
        case "SF":FinalPoints+=720;break;
     }
     if(currentResult==="W"){
        wins+=1
     }
    }
    let averagePoints=FinalPoints/NumberOfCompetitions
    let FinalPointsPlus=FinalPoints+startingPoints
    let percentWins=wins/NumberOfCompetitions*100
    console.log(`Final points: ${FinalPointsPlus}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${percentWins.toFixed(2)}%`)
}
tennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])
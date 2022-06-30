function oscars (input){
    let nameOfActor=input[0]
    let pointsFromAcademy=Number(input[1])
    let numberOfVoters=Number(input[2])
    let votter =""
    let allPoints=pointsFromAcademy
    let pointsFromVoters=0
    for(let i=3;i<((numberOfVoters*2)+2);i+=2){
       votter=input[i]
       let pointsFromCertainVotter=Number(input[i+1])
       pointsFromVoters=(votter.length*pointsFromCertainVotter)/2
       allPoints+=pointsFromVoters
       if(allPoints>1250.5)break;
    }
    let diff =1250.5-allPoints
    if(allPoints>=1250.5){
     console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${allPoints.toFixed(1)}!`)
    }else if (allPoints<1250.5){
        console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`)
    }
    
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
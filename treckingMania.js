function treckingMania (input){
    let numberOfGroups=Number(input[0])
    let allParticipants=0;
    let currentParticipants=0;
    let Mousala=0;
    let Monblan=0;
    let Kilimandjaro=0;
    let K2=0
    let Everest=0
    for(let i=1;i<=numberOfGroups;i++){
        currentParticipants=Number(input[i])
         allParticipants+=currentParticipants
         if(currentParticipants<=5){
            Mousala+=currentParticipants
         }else if(currentParticipants>5&&currentParticipants<=12){
            Monblan+=currentParticipants
         }else if(currentParticipants>12&&currentParticipants<=25){
            Kilimandjaro+=currentParticipants
         }else if(currentParticipants>25&&currentParticipants<=40){
            K2+=currentParticipants
         }else if(currentParticipants>40){
            Everest+=currentParticipants
         }
    }
    console.log((Mousala/allParticipants*100).toFixed(2)+"%")
    console.log((Monblan/allParticipants*100).toFixed(2)+"%")
    console.log((Kilimandjaro/allParticipants*100).toFixed(2)+"%")
    console.log((K2/allParticipants*100).toFixed(2)+"%")
    console.log((Everest/allParticipants*100).toFixed(2)+"%")
}
treckingMania(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])
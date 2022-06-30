function salary (input){
    let tabs=Number(input[0])
    let salary=Number(input[1])
    let fine=0
        for(let i=0;i<=tabs;i++){
        let webSite=input[i+2]
        switch(webSite){
        case "Facebook":fine+=150;break;
        case "Reddit":fine+=50;break;
        case "Instagram":fine+=100;break;
        }
    }
    let diff=salary-fine
      if(diff<=0){
       console.log("You have lost your salary.")
      }else {
        console.log(Math.floor(diff))
      }
}
salary(["3","500", "Facebook", "Facebook", "Reddit"])
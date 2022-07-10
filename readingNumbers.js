function readingNumbers(input){
    let currentString=""
    let index=0
    while(currentString!="Stop"){
        currentString=input[index]
        index++
        if(currentString==="Stop"){
            break;
        }
        console.log(currentString)
    }
}readingNumbers(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])

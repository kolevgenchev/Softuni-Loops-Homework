function password(input){
    let username=input[0]
    let password=input[1]
    let index=2
    let currentPass=input[index]
    index++
    while(currentPass!=password){
        currentPass=input[index]
        index++
    }
    console.log(`Welcome ${username}!`)
}
password(["Gosho",
"secret",
"secret"])




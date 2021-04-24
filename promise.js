let p = new Promise((resolve,  reject)=>{
    //let a = 1+1;
    let a = 2 + 3;
    if(a == 2){
        resolve("Succeded")
    }
    else{
        reject('Failed')
    }
})
p.then((message)=>{
    console.log("Its resolved and "+ message)
}).catch((message)=>{
    console.log("Its rejected and " + message)
})
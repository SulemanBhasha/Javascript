// const promiseOne = new Promise(function(resolve,reject){
//     //   Do an async task
//     // DB calls, cryprography
//     setTimeout(function(){
//         console.log("Async task is complted")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },200)
// }).then(function(){
//     console.log("Async two resolvednode Promise.js");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Anfal",email:"suleman@exp.com"})
//     },2000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true
//         if(!error)
//         {
//             resolve({username:"suleman", password:"sueman"})
//         }
//         else{
//             reject("Error :Somethimg went wrong")
//         }
//     },4000)
// })
//  promiseFour
//  .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);

// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//    console.log("The promise is either resolved either executed"); 
// })
// console.log("--------------------5------------------");
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"suleman",password:"dodmani"})
//         }
//         else{
//             reject("ERROR : JS went wrong")
//         }
//     },5000)
// })

// async function consumePromiseFive(){
    
//     try {
//         const response = await promiseFive
//        console.log(response); 
//     } catch (error) {
//         console.log(error);
//     }
// } 

// consumePromiseFive()


async  function getAllUser(){
    try{
    const response = await fetch("https://api.github.com/users/SulemanBhasha") ;
    const data = await response.json()
    console.log(data.login +"  get Al users()");}
    catch(error){
        console.log("EE "+error);

    }
}
getAllUser()

    fetch("https://api.github.com/users/SulemanBhasha")
  .then((response)=>{
    return response.json()
  })
  .then((response)=>
    console.log(response.login)
  )
  .catch((error)=>console.log(error))

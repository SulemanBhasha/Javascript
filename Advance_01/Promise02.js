fetch("https://api.github.com/users/SulemanBhasha")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.login);
}).catch((error)=>{ console.log(error)})


function login(){


let username =
document
.getElementById("username")
.value;


let password =
document
.getElementById("password")
.value;



document
.getElementById("loading")
.innerHTML =
"Memproses...";



fetch(API_URL,{

method:"POST",

body:

JSON.stringify({

action:"login",

username:username,

password:password

})


})

.then(r=>r.json())


.then(data=>{


if(data.success){


localStorage.setItem(
"user",
JSON.stringify(data)
);



window.location=
"dashboard.html";


}

else{


alert(
"Username atau password salah"
);


}


});

}


function uploadFile(){


let file =
document
.getElementById(
"eviden"
)
.files[0];



if(!file)
return;



let reader =
new FileReader();



reader.onload=function(){


let base64 =
reader.result
.split(",")[1];



fetch(API_URL,{


method:"POST",


body:

JSON.stringify({

action:"upload",


filename:file.name,


type:file.type,


file:base64,


wilayah:
document
.getElementById(
"wilayah"
)
.value,


instansi:
document
.getElementById(
"instansi"
)
.value



})


});



};



reader.readAsDataURL(file);



}

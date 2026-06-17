
fetch(
API_URL+
"?action=dashboard"
)


.then(r=>r.json())


.then(data=>{


document
.getElementById("total")
.innerHTML =
data.totalPengawasan;



document
.getElementById("ya")
.innerHTML =
data.jawabanYa;



document
.getElementById("tidak")
.innerHTML =
data.jawabanTidak;




new Chart(

document
.getElementById("chart"),


{


type:"bar",


data:{


labels:
data.wilayah,


datasets:[{

label:
"Nilai Kepatuhan (%)",

data:
data.nilai


}]

}


}



);



});

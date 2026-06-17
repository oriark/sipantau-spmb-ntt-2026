
let questions=[];



fetch(
API_URL+"?action=wilayah"
)

.then(r=>r.json())

.then(data=>{


let html="";


data.forEach(x=>{


html+=`

<option>${x}</option>

`;


});


document
.getElementById("wilayah")
.innerHTML+=html;


});






function loadQuestion(){


let kategori =
document
.getElementById("kategori")
.value;



fetch(
API_URL+
"?action=question&kategori="
+kategori
)


.then(r=>r.json())


.then(data=>{


questions=data;



let html="";



data.forEach(q=>{


html+=`


<div class="question">


<b>
${q.nomor}.
${q.pertanyaan}
</b>


<br>


<input type="radio"
name="${q.id}"
value="Ya">
Ya


<input type="radio"
name="${q.id}"
value="Tidak">
Tidak


<input type="radio"
name="${q.id}"
value="Tidak Tahu">
Tidak Tahu



<textarea
id="ket${q.id}"
placeholder="Keterangan">

</textarea>



</div>


`;


});



document
.getElementById("pertanyaan")
.innerHTML=html;


});


}





function submitForm(){



let jawaban=[];



questions.forEach(q=>{


let pilih =
document
.querySelector(
`input[name="${q.id}"]:checked`
);



jawaban.push({


tahap:q.tahap,

nomor:q.nomor,

jawaban:
pilih?
pilih.value:
"",


keterangan:

document
.getElementById(
"ket"+q.id
)
.value



});


});





fetch(API_URL,{


method:"POST",


body:

JSON.stringify({


action:"save",


user:

JSON.parse(
localStorage.user
)
.nama,


kategori:

document
.getElementById(
"kategori"
)
.value,


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
.value,


jawaban:jawaban



})


})


.then(r=>r.json())


.then(()=>{


alert(
"Data berhasil disimpan"
);


location.reload();


});



}

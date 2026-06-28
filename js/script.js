let dataPendonor=JSON.parse(localStorage.getItem("pendonor"))||[];

function tampilkanData(){

let tabel=document.getElementById("tabelPendonor");

if(!tabel) return;

tabel.innerHTML="";

dataPendonor.forEach(function(item,index){

tabel.innerHTML+=`

<tr>

<td>${item.nama}</td>

<td>${item.goldar}</td>

<td>${item.tanggal}</td>

<td>${item.lokasi}</td>

<td>

<button onclick="hapusData(${index})">

Hapus

</button>

</td>

</tr>

`;

});

}

function tambahPendonor(){

let nama=document.getElementById("nama").value;

let goldar=document.getElementById("goldar").value;

let tanggal=document.getElementById("tanggal").value;

let lokasi=document.getElementById("lokasi").value;

if(nama==""||goldar==""||tanggal==""||lokasi==""){

alert("Lengkapi semua data");

return;

}

dataPendonor.push({

nama,

goldar,

tanggal,

lokasi

});

localStorage.setItem("pendonor",JSON.stringify(dataPendonor));

document.getElementById("nama").value="";

document.getElementById("goldar").value="";

document.getElementById("tanggal").value="";

document.getElementById("lokasi").value="";

tampilkanData();

}

function hapusData(index){

dataPendonor.splice(index,1);

localStorage.setItem("pendonor",JSON.stringify(dataPendonor));

tampilkanData();

}

tampilkanData();
let dataRs=JSON.parse(localStorage.getItem("rumahsakit"))||[];

function tampilRs(){

let tabel=document.getElementById("tabelRs");

if(!tabel)return;

tabel.innerHTML="";

dataRs.forEach(function(item,index){

tabel.innerHTML+=`

<tr>

<td>${item.nama}</td>

<td>${item.kota}</td>

<td>${item.negara}</td>

<td>${item.telepon}</td>

<td>

<button onclick="hapusRs(${index})">

Hapus

</button>

</td>

</tr>

`;

});

}

function tambahRumahSakit(){

let nama=document.getElementById("namaRs").value;

let kota=document.getElementById("kota").value;

let negara=document.getElementById("negara").value;

let telepon=document.getElementById("telepon").value;

if(nama==""||kota==""||telepon==""){

alert("Lengkapi data");

return;

}

dataRs.push({

nama,

kota,

negara,

telepon

});

localStorage.setItem("rumahsakit",JSON.stringify(dataRs));

document.getElementById("namaRs").value="";

document.getElementById("kota").value="";

document.getElementById("telepon").value="";

tampilRs();

}

function hapusRs(index){

dataRs.splice(index,1);

localStorage.setItem("rumahsakit",JSON.stringify(dataRs));

tampilRs();

}

tampilRs();
let dataStok=JSON.parse(localStorage.getItem("stokdarah"))||[];

function tampilStok(){

let tabel=document.getElementById("tabelStok");

if(!tabel)return;

tabel.innerHTML="";

dataStok.forEach(function(item,index){

tabel.innerHTML+=`

<tr>

<td>${item.goldar}</td>

<td>${item.jumlah}</td>

<td>

<button onclick="hapusStok(${index})">

Hapus

</button>

</td>

</tr>

`;

});

}

function tambahStok(){

let goldar=document.getElementById("goldar").value;

let jumlah=document.getElementById("jumlah").value;

if(jumlah==""){

alert("Masukkan jumlah kantong");

return;

}

dataStok.push({

goldar,

jumlah

});

localStorage.setItem("stokdarah",JSON.stringify(dataStok));

document.getElementById("jumlah").value="";

tampilStok();

}

function hapusStok(index){

dataStok.splice(index,1);

localStorage.setItem("stokdarah",JSON.stringify(dataStok));

tampilStok();

}

tampilStok();
let dataPermintaan=JSON.parse(localStorage.getItem("permintaan"))||[];

function tampilPermintaan(){

let tabel=document.getElementById("tabelPermintaan");

if(!tabel)return;

tabel.innerHTML="";

dataPermintaan.forEach(function(item,index){

tabel.innerHTML+=`

<tr>

<td>${item.pasien}</td>

<td>${item.rs}</td>

<td>${item.goldar}</td>

<td>${item.kantong}</td>

<td>${item.status}</td>

<td>

<button onclick="hapusPermintaan(${index})">

Hapus

</button>

</td>

</tr>

`;

});

}

function tambahPermintaan(){

let pasien=document.getElementById("pasien").value;

let rs=document.getElementById("rumahsakit").value;

let goldar=document.getElementById("goldar").value;

let kantong=document.getElementById("kantong").value;

if(pasien==""||rs==""||kantong==""){

alert("Lengkapi data");

return;

}

dataPermintaan.push({

pasien,

rs,

goldar,

kantong,

status:"Menunggu"

});

localStorage.setItem("permintaan",JSON.stringify(dataPermintaan));

document.getElementById("pasien").value="";

document.getElementById("rumahsakit").value="";

document.getElementById("kantong").value="";

tampilPermintaan();

}

function hapusPermintaan(index){

dataPermintaan.splice(index,1);

localStorage.setItem("permintaan",JSON.stringify(dataPermintaan));

tampilPermintaan();

}

tampilPermintaan();
let blockchain=JSON.parse(localStorage.getItem("blockchain"))||[];

function randomHash(){

return Math.random().toString(16).substring(2,18).toUpperCase();

}

function tampilBlockchain(){

let tabel=document.getElementById("tabelBlockchain");

if(!tabel)return;

tabel.innerHTML="";

blockchain.forEach(function(item){

tabel.innerHTML+=`

<tr>

<td>${item.block}</td>

<td>${item.donor}</td>

<td>${item.goldar}</td>

<td>${item.hospital}</td>

<td>${item.time}</td>

<td>${item.prev}</td>

<td>${item.hash}</td>

</tr>

`;

});

}

function buatBlock(){

let donor=document.getElementById("donor").value;

let goldar=document.getElementById("goldar").value;

let hospital=document.getElementById("hospital").value;

if(donor==""||hospital==""){

alert("Lengkapi data");

return;

}

let block=1001+blockchain.length;

let prev=blockchain.length==0?

"000000000000":

blockchain[blockchain.length-1].hash;

let hash=randomHash();

let waktu=new Date().toLocaleString();

blockchain.push({

block,

donor,

goldar,

hospital,

time:waktu,

prev,

hash

});

localStorage.setItem("blockchain",JSON.stringify(blockchain));

document.getElementById("donor").value="";

document.getElementById("hospital").value="";

tampilBlockchain();

}

tampilBlockchain();
let distribusi=JSON.parse(localStorage.getItem("distribusi"))||[];

function tampilDistribusi(){

let tabel=document.getElementById("tabelDistribusi");

if(!tabel)return;

tabel.innerHTML="";

distribusi.forEach(function(item,index){

tabel.innerHTML+=`

<tr>

<td>${item.id}</td>

<td>${item.asal}</td>

<td>${item.tujuan}</td>

<td>${item.status}</td>

<td>${item.waktu}</td>

<td>

function hapusDistribusi(index){

distribusi.splice(index,1);

localStorage.setItem(
"distribusi",
JSON.stringify(distribusi)
);

tampilDistribusi();

}

function editDistribusi(index){

<td>

<button onclick="editDistribusi(${index})">
✏️ Edit
</button>

<button onclick="hapusDistribusi(${index})">
🗑 Hapus
</button>

</td>

let data=distribusi[index];

let statusBaru=prompt(
"Ubah Tahap Supply Chain:",
data.status
);

if(statusBaru==null || statusBaru=="") return;

distribusi[index].status=statusBaru;

distribusi[index].waktu=new Date().toLocaleString();

localStorage.setItem(
"distribusi",
JSON.stringify(distribusi)
);

tampilDistribusi();

}

function scanQR(){

let kode=document.getElementById("kodeQR").value;

let hasil=document.getElementById("hasilQR");

if(kode==""){

alert("Masukkan kode QR");

return;

}

hasil.innerHTML=`

<h3>Informasi Kantong Darah</h3>

<p><b>ID QR :</b> ${kode}</p>

<p><b>Status :</b> Verified ✅</p>

<p><b>Golongan Darah :</b> O+</p>

<p><b>Pendonor :</b> Ahmad Firdaus</p>

<p><b>Rumah Sakit :</b> Kuala Lumpur General Hospital</p>

<p><b>Blockchain :</b> Block #1001</p>

<p><b>Hash :</b> 0xA89D18C72F9E1AA</p>

`;

}
function tampilHistory(){

let tabel=document.getElementById("tabelHistory");

if(!tabel)return;

tabel.innerHTML="";

let data=JSON.parse(localStorage.getItem("distribusi"))||[];

data.forEach(function(item){

tabel.innerHTML+=`

<tr>

<td>${item.id}</td>

<td>${item.asal}</td>

<td>${item.tujuan}</td>

<td>${item.status}</td>

<td>${item.waktu}</td>

</tr>

`;

});

}

function cariRiwayat(){

let input=document.getElementById("cari").value.toLowerCase();

let tabel=document.getElementById("tabelHistory");

let baris=tabel.getElementsByTagName("tr");

for(let i=0;i<baris.length;i++){

let isi=baris[i].innerText.toLowerCase();

baris[i].style.display=

isi.indexOf(input)>-1?

"":

"none";

}

}

tampilHistory();

if(document.getElementById("reader")){

const qr=new Html5Qrcode("reader");

qr.start(

{ facingMode:"environment" },

{

fps:10,

qrbox:250

},

function(decodedText){

document.getElementById("hasilQR").innerHTML=`

<h3>✅ QR Berhasil Dipindai</h3>

<p><b>ID :</b> ${decodedText}</p>

<p>Status : Verified</p>

`;

},

function(error){}

);

}


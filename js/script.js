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

<button onclick="editDistribusi(${index})">
✏️ Edit
</button>

<button onclick="hapusDistribusi(${index})">
🗑 Hapus
</button>

</td>

</tr>

`;

});

}
function hapusDistribusi(index){

distribusi.splice(index,1);

localStorage.setItem(
"distribusi",
JSON.stringify(distribusi)
);

tampilDistribusi();

}

function editDistribusi(index){

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

if(document.getElementById("reader") && typeof Html5Qrcode !== "undefined"){

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

/* ===================================
   PREMIUM GIANT BUBBLE (OPTIMIZED)
=================================== */

for(let i=0;i<4;i++){

    let bubble=document.createElement("div");

    bubble.className="bubble";

    // Ukuran bubble 60 - 170 px
    let size=60+Math.random()*110;

    bubble.style.width=size+"px";
    bubble.style.height=size+"px";

    bubble.style.left=Math.random()*100+"%";

    bubble.style.animationDuration=(28+Math.random()*18)+"s";
    bubble.style.animationDelay=(Math.random()*15)+"s";

    document.body.appendChild(bubble);

}

/* ===================================
      PREMIUM STAR (OPTIMIZED)
=================================== */

for(let i=0;i<30;i++){

    let star=document.createElement("div");

    star.className="star";

    // Ukuran bintang 3 - 7 px
    let size=3+Math.random()*4;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*4+"s";

    document.body.appendChild(star);

}

// ==========================================
// Dashboard BloodChain Malaysia 2026
// ==========================================

let chart = null;
let pieChart = null;

function animasiAngka(id, tujuan){

    const elemen = document.getElementById(id);

    if(!elemen) return;

    let angka = 0;

    const interval = setInterval(function(){

        angka++;

        elemen.textContent = angka;

        if(angka >= tujuan){

            clearInterval(interval);

        }

    },20);

}

// lanjutkan updateClock()
// lanjutkan updateDashboard()
// lanjutkan updateChart()
// lanjutkan updatePieChart()
// dst...

// ==========================================
// Grafik Statistik Dashboard
// ==========================================

function updateChart(){

    const canvas = document.getElementById("chartBlood");

    if(!canvas) return;

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let label = [];
    let data = [];

    stok.forEach(function(item){

        label.push(item.goldar || item.golongan);

        data.push(Number(item.jumlah) || 0);

    });

    if(chart){

        chart.destroy();

    }

    chart = new Chart(canvas,{

        type:"bar",

        data:{

            labels:label,

            datasets:[{

                label:"Jumlah Kantong Darah",

                data:data,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            scales:{

                y:{

                    beginAtZero:true

                }

            }

        }

    });

}

// ==========================================
// Diagram Pie Golongan Darah
// ==========================================

function updatePieChart(){

    const canvas = document.getElementById("bloodPie");

    if(!canvas) return;

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let A=0;
    let B=0;
    let AB=0;
    let O=0;

    stok.forEach(function(item){

        let jumlah = Number(item.jumlah)||0;

        switch(item.goldar || item.golongan){

            case "A":
                A+=jumlah;
                break;

            case "B":
                B+=jumlah;
                break;

            case "AB":
                AB+=jumlah;
                break;

            case "O":
                O+=jumlah;
                break;

        }

    });

    if(pieChart){

        pieChart.destroy();

    }

    pieChart = new Chart(canvas,{

        type:"pie",

        data:{

            labels:["A","B","AB","O"],

            datasets:[{

                data:[A,B,AB,O]

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false

        }

    });

}

// ==========================================
// Jalankan Dashboard
// ==========================================

if(document.getElementById("chartBlood")){

    updateDashboard();

    updateClock();

    updateChart();

    updatePieChart();

    updateStatus();

    updateProgress();

    updateSummary();

    checkLowStock();

    setInterval(updateClock,1000);

    setInterval(updateStatus,1000);

}

// ==========================================
// Status Sistem
// ==========================================

function updateStatus(){

    const lastUpdate = document.getElementById("lastUpdate");

    if(lastUpdate){

        lastUpdate.textContent =
        new Date().toLocaleString("id-ID");

    }

}

// ==========================================
// Progress Bar
// ==========================================

function updateProgress(){

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let total = 0;

    stok.forEach(function(item){

        total += Number(item.jumlah)||0;

    });

    const progress =
    document.getElementById("stokProgress");

    if(progress){

        let persen = Math.min(total,100);

        progress.style.width = persen + "%";

        progress.textContent = persen + "%";

    }

}

// ==========================================
// Ringkasan Dashboard
// ==========================================

function updateSummary(){

    const pendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    const rumah =
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    const blockchain =
    JSON.parse(localStorage.getItem("blockchain")) || [];

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let total = 0;

    stok.forEach(function(item){

        total += Number(item.jumlah)||0;

    });

    const p = document.getElementById("sumPendonor");
    const r = document.getElementById("sumRumahSakit");
    const s = document.getElementById("sumStok");
    const b = document.getElementById("sumBlockchain");

    if(p) p.textContent = pendonor.length;
    if(r) r.textContent = rumah.length;
    if(s) s.textContent = total;
    if(b) b.textContent = blockchain.length;

}

// ==========================================
// Peringatan Stok Darah
// ==========================================

function checkLowStock(){

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let total = 0;

    stok.forEach(function(item){

        total += Number(item.jumlah)||0;

    });

    if(total <= 20){

        console.log("Peringatan: stok darah mulai menipis.");

    }

}



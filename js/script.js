console.log("SCRIPT BERHASIL DIMUAT");

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

function hapusData(index){

    dataPendonor.splice(index,1);

    localStorage.setItem("pendonor",JSON.stringify(dataPendonor));

    tampilkanData();

    updateDashboard();
    updateSummary();
    updateChart();
    updatePieChart();
    updateProgress();

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

showToast("✅ Data pendonor berhasil disimpan");

updateDashboard();
updateChart();
updatePieChart();
updateProgress();
updateSummary();

}

function hapusData(index){

    dataPendonor.splice(index,1);

    localStorage.setItem("pendonor",JSON.stringify(dataPendonor));

    tampilkanData();

    updateDashboard();
    updateChart();
    updatePieChart();
    updateProgress();
    updateSummary();

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

function hapusRs(index){

    dataRs.splice(index,1);

    localStorage.setItem("rumahsakit",JSON.stringify(dataRs));

    tampilRs();

    updateDashboard();
    updateSummary();

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

showToast("🏥 Rumah sakit berhasil ditambahkan");

updateDashboard();
updateSummary();

}

function hapusRs(index){

    dataRs.splice(index,1);

    localStorage.setItem("rumahsakit",JSON.stringify(dataRs));

    tampilRs();

    updateDashboard();
    updateSummary();

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

function hapusStok(index){

    dataStok.splice(index,1);

    localStorage.setItem("stokdarah",JSON.stringify(dataStok));

    tampilStok();

    updateDashboard();
    updateSummary();
    updateChart();
    updatePieChart();
    updateProgress();

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

showToast("🩸 Stok darah berhasil ditambahkan");

updateDashboard();
updateChart();
updatePieChart();
updateProgress();
updateSummary();

}

function hapusStok(index){

    dataStok.splice(index,1);

    localStorage.setItem("stokdarah",JSON.stringify(dataStok));

    tampilStok();

    updateDashboard();
    updateChart();
    updatePieChart();
    updateProgress();
    updateSummary();

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

showToast("⛓ Block blockchain berhasil dibuat");

updateDashboard();
updateSummary();

}

tampilBlockchain();
let distribusi=JSON.parse(localStorage.getItem("distribusi"))||[];

function tambahDistribusi(){

let id=document.getElementById("kantong").value;

let asal=document.getElementById("asal").value;

let tujuan=document.getElementById("tujuan").value;

let status=document.getElementById("status").value;

if(id==""||asal==""||tujuan==""){

alert("Lengkapi semua data.");

return;

}

distribusi.push({

id:id,

asal:asal,

tujuan:tujuan,

status:status,

waktu:new Date().toLocaleString("id-ID")

});

localStorage.setItem(

"distribusi",

JSON.stringify(distribusi)

);

document.getElementById("kantong").value="";

document.getElementById("asal").value="";

document.getElementById("tujuan").value="";

tampilDistribusi();

updateSummary();

updateStatus();

}

function hapusDistribusi(index){

distribusi.splice(index,1);

localStorage.setItem(
"distribusi",
JSON.stringify(distribusi)
);

tampilDistribusi();

showToast("🚚 Data supply chain berhasil disimpan");

if(document.getElementById("tabelDistribusi")){

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

data.sort(function(a,b){

return new Date(b.waktu)-new Date(a.waktu);

});

// Update halaman riwayat
tampilHistory();

// Refresh dashboard bila sedang dibuka
updateDashboard();
updateSummary();

tampilDistribusi();

function hapusDistribusi(index){

distribusi.splice(index,1);

localStorage.setItem(
"distribusi",
JSON.stringify(distribusi)
);

tampilDistribusi();
tampilHistory();

updateDashboard();
updateSummary();

}

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

// ==========================================
// Dashboard BloodChain Malaysia 2026
// ==========================================

let chart = null;
let pieChart = null;

function animasiAngka(id, tujuan){

    const elemen = 
    document.getElementById(id);

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

plugins:{

legend:{
display:false
},

title:{
display:true,
text:"Statistik Kantong Darah"
}

},

scales:{

x:{

ticks:{
font:{
size:10
}
}

},

y:{

beginAtZero:true,

ticks:{
stepSize:5,
font:{
size:10
}
}

}

}

}

// ==========================================
// Diagram Pie Golongan Darah
// ==========================================

function updatePieChart(){

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let A = 0;
    let B = 0;
    let AB = 0;
    let O = 0;

    stok.forEach(function(item){

        const jumlah = Number(item.jumlah) || 0;
        const goldar = item.goldar || item.golongan || "";

        if(goldar.startsWith("AB")){

            AB = jumlah;

        }else if(goldar.startsWith("A")){

            A = jumlah;

        }else if(goldar.startsWith("B")){

            B = jumlah;

        }else if(goldar.startsWith("O")){

            O = jumlah;

        }

    });

    const canvas = document.getElementById("bloodPie");

    if(!canvas) return;

    if(pieChart){

        pieChart.destroy();

    }

    pieChart = new Chart(canvas,{

        type:"pie",

        data:{

            labels:["A","B","AB","O"],

            datasets:[{

                label:"Golongan Darah",

                data:[A,B,AB,O]

            }]

        },

        options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

position:"bottom",

labels:{

boxWidth:12,

font:{
size:11
}

}

}

}

}
// ==========================================
// Jalankan function Oclock
// ==========================================

function updateClock(){

    const jam = document.getElementById("digitalClock");
    const tanggal = document.getElementById("digitalDate");

    const now = new Date();

    if(jam){

        jam.textContent =
        now.toLocaleTimeString("id-ID");

    }

    if(tanggal){

        tanggal.textContent =
        now.toLocaleDateString("id-ID",{

            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"

        });

    }

}

function updateDashboard(){

    const pendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    const rumah =
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    const stok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    const blockchain =
    JSON.parse(localStorage.getItem("blockchain")) || [];

    let total = 0;

    stok.forEach(function(item){

        total += Number(item.jumlah)||0;

    });

    animasiAngka("totalPendonor",pendonor.length);
    animasiAngka("totalRumahSakit",rumah.length);
    animasiAngka("totalStok",total);
    animasiAngka("totalBlockchain",blockchain.length);

}

// ==========================================
// Jalankan Dashboard
// ==========================================

if (document.getElementById("chartBlood")) {

    updateDashboard();
    updateClock();
    updateChart();
    updatePieChart();
    updateStatus();
    updateProgress();
    updateSummary();
    checkLowStock();

    setInterval(updateClock, 1000);
    setInterval(updateStatus, 1000);

    window.addEventListener("storage", function () {
        updateDashboard();
        updateChart();
        updatePieChart();

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

position:"bottom"

}

}

}

        updateProgress();
        updateSummary();
    });

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

// ==========================================
// Toggle Menu Admin
// ==========================================
function toggleAdminMenu(){

    const menu = document.getElementById("adminMenu");

    if(!menu) return;

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }

}

// ===============================
// TOAST NOTIFICATION
// ===============================

function showToast(pesan){

let toast=document.getElementById("toast");

if(!toast){

toast=document.createElement("div");

toast.id="toast";

toast.className="toast";

document.body.appendChild(toast);

}

toast.textContent=pesan;

toast.classList.add("show");

setTimeout(function(){

toast.classList.remove("show");

},2500);

}


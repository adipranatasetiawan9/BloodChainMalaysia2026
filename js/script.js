// ============================================
// BloodChain Malaysia 2026
// Developed by Mas Raden Adi Pranata Setiawan
// ============================================

"use strict";

// ===============================
// LOAD DATA LOCAL STORAGE
// ===============================

let dataPendonor = JSON.parse(localStorage.getItem("pendonor")) || [];
let dataRs = JSON.parse(localStorage.getItem("rumahsakit")) || [];
let dataStok = JSON.parse(localStorage.getItem("stokdarah")) || [];
let dataBlockchain = JSON.parse(localStorage.getItem("blockchain")) || [];
let dataDistribusi = JSON.parse(localStorage.getItem("distribusi")) || [];
let dataPermintaan = JSON.parse(localStorage.getItem("permintaan")) || [];

let chart = null;
let pieChart = null;

// ===============================
// JAM DIGITAL MALAYSIA
// ===============================

function updateClock(){

    const clock = document.getElementById("digitalClock");
    const date = document.getElementById("digitalDate");

    if(!clock || !date) return;

    const now = new Date();

    const waktu = now.toLocaleTimeString("en-MY",{
        hour12:false,
        timeZone:"Asia/Kuala_Lumpur"
    });

    const tanggal = now.toLocaleDateString("id-ID",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        timeZone:"Asia/Kuala_Lumpur"
    });

    clock.textContent = waktu;
    date.textContent = tanggal;

}

// ===============================
// ANIMASI ANGKA
// ===============================

function animasiAngka(id,nilai){

    const el=document.getElementById(id);

    if(!el) return;

    let sekarang=0;

    const interval=setInterval(function(){

        sekarang++;

        el.textContent=sekarang;

        if(sekarang>=nilai){

            clearInterval(interval);

            el.textContent=nilai;

        }

    },20);

}

// ===============================
// UPDATE DASHBOARD
// ===============================

function updateDashboard(){

    dataPendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    dataRs =
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    dataStok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataBlockchain =
    JSON.parse(localStorage.getItem("blockchain")) || [];

    let totalStok=0;

    dataStok.forEach(function(item){

        totalStok += Number(item.jumlah)||0;

    });

    animasiAngka("totalPendonor",dataPendonor.length);
    animasiAngka("totalRumahSakit",dataRs.length);
    animasiAngka("totalStok",totalStok);
    animasiAngka("totalBlockchain",dataBlockchain.length);

}

// ===============================
// GRAFIK STATISTIK
// ===============================

function updateChart(){

    const canvas = document.getElementById("chartBlood");

    if(!canvas) return;

    dataStok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let labels = [];
    let values = [];

    dataStok.forEach(function(item){

        labels.push(item.goldar || "-");
        values.push(Number(item.jumlah) || 0);

    });

    if(chart){

        chart.destroy();

    }

    chart = new Chart(canvas,{

        type:"bar",

        data:{

            labels:labels,

            datasets:[{

                label:"Jumlah Kantong Darah",

                data:values,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                y:{
                    beginAtZero:true
                }

            }

        }

    });

}

// ===============================
// PIE CHART
// ===============================

function updatePieChart(){

    const canvas=document.getElementById("bloodPie");

    if(!canvas) return;

    let A=0;
    let B=0;
    let AB=0;
    let O=0;

    dataStok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataStok.forEach(function(item){

        let jumlah=Number(item.jumlah)||0;

        switch(item.goldar){

            case "A":
            case "A+":
            case "A-":
                A+=jumlah;
                break;

            case "B":
            case "B+":
            case "B-":
                B+=jumlah;
                break;

            case "AB":
            case "AB+":
            case "AB-":
                AB+=jumlah;
                break;

            case "O":
            case "O+":
            case "O-":
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

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    position:"bottom"
                }

            }

        }

    });

}

// ===============================
// PROGRESS BAR STOK
// ===============================

function updateProgress(){

    const bar=document.getElementById("stokProgress");

    if(!bar) return;

    let total=0;

    dataStok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataStok.forEach(function(item){

        total+=Number(item.jumlah)||0;

    });

    let persen=Math.min(total,100);

    bar.style.width=persen+"%";
    bar.innerHTML=persen+"%";

}

// ===============================
// RINGKASAN DASHBOARD
// ===============================

function updateSummary(){

    dataPendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    dataRs =
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    dataStok =
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataBlockchain =
    JSON.parse(localStorage.getItem("blockchain")) || [];

    let total=0;

    dataStok.forEach(function(item){

        total+=Number(item.jumlah)||0;

    });

    if(document.getElementById("sumPendonor"))
        document.getElementById("sumPendonor").textContent=dataPendonor.length;

    if(document.getElementById("sumRumahSakit"))
        document.getElementById("sumRumahSakit").textContent=dataRs.length;

    if(document.getElementById("sumStok"))
        document.getElementById("sumStok").textContent=total;

    if(document.getElementById("sumBlockchain"))
        document.getElementById("sumBlockchain").textContent=dataBlockchain.length;

}

// ===============================
// STATUS SISTEM
// ===============================

function updateStatus(){

    const blockchain=document.getElementById("statusBlockchain");
    const database=document.getElementById("statusDatabase");
    const last=document.getElementById("lastUpdate");

    if(blockchain){
        blockchain.textContent="🟢 Online";
    }

    if(database){
        database.textContent="🟢 Connected";
    }

    if(last){

        last.textContent=new Date().toLocaleString("id-ID",{
            timeZone:"Asia/Kuala_Lumpur"
        });

    }

}

// ===============================
// CEK STOK DARAH
// ===============================

function checkLowStock(){

    dataStok=
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    let total=0;

    dataStok.forEach(function(item){

        total+=Number(item.jumlah)||0;

    });

    if(total<=20){

        console.warn("⚠ Stok darah mulai menipis.");

    }

}

// ===============================
// TOGGLE MENU ADMIN
// ===============================

function toggleAdminMenu(){

    const menu=document.getElementById("adminMenu");

    if(!menu) return;

    if(menu.style.display==="block"){

        menu.style.display="none";

    }else{

        menu.style.display="block";

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

// ===============================
// MODUL DATA PENDONOR
// ===============================

function tampilkanData(){

    const tabel = document.getElementById("tabelPendonor");

    if(!tabel) return;

    dataPendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    tabel.innerHTML = "";

    dataPendonor.forEach(function(item,index){

        tabel.innerHTML += `
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

    const nama =
    document.getElementById("nama").value.trim();

    const goldar =
    document.getElementById("goldar").value;

    const tanggal =
    document.getElementById("tanggal").value;

    const lokasi =
    document.getElementById("lokasi").value.trim();

    if(nama=="" || goldar=="" || tanggal=="" || lokasi==""){

        alert("Lengkapi seluruh data.");

        return;

    }

    dataPendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    dataPendonor.push({

        nama:nama,
        goldar:goldar,
        tanggal:tanggal,
        lokasi:lokasi

    });

    localStorage.setItem(
        "pendonor",
        JSON.stringify(dataPendonor)
    );

    document.getElementById("nama").value="";
    document.getElementById("goldar").value="";
    document.getElementById("tanggal").value="";
    document.getElementById("lokasi").value="";

    tampilkanData();

    updateDashboard();
    updateSummary();

    showToast("✅ Data pendonor berhasil disimpan.");

}

function hapusData(index){

    dataPendonor =
    JSON.parse(localStorage.getItem("pendonor")) || [];

    if(index<0 || index>=dataPendonor.length) return;

    dataPendonor.splice(index,1);

    localStorage.setItem(
        "pendonor",
        JSON.stringify(dataPendonor)
    );

    tampilkanData();

    updateDashboard();
    updateSummary();

    showToast("🗑️ Data pendonor berhasil dihapus.");

}

// ===============================
// MODUL RUMAH SAKIT
// ===============================

function tampilRs(){

    const tabel=document.getElementById("tabelRs");

    if(!tabel) return;

    dataRs=
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

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

    const nama=document.getElementById("namaRs").value.trim();
    const kota=document.getElementById("kota").value.trim();
    const negara=document.getElementById("negara").value.trim();
    const telepon=document.getElementById("telepon").value.trim();

    if(nama==""||kota==""||negara==""||telepon==""){

        alert("Lengkapi seluruh data.");

        return;

    }

    dataRs=
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    dataRs.push({

        nama,
        kota,
        negara,
        telepon

    });

    localStorage.setItem(
        "rumahsakit",
        JSON.stringify(dataRs)
    );

    document.getElementById("namaRs").value="";
    document.getElementById("kota").value="";
    document.getElementById("negara").value="";
    document.getElementById("telepon").value="";

    tampilRs();

    updateDashboard();
    updateSummary();

    showToast("🏥 Rumah sakit berhasil ditambahkan.");

}

function hapusRs(index){

    dataRs=
    JSON.parse(localStorage.getItem("rumahsakit")) || [];

    dataRs.splice(index,1);

    localStorage.setItem(
        "rumahsakit",
        JSON.stringify(dataRs)
    );

    tampilRs();

    updateDashboard();
    updateSummary();

}

// ===============================
// MODUL STOK DARAH
// ===============================

function tampilStok(){

    const tabel=document.getElementById("tabelStok");

    if(!tabel) return;

    dataStok=
    JSON.parse(localStorage.getItem("stokdarah")) || [];

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

    const goldar=document.getElementById("goldar").value;
    const jumlah=document.getElementById("jumlah").value;

    if(goldar==""||jumlah==""){

        alert("Lengkapi data stok.");

        return;

    }

    dataStok=
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataStok.push({

        goldar,
        jumlah:Number(jumlah)

    });

    localStorage.setItem(
        "stokdarah",
        JSON.stringify(dataStok)
    );

    document.getElementById("jumlah").value="";

    tampilStok();

    updateDashboard();
    updateChart();
    updatePieChart();
    updateProgress();
    updateSummary();

    showToast("🩸 Stok darah berhasil ditambahkan.");

}

function hapusStok(index){

    dataStok=
    JSON.parse(localStorage.getItem("stokdarah")) || [];

    dataStok.splice(index,1);

    localStorage.setItem(
        "stokdarah",
        JSON.stringify(dataStok)
    );

    tampilStok();

    updateDashboard();
    updateChart();
    updatePieChart();
    updateProgress();
    updateSummary();

}

// ===============================
// MODUL BLOCKCHAIN
// ===============================

function randomHash(){

    return Math.random()
        .toString(16)
        .substring(2,18)
        .toUpperCase();

}

function tampilBlockchain(){

    const tabel=document.getElementById("tabelBlockchain");

    if(!tabel) return;

    dataBlockchain=
    JSON.parse(localStorage.getItem("blockchain")) || [];

    tabel.innerHTML="";

    dataBlockchain.forEach(function(item){

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

    const donor=document.getElementById("donor").value.trim();
    const goldar=document.getElementById("goldar").value;
    const hospital=document.getElementById("hospital").value.trim();

    if(donor==""||hospital==""){

        alert("Lengkapi data blockchain.");

        return;

    }

    dataBlockchain=
    JSON.parse(localStorage.getItem("blockchain")) || [];

    const block=1001+dataBlockchain.length;

    const prev=dataBlockchain.length===0
        ? "000000000000"
        : dataBlockchain[dataBlockchain.length-1].hash;

    const hash=randomHash();

    dataBlockchain.push({

        block,
        donor,
        goldar,
        hospital,
        time:new Date().toLocaleString("id-ID"),
        prev,
        hash

    });

    localStorage.setItem(
        "blockchain",
        JSON.stringify(dataBlockchain)
    );

    tampilBlockchain();

    updateDashboard();
    updateSummary();

    showToast("⛓ Blockchain berhasil dibuat.");

}

// ===============================
// MODUL PERMINTAAN DARAH
// ===============================

function tampilPermintaan(){

    const tabel=document.getElementById("tabelPermintaan");

    if(!tabel) return;

    dataPermintaan=
    JSON.parse(localStorage.getItem("permintaan")) || [];

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

function hapusPermintaan(index){

    dataPermintaan.splice(index,1);

    localStorage.setItem(
        "permintaan",
        JSON.stringify(dataPermintaan)
    );

    tampilPermintaan();

}

// ===============================
// MODUL SUPPLY CHAIN
// ===============================

function tampilDistribusi(){

    const tabel=document.getElementById("tabelDistribusi");

    if(!tabel) return;

    dataDistribusi=
    JSON.parse(localStorage.getItem("distribusi")) || [];

    tabel.innerHTML="";

    dataDistribusi.forEach(function(item,index){

        tabel.innerHTML+=`
        <tr>
            <td>${item.id}</td>
            <td>${item.asal}</td>
            <td>${item.tujuan}</td>
            <td>${item.status}</td>
            <td>${item.waktu}</td>
            <td>
                <button onclick="hapusDistribusi(${index})">
                Hapus
                </button>
            </td>
        </tr>
        `;

    });

}

function hapusDistribusi(index){

    dataDistribusi.splice(index,1);

    localStorage.setItem(
        "distribusi",
        JSON.stringify(dataDistribusi)
    );

    tampilDistribusi();

    updateSummary();

}

// =====================================
// RIWAYAT DISTRIBUSI
// =====================================

function tampilHistory(){

    const tabel=document.getElementById("tabelHistory");

    if(!tabel) return;

    const data=
    JSON.parse(localStorage.getItem("distribusi"))||[];

    tabel.innerHTML="";

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

// =====================================
// QR SCAN (SIMULASI)
// =====================================

function scanQR(){

    const kode=document.getElementById("kodeQR");

    const hasil=document.getElementById("hasilQR");

    if(!kode || !hasil) return;

    if(kode.value==""){

        alert("Masukkan kode QR.");

        return;

    }

    hasil.innerHTML=`
        <h3>✅ QR Verified</h3>
        <p>ID : ${kode.value}</p>
        <p>Status : Blockchain Verified</p>
        <p>BloodChain Malaysia 2026</p>
    `;

}

// =====================================
// SINKRONISASI ANTAR HALAMAN
// =====================================

window.addEventListener("storage",function(){

    updateDashboard();
    updateSummary();
    updateChart();
    updatePieChart();
    updateProgress();
    tampilkanData();
    tampilRs();
    tampilStok();
    tampilBlockchain();
    tampilDistribusi();
    tampilHistory();

});

// =====================================
// INISIALISASI HALAMAN
// =====================================

document.addEventListener("DOMContentLoaded",function(){

    updateDashboard();

    updateSummary();

    updateChart();

    updatePieChart();

    updateProgress();

    updateStatus();

    updateClock();

    tampilkanData();

    tampilRs();

    tampilStok();

    tampilPermintaan();

    tampilBlockchain();

    tampilDistribusi();

    tampilHistory();

    checkLowStock();

    setInterval(updateClock,1000);

    setInterval(updateStatus,1000);

});

<form onsubmit="return loginAdmin()">

<input
type="email"
id="email"
placeholder="Administrator Email"
required>

<input
type="password"
id="password"
placeholder="Password"
required>

<button type="submit">
LOGIN
</button>

</form>

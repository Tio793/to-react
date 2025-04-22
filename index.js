// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) {
//     console.log(i + " adalah kelipatan 3.");
//   }
// }

// let angka = 17;

// if (angka % 2 === 0) {
//   console.log(angka + " adalah bilangan genap.");
// } else {
//   console.log(angka + " adalah bilangan ganjil.");
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.info("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.info("Fizz");
//   } else if (i % 5 == 0) {
//     console.info("Buzz");
//   } else {
//     console.info(i);
//   }
// }

// const coba = ["satu", "dua", "tiga"];

// const [a, b, c] = coba;

// console.info(a);
// console.info(b);
// console.info(c);

// const mhs = {
//   nama: "thio",
//   umur: 18,
//   kelas: "12 SMK",
// };

// const { nama, umur, kelas } = mhs;

// console.info(nama);
// console.info(umur);
// console.info(kelas);

// function coba() {
//   return [1, 2, 3, 4, 5, 6, 7, 8];
// }

// const [a, ...values] = coba();

// console.info(values[0]);

// ({
//   nama: n,
//   umur: u = 16,
//   email: e = "tiotio3175@gmail.com",
//   ...next
// } = {
//   id: 123,
//   nama: "thio",
//   umur: 18,
//   tandaTangan: "none",
//   bulanLahir: 0o5,
//   tanggalLahir: 11,
// });

// const mhs = {
//   id: 123,
//   nama: "thio",
//   umur: 18,
//   tandaTangan: "none",
//   bulanLahir: 0o5,
//   tanggalLahir: 11,
// };

// const {
//   nama: n,
//   umur: u = 16,
//   email: e = "tiotio3175@gmail.com",
//   ...next
// } = mhs;

// function getId({ id }) {
//   return id;
// }

// console.info(getId(mhs));

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a % b, b / a];
// }

// // const jumlah = penjumlahanPerkalian(1, 2)[0];
// // const kalikan = penjumlahanPerkalian(1, 2)[1];
// // console.info(kalikan);

// const [tambah, kurang, kali, modulo, bagi = "eweh"] = kalkulasi(3, 5);
// console.info(bagi);
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     modulo: a % b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kurang, modulo, kali, tambah, bagi } = kalkulasi(5, 3);

// console.info(tambah);

// const mhs1 = {
//   nama: "thio",
//   umur: 18,
//   kelas: "12",
//   nilai: {
//     tugas: {
//       ipa: 70,
//       pkn: 80,
//       mtk: 100,
//     },
//     uts: 60,
//   },
// };

// function cetakMhs(mhs) {
//   return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} Tahun, Saya kelas ${mhs.kelas} SMK`;
// }

// console.info(cetakMhs(mhs1));

// function cetakMhs({
//   nama,
//   umur,
//   kelas: k = "lulus",
//   nilai: {
//     tugas: { pkn, ipa, mtk },
//     uts,
//   },
// }) {
//   return `Halo nama saya ${nama}, saya berumur ${umur} Tahun, Saya kelas ${k} SMK dan Nilai Tugas PKN saya ${pkn} dan nilai mtk saya ${mtk} dan nilai ipa saya ${ipa} dan Nilai UTS saya ${uts}`;
// }

// console.info(cetakMhs(mhs1));

// destructuring Variabel

// const coba = ['satu', 'dua', 'tiga'];
// const [a, , c] = coba;

// console.info();

// const murid = {
//   nama: "Prasthio",
//   umur: 18,
//   kelas: "12",
// }

// const { nama, umur, kelas } = murid;

// console.info(umur)

// // swap

// let satu = 1;
// let dua = 2;

// [satu,dua] = [dua,satu]

// console.info(satu,dua)

// function nyoba() {
//   return [1,2,3,4,5,6,7,8]
// }

// const [one,...rest] = nyoba();
// console.info(rest[0])

// destructuring object

// ({thio:nama, ...value} = {
//   id: 123,
//   thio: "thio",
//   dhika: "dhika",
//   karim: "karim",
//   mujair: "mujair",
// })

// function getId({id:di = 404}) {
//   return di
// }

// console.info(getId(value))

// kasus

// const mahasiswa = [
//   {
//     nama: "Dina",
//     umur: 20,
//     jurusan: "Informatika",
//     kontak: {
//       email: "dina@example.com",
//       hp: "08123456789"
//     }
//   },
//   {
//     nama: "Eka",
//     umur: 21,
//     jurusan: "Sistem Informasi",
//     kontak: {
//       email: "eka@example.com",
//       hp: "08987654321"
//     }
//   }
// ];

// const [ { nama, jurusan, kontak:{ email = "belum ada", hp } } ] = mahasiswa;

// function cetakSemuaNama(listMhs){
//   listMhs.map(({ nama }) => {

//   })
// }

// mahasiswa.push({
//   nama: "Rina",
//   umur: 22,
//   jurusan: "Teknik Komputer",
//   kontak: {
//     hp: "08111111111"
//   }
// })

// cetakSemuaNama(mahasiswa);

// function penjumlahanPerkalian(a,b){
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     modulo: a % b,
//     bagi: a / b
//   }
// }

// const {bagi, kurang,modulo, kali,tambah} = penjumlahanPerkalian(3,5)
// console.info(kurang)

// destructuring function argument

// const mhs1 = {
//   nama: "thio",
//   umur: 18,
//   kelas:"12",
//   nilai : {
//     tugas : {
//       ipa: 70,
//       pkn: 80,
//       mtk: 100
//     },
//     uts: 60
//   }
// }

// function cetakMhs({ nama , umur, kelas, nilai : { tugas : { ipa, pkn, mtk }, uts} }) {
//   return `Halo nama saya ${nama}, saya berumur ${umur} Tahun, Saya kelas ${kelas} nilai Tugas PKN saya ${pkn} dan nilai mtk saya ${mtk} dan nilai ipa saya ${ipa} dan Nilai UTS saya ${uts}`
// }

// console.info(cetakMhs(mhs1))

// a. Buat sebuah function hitungLuasKeliling yang menerima 2 parameter panjang dan lebar, lalu mereturn array berisi luas dan keliling. Lakukan destructuring saat memanggil function-nya.
// function hitungLuasKeliling(panjang,lebar){
//   const luas = panjang * lebar;
//   const keliling = 2 * (panjang + lebar);
//   return [luas,keliling];
// }

// const [luas,keliling] = hitungLuasKeliling(10,20)
// console.info(luas,keliling)

// b. Ubah function hitungLuasKeliling tersebut agar return value-nya menjadi object, lalu lakukan destructuring saat pemanggilan.
// function hitungLuasKeliling(panjang,lebar){
//   const luas = panjang * lebar;
//   const keliling = 2 * (panjang + lebar);
//   return {
//     luas : luas,
//     keliling : keliling
//   };
// }

// const {luas,keliling} = hitungLuasKeliling(10,20)
// console.info(luas,keliling)

// c. Buat function tampilkanProfil yang menerima 1 parameter object user dengan properti: nama, umur, dan alamat. Lakukan destructuring langsung di parameter untuk menampilkan string "Nama saya [nama], umur saya [umur] tahun, alamat saya di [alamat]".

// const user = {
//   nama : "thio",
//   umur : 18,
//   alamat : "jakarta",
// }

// function tampilkanProfil({nama,umur,alamat}){
//   return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}`
// }

// console.info(tampilkanProfil(user))

//d. Tambahkan nested object pekerjaan: {posisi: ..., gaji: ...} ke object user. Ubah function tampilkanProfil untuk mengambil properti posisi juga dengan destructuring bersarang.

// const user = {
//   nama : "thio",
//   umur : 18,
//   alamat : "jakarta",
//   pekerjaan: {
//     posisi: "programmer",
//     gaji: 2000000,
//   }
// }

// function tampilkanProfil({nama,umur,alamat,pekerjaan: {posisi, gaji}}){
//   return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, saya adalah seorang ${posisi} dengan gaji ${gaji.toLocaleString("id-ID")}`
// }

// console.info(tampilkanProfil(user))

// latihan Mini Project: Kalkulator Nilai Mahasiswa

// const mahasiswa1 = {
//   nama: "Dian",
//   umur: 20,
//   nilai: {
//     tugas: 80,
//     uts: 85,
//     uas: 90
//   }
// }

// function cetakNilaiAkhir({nama,umur,nilai : {tugas,uts,uas}}){
//   const nilaiAkhir = (tugas + uts + uas) / 3;
//   return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai akhir saya adalah ${nilaiAkhir}`
// }

// console.info(cetakNilaiAkhir(mahasiswa1))

// function fundamental

// latihan function sandhika

// function jumlahkanDuaKubus(a,b){
//     const kubusA = a ** 3;
//     const kubusB = b ** 3;
//     return kubusA + kubusB
// }

// console.info(jumlahkanDuaKubus(8,3))
// console.info(jumlahkanDuaKubus(10,4))

// 🎯 Mini Project: Kalkulator Biaya Belanja

// const belanjaThio = [
//     {namaProduk: "sabun",harga:5000,qyt:5},
//     {namaProduk: "beras",harga:40000,qyt:2},
//     {namaProduk: "terigu",harga:8000,qyt:6}
// ]

// function hitungTotalBelanja(nama,obj){
//     let total = 0;
//     let daftarProduk = "";
//     let qytP = 0;
//     obj.forEach(({harga,qyt,namaProduk}) => {
//         total += harga * qyt
//         daftarProduk += `\n ${namaProduk} ${qyt}x,`;
//     })

//     if(obj.length === 0){
//         return `Tidak ada Belanjaan`;
//     }else {
//         return `halo ${nama}, total belanja kamu adalah Rp${total.toLocaleString("ID")} berikut Produk yang di beli${daftarProduk}.`;
//     }
// }

// console.info(hitungTotalBelanja("thio",belanjaThio))

//🎯 Mini Project: Kalkulator Belanja + Diskon dan Pajak

// const belanjaThio = [
//     { namaProduk: "Sabun", harga: 5000, qty: 5 },
//     { namaProduk: "Beras", harga: 40000, qty: 2 },
//     { namaProduk: "Terigu", harga: 8000, qty: 6 }
// ];

// function hitungBelanjaLengkap(nama, obj) {
//     if (obj.length === 0) {
//         return `Cart belanja kosong.`;
//     }

//     let produk = "";
//     let totalBelanja = 0;

//     obj.forEach(({ namaProduk, harga, qty }) => {
//         totalBelanja += harga * qty;
//         produk += `\n- ${namaProduk} (${qty}x)`;
//     });

//     function hitungDiskon(hargaAwal) {
//         if (hargaAwal > 100000) {
//             return hargaAwal * 0.10;
//         }
//         return 0;
//     }

//     function hitungPajak(setelahDiskon) {
//         return setelahDiskon * 0.11;
//     }

//     const diskon = hitungDiskon(totalBelanja);
//     const setelahDiskon = totalBelanja - diskon;
//     const pajak = hitungPajak(setelahDiskon);
//     const totalAkhir = Math.round(setelahDiskon + pajak);

//     return `Halo ${nama}, rincian belanja kamu:
// Total Belanja Sebelum Diskon : Rp${totalBelanja.toLocaleString("id-ID")}
// Diskon (10%)                 : Rp${diskon.toLocaleString("id-ID")}
// Pajak (11%)                  : Rp${Math.round(pajak).toLocaleString("id-ID")}
// Total Akhir yang Harus Dibayar: Rp${totalAkhir.toLocaleString("id-ID")}

// Daftar Produk:${produk}
// `;
// }

// console.log(hitungBelanjaLengkap("Thio", belanjaThio));

// Parameter dan arugment

// Soal 1: Function Sederhana

// function ucapSalam(nama) {
//   return `Halo, ${nama}! Selamat datang di website kami.`;
// }

// console.info(ucapSalam("Thio"));

// // Soal 2: Function Penjumlahan

// function jumlahkan(a, b) {
//   return a + b;
// }

// console.info(jumlahkan(5, 6));

// // Soal 3: Function dengan Default Parameter

// function tampilkanPesan(pesan, nama = "Pengunjung") {
//   return `${pesan}, ${nama}`;
// }

// console.info(tampilkanPesan("Selamat Datang"));
// console.info(tampilkanPesan("Selamat Datang", "Thio"));

// // 💡 Ide Proyek Mini: "Kalkulator Sederhana dengan Fungsi"

// function penjumlahan(a, b) {
//   return a + b;
// }

// function pengurangan(a, b) {
//   return a - b;
// }

// function perkalian(a, b) {
//   return a * b;
// }

// function pembagian(a, b) {
//   return a / b;
// }

// let ulangi;

// do {
//   let inputUser = prompt(
//     "Pilih program Matematika: penjumlahan,pengurangan,perkalian,pembagian"
//   );
//   let sesi1 = Number(prompt("masukkan angka pertama").toLowerCase());
//   let sesi2 = Number(prompt("masukkan angka kedua").toLowerCase());

//   if (isNaN(sesi1) || isNaN(sesi2)) {
//     alert("Masukkan hanya angka saja!");
//   } else if (inputUser === "pembagian" && sesi2 === 0) {
//     alert("Tidak bisa membagi dengan nol!");
//   } else if (inputUser === "penjumlahan") {
//     alert(
//       `hasil dari ${sesi1} + ${sesi2} adalah : ${penjumlahan(sesi1, sesi2)}`
//     );
//   } else if (inputUser === "pengurangan") {
//     alert(
//       `hasil dari ${sesi1} - ${sesi2} adalah : ${pengurangan(sesi1, sesi2)}`
//     );
//   } else if (inputUser === "perkalian") {
//     alert(`hasil dari ${sesi1} x ${sesi2} adalah : ${perkalian(sesi1, sesi2)}`);
//   } else if (inputUser === "pembagian") {
//     alert(`hasil dari ${sesi1} : ${sesi2} adalah : ${pembagian(sesi1, sesi2)}`);
//   } else {
//     alert(`anda tidak memilih Program Matematika!`);
//   }
//   ulangi = prompt("Apakah Anda ingin mencoba lagi? (y/n)").toLowerCase();
// } while (ulangi === "y");

// alert("Terima kasih sudah menggunakan kalkulator ini! 🙌");

// function jumlahLuasBalok(p1, l1, t1, p2, l2, t2) {
//   // let luas1 = 2 * (p1 * l1 + p1 * t1 + l1 * t1); // tidak perlu menggunakan variabel
//   // let luas2 = 2 * (p2 * l2 + p2 * t2 + l2 * t2); // tidak perlu menggunakan variabel
//   // let totalLuas = luas1 + luas2; // tidak perlu juga menggunakan variabel
//   return (2 * (p1 * l1 + p1 * t1 + l1 * t1)) + (2 * (p2 * l2 + p2 * t2 + l2 * t2)); //langsung kembalikan nilai nya
// }

// for(let i = 10; i >= 1 ; i--){
//   console.log(i)
// }

// function test(n){
//   if(n === 0) return;

//   console.info(n);
//   return test(n-1);
// }

// test(10)

// function faktorial(n) {
//   if (n === 0) return 1;
//   return n * faktorial(n - 1);
// }

// console.info(faktorial(5))

// 📘 Soal 1: Base Case

// function hitungMundur(n){
//   if(n === 0) return;
//   console.log(n);
//   return hitungMundur(n-1);
// }

// hitungMundur(5)

// 📘 Soal 2: Faktorial Rekursif

// function faktorial(n){
//   if(n === 0) return 1;
//   return n * faktorial(n-1);
// }

// console.info(faktorial(5))

// Soal 3: Deret Fibonacci

// Output: 3

// function fibo(n){
//   if(n <= 1){
//      return n;
//   }else{
//      return fibo(n-1) + fibo(n-2);
//   }
// }

// console.info(fibo(5))

// function fibonacci(n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.info(fibonacci(4));

// 📘 Soal 4: Total Jumlah Angka

// function jumlahAngka(n){
//   if(n === 0) return 0;
//   return n + jumlahAngka(n - 1)
// }

// console.info(jumlahAngka(5))

// 🛠️ Mini Project: "Rekursi Explorer"

// function hitungMundur(n){
//   if(n === 0) return [];
//   return [n].concat(hitungMundur(n-1));
// }

// function faktorial(n){
//   if(n === 0) return 1;
//   return n * faktorial(n-1);
// }

// function jumlahkan(n){
//   if(n === 0) return 0;
//   return n + jumlahkan(n-1);
// }

// function fibonacci(n){
//   if(n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function tampilkanHasil(){
//   const input = parseInt(document.getElementById("angkaInput").value);
//   if(isNaN(input) || input < 0){
//     alert("Masukkan angka yang valid!");
//     return;
//   }
//   document.getElementById("hasil").innerHTML = `
//     <h2>Hasil Rekursi</h2>
//     <p><strong>Hitung Mundur: </strong>${hitungMundur(input).join(", ")}</p>
//     <p><strong>Faktorial: </strong>${faktorial(input)}</p>
//     <p><strong>Jumlah Angka: </strong>${jumlahkan(input)}</p>
//     <p><strong>Fibonacci Ke-${input}:</strong>${fibonacci(input)}</p>`
// }

// Function Deklarasi dan Function Exppression

// 💻 Soal Praktik:
// function greetUser(name) {
//   alert(`Halo ${name}`)
// }

// greetUser("Thio")

// let sayHello = function(name){
//   alert(`Halo ${name}!`)
// }

// sayHello("Thio")

// let siswa = ["adit","dontol","jarwo","sopo"]
// console.info(siswa)
// let hapusSiswa = function(nama){
//   if(nama === "dontol"){
//     siswa.pop()
//   }
//   console.info(siswa)
// }

// hapusSiswa(siswa)

// 🧩 Bagian 2: Mini Project
// 🎯 Nama: “Sistem Pencatatan Kehadiran Siswa”

// let daftarSiswa = [];
// function tambahSiswa(nama) {
//   daftarSiswa.push(nama);
//   console.info(`Menambahkan ${nama} ke daftar siswa.`);
// }

// let tampilkanSiswa = function() {
//   console.info("Daftar Siswa:");
//   for (let i = 0; i < daftarSiswa.length; i++) {
//     console.info(`${i + 1}. ${daftarSiswa[i]}`);
//   }
// }

// (function(){
//   console.info("Sistem kehadiran siap digunakan!")
// })

// let hapusSiswa = function(nama) {
//   let index = daftarSiswa.indexOf(nama);
//   if (index !== -1) {
//     daftarSiswa.splice(index, 1);
//     console.info(`Menghapus ${nama} dari daftar siswa.`);
//   } else {
//     console.warn(`Siswa dengan nama ${nama} tidak ditemukan.`);
//   }
// };

// let siswa = ["adit","dontol","jarwo","sopo"]

// let index = siswa.indexOf("jarwo")
// siswa.splice(index,1)

// console.info(siswa)

// let buah = ["pisang", "semangka"];
// let cari = "durian";
// let index = buah.indexOf(cari);

// // Lengkapi bagian ini
// if (index !== buah) {
//   console.log("Data tidak ditemukan");
// }

// let siswa = ["thio","budi","ayu"]
// let index = siswa.indexOf("ayu")
// if(index !== siswa){
//   console.info("Ayu Hadir")
// }else{
//   console.info("Ayu tidak hadir")
// }

// let daftarSiswa = ["thio","budi","ayu"]

// function cekHadir(nama){
//   let index = daftarSiswa.indexOf(nama)

//   if(index !== -1){
//     console.info(true)
//   }else{
//     console.info(false)
//   }
// }

// let daftar = ["satu", "dua", "tiga"];

// let adaDalamList = function(nama){
//   let index = daftar.indexOf(nama)

//   if(index !== -1){
//     return index !== -1
//   }else{
//     return index !== -1
//   }
// }

// let peserta = ["Andi", "Budi", "Citra"];

// let index = peserta.indexOf("Budi")

// if(index !== -1){
//   peserta.splice(index,1)
// }

// console.info(peserta)

// let data = ["Sinta", "Riko", "Dian"];

// function hapusJikaAda(nama){
//   if(data.indexOf(nama) !== -1){
//     data.splice(data.indexOf(nama),1)
//     return data
//   }else{
//     return `Data tidak di temukan`
//   }
// }

// Higher Order Function

// function selesai(){
//     console.info("Selesai mengerjakan tugas")
// }

// function kerjakanTugas(mataKuliah,selesai){
//     console.info(`Mulai mengerjakan ${mataKuliah}....`)
//     setTimeout(() =>{
//         selesai()
//     },5000)
// }

// kerjakanTugas("Matematika",selesai)

// function filterEven(angka,callback){
//     return angka.filter(callback)
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = filterEven(numbers, function(n) {
//   return n % 2 === 0;
// });

// console.log(result); // Output: [2, 4, 6]

// filter

// const nilai = angka.filter(a => a >= 3)
// console.info(nilai)

// const nilai = []

// for(let i = 0; i < angka.length ; i++){
//     if(angka[i] >= 3){
//        nilai.push(angka[i])
//     }
// }

// console.info(nilai)

// map
// const nilai = angka.map(a => a * 2)
// console.info(nilai)

// reduce
// const nilai = angka.reduce((acc,nilai) => acc + nilai,4)
// console.info(nilai)

// method chaining
// const angka = [-1,-4,7,4,8,3,8,10,3,-2];
// const nilai = angka.filter(a => a >= 5).map(a => a * 3).reduce((acc,a) => acc + a)

// console.info(nilai)

// 💡 Latihan Kecil: Data Sederhana
// Soal:
// Gunakan filter untuk mendapatkan siswa yang nilainya di atas 75.

// Gunakan map untuk mengambil array nama siswa saja.

// Gunakan reduce untuk menghitung total semua nilai siswa.

// const students = [
//     { name: "Rani", score: 85 },
//     { name: "Budi", score: 70 },
//     { name: "Sinta", score: 95 },
//     { name: "Doni", score: 65 },
//     { name: "Eka", score: 80 },
//   ];

//   let dapatkanNilaiTinggi = students.filter(a => a.score >= 75)
//   let mengambilNamaSiswa = students.map(a => a.name)
//   let menjumlahkanNilai = students.map(a => a.score).reduce((acc,a) => acc + a)

//   console.info(menjumlahkanNilai)

// 🧪 Mini Project: Sistem Toko Sederhana

// Tantangan:
// Gunakan filter untuk menampilkan produk yang terjual minimal 1 unit.
// Gunakan map untuk menampilkan nama produk + total pemasukan dari produk tsb (price * sold).
// Gunakan reduce untuk menghitung total seluruh pemasukan toko.

// const products = [
//     { name: "Mouse", price: 150000, sold: 10 },
//     { name: "Keyboard", price: 300000, sold: 5 },
//     { name: "Monitor", price: 1200000, sold: 2 },
//     { name: "USB Cable", price: 50000, sold: 20 },
//     { name: "Webcam", price: 800000, sold: 0 },
//   ];

//   const produkTerjual = products.filter(p => p.sold > 0).reduce((acc, p) => acc + p.sold, 0);
//   const produkNamaTerjual = products.filter(a => a.sold > 0).map(a => a.name).join(", ")
//   const penghasilan = products.map(a => a.price * a.sold).reduce((acc,a) => acc + a).toLocaleString("id")

// console.info(`Produk Terjual sebanyak ${produkTerjual} unit
// Nama Produk yang terjual: ${produkNamaTerjual}
// penghasilan hari ini sebanyak Rp ${penghasilan}`)

// Latihan Filter,Map,Reduce

// ambil semua elemen video
// const videos  = document.querySelectorAll("[data-duration]")

// // pilih hanya yang javascipt lanjutan

// let jsLanjut = [...videos].filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

// // ambil durasi masing masing video
// .map(item => item.dataset.duration)

// // ubah durasi menjadi Number, ubah menit menjadi detik
// .map(waktu => {
//     // "10:30" -> [10, 30] split
//     const parts = waktu.split(":").map(part => Number(part))
//     return (parts[0] * 60) + parts[1]
// })

// // jumlahkan semua detik
// .reduce((acc,a) => acc + a);
// //  ubah formatnya jadi jam menit detik
// const jam = Math.floor(jsLanjut / 3600)
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60)
// const detik = jsLanjut - menit * 60

// // simpan di DOM
// const pDurasi = document.querySelector(".total-durasi")
// pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik.`

// const pVideo = document.querySelector(".jumlah-video")
// const jumlahVideo = [...videos].filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length
// pVideo.textContent = `${jumlahVideo} Video.`

// callBack

// function bacaFile(namaFile,callback){
//     setTimeout(() => {
//         const data = `Data dari file`
//         console.info(`Data dari file ${namaFile} telah selesai dibaca.`)
//         callback(data)
//     },1000)
// }

// function prosesData(data,callback){
//     setTimeout(() => {
//         const hasil = data.toUppperCase();
//         console.info(`Data telah diproses:`, hasil)
//         callback(hasil)
//     },1000)
// }

// function tampilkanHasil(hasil,callback){
//     setTimeout(() => {
//         console.info(`Hasil pemrosesan:`, hasil)
//         callback()
//     },1000)
// }

// bacaFile("data.txt", data => {
//     prosesData(data, hasil => {
//         tampilkanHasil(hasil, () => {
//             console.info("Selesai")
//         })
//     })
// })

// 🧠 Latihan 1: Fungsi dasar dengan callback
// function halo(nama){
//     console.info(`Halo ${nama}!`)
// }

// function prosesCetakNama(callback){
//     const nama = "Thio"
//     callback(nama)
// }

// prosesCetakNama(halo)

// 🧠 Latihan 2: Fungsi hitung dan callback
// function hitungAngka(a,b,callback){
//     const hasil = a + b;
//     callback(a,b,hasil)
// }

// function hasilPenjumlahan(a,b,nilai){
//     console.info(`hasil dari ${a} + ${b} penjumlahan nya adalah ${nilai}`)
// }

// hitungAngka(8,8,hasilPenjumlahan)

// 🧠 Latihan 3: Simulasi proses lambat (pakai setTimeout)

// function prosesData(callBack){
//     console.info("Memproses data...")
//     setTimeout(() => {
//         const hasil = "Data telah di Proses.. 🚀"
//         callBack(hasil)
//     },1000)
// }

// function tampilkanHasil(hasil){
//     console.info(`Hasil Callback : ${hasil}`)
// }

// prosesData(tampilkanHasil)

// 🧩 Latihan 4: Callback bersarang (Nested Callback)
// function ambilDataUser(callback){
//     setTimeout(() => {
//         const user = {id: 1, nama: "thio" }
//         callback(user)
//     },1000)
// }

// function ambilNilaiUser(user,callback){
//     setTimeout(() => {
//         const nilai = {userId: user.id, nilai: 100}
//         callback(nilai)
//     },1000)
// }

// function tampilkanData(nilai){
//     console.info(`User ID: ${nilai.userId} Nilai: ${nilai.nilai}`)
// }

// ambilDataUser(function(user){
//     console.info("User ditemukan:",user);
//     ambilNilaiUser(user, function(nilai){
//         tampilkanData(nilai)
//     })
// })

// 🧪 Latihan Callback #4 - Filter dan Laporan Nilai

// const siswa = [
//     { nama: "Budi", nilai: 85 },
//     { nama: "Ani", nilai: 92 },
//     { nama: "Rudi", nilai: 77 },
//     { nama: "Siti", nilai: 69 },
//     { nama: "Thio", nilai: 95 },
//   ];

// function filterNilaiTinggi(data,callback){
//    const hasil =  data.filter(nilai => nilai.nilai >= 85)
//    callback(hasil)
// }

// function tampilkanNilai(nilai) {
//     console.info("Siswa Nilai Tertinggi:");
//     setTimeout(() => {
//       console.info("Sebentar ya.. sedang mengambil Data.. 🚀");
//       setTimeout(() => {
//         nilai.forEach(e => {
//           console.info(`- ${e.nama} (${e.nilai})`);
//         });
//         setTimeout(() => {
//           console.info("Selesai!");
//         }, 1000);
//       }, 3000); // total jeda tetap sama
//     }, 1000);
//   }

// filterNilaiTinggi(siswa,tampilkanNilai)

// 🧪 Latihan Callback #5 - Proses Daftar Mahasiswa Baru

// function daftarMahasiswa(nama, callback) {
//     setTimeout(() => {
//         callback(nama)
//     },1000)
// }

// function verifikasiMahasiswa(mahasiswa,callback) {
//     setTimeout(() => {
//         if(mahasiswa.length === 0){
//             console.info("Mahasiswa tidak jadi Mendaftar ❌")
//         }else{
//             callback(mahasiswa)
//         }
//     },2000)
// }

// function tampilkanWelcome(mahasiswa){
//     console.info(`Selamat datang, ${mahasiswa} Pendafataranmu Berhasil ✅`)
// }

// daftarMahasiswa("thio",function(mahasiswa){
//     verifikasiMahasiswa(mahasiswa,function(verifikasiBerhasil){
//         tampilkanWelcome(verifikasiBerhasil)
//     })
// })

// function halo(nama){
//     alert(`halo ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt("Masukan Nama Anda")
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`halo ${nama}`))

// const mhs = [
//     {
//         nama: "Thio",
//         kelas: "XII",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
//     {
//         nama: "karim",
//         kelas: "XII",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
//     {
//         nama: "diko",
//         kelas: "XII",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
//     {
//         nama: "kian",
//         kelas: "XII",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
// ]

// console.info("mulai")
// mhs.forEach(m => {
//     setTimeout(()=>{

//         console.info(m.nama)
//     },3000)
// })
// console.info("selesai")

// asynchronous callback

// Vanilla Javascript
// function getDataMahasiswa(url,success,error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send()
// }

// console.info("mulai")
// getDataMahasiswa('mahasiswa.json',result => {
//     const mhs = JSON.parse(result)

//     mhs.forEach(m => console.info(m.nama))
// },() => {

// })
// console.info("selesai")

//  Jquery

// console.info("mulai")
// $.ajax({
//     url: 'mahasiswa.json',
//     success: (result) => {
//         result.forEach(m => console.info(m.nama))
//     },
//     error: (e) => {
//         console.info(e.responseText)
//     }
// })
// console.info("selesai")

// const box = document.querySelector(".siswa")

// $.ajax({
//     url: "siswa.json",
//     success: (dataSiswa) => {
//         let siswa = dataSiswa
//         siswa.map(siswa => {
//             box.innerHTML += `
//             <div class="bg-slate-100 shadow-xl w-76 p-3 rounded-sm h-50">
//             <h1 class="flex justify-center font-bold text-lg">Kartu Tanda Pengenal</h1>
//             <div class="mt-10">Nama : ${siswa.nama}</div>
//             <div>Kelas : ${siswa.kelas}</div>
//             <div>Jurusan : ${siswa.jurusan}</div>
//       </div>
//             `
//         })
//     },
//     error: e => {
//         console.info(e.responseText)
//     }
// })

// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=5e92caec&s=avenger",
//     success: (result) => {
//         console.info(result)
//     },
//     error: e => {
//         console.info(e.responseText)
//     }
// })

// Promise
// let ditepati = false;
// const janji1 = new Promise((resolve,reject) =>{
//     if( ditepati){
//         resolve("janji di tepati")
//     }else {
//         reject("ingkar janji")
//     }
// })

// janji1.then(respon => console.info("oke : " + respon)).catch(respon => console.info("Not Oke : " + respon))

// let ditepati = true;
// const janji2 = new Promise((resolv,reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolv("Janji di Tepati")
//         },4000)
//     }else {
//         setTimeout(() => {
//             reject("Ingkar Janji")
//         },2000)
//     }
// })

// console.info("mulai")
// console.info(janji2.then(respon => console.info(respon)).finally(() => console.info("selesai menunggu")))
// console.info("selesai")

// promise.all

// const film = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'avanger',
//             sutradara: 'sandhika',
//             pemeran: 'sandhika aja'
//         }])
//     },1000)
// })

// const cuaca = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'bandung',
//             temp: '27',
//             kondisi: 'cerah aja'
//         }])
//     },500)
// })

// // film.then(respon => console.info(respon))
// // cuaca.then(respon => console.info(respon))

// Promise.all([film,cuaca]).then(respon => {
//     const [film,cuaca] = respon;
//     console.info(film)
//     console.info(cuaca)
// })

// 💡 Latihan 1: Cek Umur

// function cekUmur(umur) {
//     const validasi = new Promise((resolve,reject) => {
//         if(umur >= 18){
//             resolve("Sudah Dewasa")
//         }else{
//             reject("Masih di bawah umur")
//         }
//     })
//     return validasi
// }

// cekUmur(20).then(respon => console.info(respon)).catch(respon => console.info(respon))

// function loadData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Data Berhasil dimuat")
//         },2000)
//     })
// }

// loadData().then(respon => console.info(respon))

// 💡 Latihan 3: Kalkulasi dengan Promise

// function bagi(a,b){
//     return new Promise((resolve,reject) => {
//         if(b !== 0){
//             console.info("sedang di hitung...")
//             setTimeout(() => {
//                 resolve(a / b)
//             },3000)
//         }else if(b === 0){
//             console.info("sedang di hitung...")
//             setTimeout(() => {
//                 reject(`tidak bisa di bagi dengan nol`)
//             },3000)
//         }
//     })
// }

// bagi(10,0).then(respon => console.info(`Hasil: ${respon}`)).catch(respon => console.info(`Error : ${respon}`))

// 💡 Latihan 4: Promise Berantai (Chaining)
// function step1(){
//     return new Promise(resolv => {
//         setTimeout(() => {
//             resolv("Langkah 1 selesai")
//         },1000)
//     })
// }
// function step2(){
//     return new Promise(resolv => {
//         setTimeout(() => {
//             resolv("Langkah 2 selesai")
//         },2000)
//     })
// }
// function step3(){
//     return new Promise(resolv => {
//         setTimeout(() => {
//             resolv("Langkah 3 selesai")
//         },3000)
//     })
// }

// // step1().then(respon => console.info(respon))
// // step2().then(respon => console.info(respon))
// // step3().then(respon => console.info(respon))

// step1().then(respon1 => {
//     console.info(respon1)
//     return step2()
// }).then(respon2 => {
//     console.info(respon2)
//     return step3()
// }).then(respon3 => console.info(respon3))

// 🧪 Latihan: Registrasi Bertahap

// function cekUsername(username){
//     return new Promise((resolve,reject) => {
//         if(username.length < 4){
//             reject("Username terlalu pendek")
//         }
//         else if(username === "admin"){
//             reject("Username tidak tersedia")
//         }else{
//             resolve("Username Tersedia")
//         }
//     })
// }

// function cekPassword(password){
//     return new Promise((resolve,reject) => {
//         if(password.length < 6){
//             reject("Password terlalu pendek")
//         }else{
//             resolve("Password valid")
//         }
//     })
// }

// function simpanAkun(data){
//     return new Promise((resolv,reject) => {
//         console.info("Menyimpan akun...")
//         setTimeout(() => {
//             resolv("Akun berhasil disimpan 🚀")
//         },2000)
//     })
// }

// const user =  {
//     username: "karim",
//     password: "thiokariem"
// }

// cekUsername(user.username)
// .then(respon => {
//     console.info(respon)
//     return cekPassword(user.password)
// }).then(respon => {
//     console.info(respon)
//     return simpanAkun(user)
// }).then(respon => console.info(respon))
// .catch(respon => console.info(`Error : ${respon}`))

// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=5e92caec&s=" + $(".input-keyword").val(),
//     success: (result) => {
//       const movies = result.Search;
//       movies.map((movie) => {
//         showMovie(movie);
//         // ketika tombol detail di klik
//         movieDetail();
//       });
//     },
//     error: (e) => console.info(e.responseText),
//   });
// });


// fetch
// const searchButton = document.querySelector(".search-button")
// searchButton.addEventListener("click",function(){
//     const inputKeyword = document.querySelector(".input-keyword")
//     fetch("http://www.omdbapi.com/?apikey=5e92caec&s=" + inputKeyword.value)
//     .then(respon => respon.json()).then(respon => {
//         const movies = respon.Search;
//         let cards = '';
//         movies.forEach(movie => cards += showMovie(movie))
//         const movieContainer = document.querySelector(".baris")
//         movieContainer.innerHTML = cards;

//         // ketika tombol detail di click

//         const modalDetailButton = document.querySelectorAll(".modal-detail-button")

//         modalDetailButton.forEach(btn => {
//             btn.addEventListener("click",function(){
//                 const imdbid = this.dataset.imdbid;
//                 fetch("http://www.omdbapi.com/?apikey=5e92caec&i=" + imdbid)
//                 .then(respon => respon.json()).then(result => {
//                     const movieDetil = movieDetail(result)
//                     const modalBody = document.querySelector(".modal-body")
//                     modalBody.innerHTML = movieDetil
//                 })
//             })
//         })
//     })
// })


// function showMovie(movie) {
//   return (document.querySelector(".baris").innerHTML += `
//     <div class="col-md-4 my-3">
// <div class="card">
// <img src="${movie.Poster}" class="card-img-top">
// <div class="card-body">
//   <h5 class="card-title">${movie.Title}</h5>
//   <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
//   <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show detail</a>
// </div>
// </div>
// </div>
//     `);
// }

// function movieDetail() {
//   return document.addEventListener("click", function (e) {
//     if (e.target.classList.contains("modal-detail-button")) {
//       const imdb = e.target.dataset.imdbid;
//       $.ajax({
//         url: "http://www.omdbapi.com/?apikey=5e92caec&i=" + imdb,
//         success: (m) => {
//           const dataFilm = data;
//           const movieDetail = `
//               <div class="container-fluid">
//                 <div class="row">
//                   <div class="col-md-3">
//                     <img src="${data.Poster}" class="img-fluid">
//                   </div>
//                   <div class="col-md">
//                     <ul class="list-group">
//                       <li class="list-group-item"><h4>${data.Title} (${data.Year})</h4></li>
//                       <li class="list-group-item"><strong>Director : </strong>${data.Director}</li>
//                       <li class="list-group-item"><strong>Actors : </strong>${data.Actors}</li>
//                       <li class="list-group-item"><strong>Genre : </strong>${data.Genre}</li>
//                       <li class="list-group-item"><strong>Writer : </strong>${data.Writer}</li>
//                       <li class="list-group-item"><strong>Plot :</strong><br>${data.Plot}</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>`;
//           document.querySelector(".modal-body").innerHTML = movieDetail;
//         },
//         error: (e) => console.info(e.responseText),
//       });
//     }
//   });
// }

//  💡 Mini Project: Daftar Pengguna
// const btnSearch = document.getElementById("btnSearch")
// document.getElementById("btnRefresh").disabled = true;
// btnSearch.addEventListener('click',function(){
//     cariUser()
// })
 
// function cariUser() {
//     const keyword = document.getElementById("search").value.toLowerCase();
//     const hasilBox = document.querySelector(".user-box");
//     hasilBox.innerHTML = "";

  
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(users => {
//         const ditemukan = users.filter(user => user.name.toLowerCase().includes(keyword))
//         if (ditemukan.length > 0) {
//           hasilBox.innerHTML = `<p class="">Mencari Data...</p>`;
//           setTimeout(() => {
//             hasilBox.innerHTML = `<p class="">Data di temukan!</p>`;
//           },700)
//           setTimeout(() => {
//             hasilBox.innerHTML = ditemukan.map(user => `
//                  <div class="w-[400px] h-80 bg-slate-100 rounded-lg shadow-lg p-3 my-5">
//                  <h1 class="font-bold text-2xl text-center mt-5">Profile Pengguna</h1>
//                  <p class="text-xl mt-10"><strong>Nama :</strong> ${user.name}</p>
//                  <p class="text-xl my-5"><strong>Email :</strong> ${user.email}</p>
//                  <p class="text-xl my-5"><strong>City :</strong> ${user.address.city}</p>
//                  </div>
//                  `).join("");

//                  document.getElementById("btnRefresh").disabled = false;
//           },3000)
//         } else {
//           hasilBox.innerHTML = `<p class="text-slate-800">User tidak ditemukan.</p>`;
//         }}).catch(err => {
//           const tampilanError = document.querySelector(".err-base");
//           document.querySelector("#btnRefresh").classList.add("hidden");
//           tampilanError.innerHTML = `<h1 class="text-slate-800 text-4xl">Error 404 Not Found!</h1>`
//         });
//   }

// const input = document.getElementById("input");
// const button = document.getElementById("btnTrigger");

// function trigger() {
//   alert(`Anda telah mengetik : ${input.value}`);
// }


// const coba = new Promise(resolve => {
//     setTimeout(() => {
//     resolve("selesai")
//     },2000)
// })
// console.info(coba)
// coba.then(() => console.info(coba))

// function cobaPromise(){
//     return new Promise((resolve,reject) => {
//         const waktu = 5000;
//         if(waktu < 5000){
//             setTimeout(() => {
//             resolve("selesai")
//             },waktu)
//         }else{
//             reject("gagal")
//         }

//     })
// }

// const coba = cobaPromise();
// // console.info(coba)
// coba.then(() => console.info(coba)).catch(() => console.info(coba))

// async function cobaAsync(){
//     try{
//         const coba = await cobaPromise()
//         console.info(coba)
//     } catch (err){
//         console.info(err)
//     }
// }

// cobaAsync()

// // 🔁 Latihan Dasar

// function getData(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("selesai")
//         },2000)
//     })
// }

// // menggunakan then biasa
// getData().then(respon => console.info(respon))

// // Tugasmu: buat fungsi async untuk memanggil getData dan menampilkan hasilnya
// (async function asing(){
//     const data = await getData()
//     console.info(data)
// })()

// function fetchError(){
//     return new Promise(reject => {
//         setTimeout(() => {
//             reject("Terjadi Kesalahan")
//         },1500)
//     })
// }

// // Tugasmu: buat fungsi async yang menggunakan try/catch untuk menangani error dari fetchError
// async function asing(){
//     try{
//         const data = await fetchError()
//         console.info(data)
//     }catch(error){
//         console.error(error)
//     }
// }
// asing()

//  📦 Latihan Menengah (Simulasi Data)

// function getUser() {
//     return new Promise(resolve => setTimeout(() => resolve("User"), 1000));
//   }
//   function getProfile() {
//     return new Promise(resolve => setTimeout(() => resolve("Profile"), 1000));
//   }
//   function getActivity() {
//     return new Promise(resolve => setTimeout(() => resolve("Activity"), 1000));
//   }
  
//   // Tugasmu: buat satu fungsi async untuk memanggil ketiga fungsi ini secara berurutan dan cetak hasilnya

//   async function asing() {
//     try{
//         const user = await getUser()
//         const profile = await getProfile()
//         const activity = await getActivity()
//         console.info(user)
//         console.info(profile)
//         console.info(activity)
//     }catch(error){
//         console.error(error)
//     }
//   }

//   asing()

// 🚀 Mini Project Kecil
// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//     setTimeout(() => {
//   console.log(data);
//     },1000)
//     }catch(error){
//         console.info(error)
//     }
//   }

//   getUsers()

// (async function getData(){
//     try{
//      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//      if(!response.ok){
//         throw new Error(`Error : ${response.status}`)}
//      const data = await response.json()
//      console.info(data)
//     }catch(err){
//         console.info(err)
//     }
// })();

const apiKey = "5e92caec";
const filmContainer = document.getElementById("content");
const info = document.getElementById("info");
let daftarFilm = [];

async function getMovie(){
    const keyWord = document.getElementById("input").value.toLowerCase()
    // if(!keyWord) return alert("Masukan Judul Film!")
    try{
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyWord}`) 
        const data = await response.json()
        if(!response.ok){
            daftarFilm = [];
            throw new Error(`Error : ${response.statusText}`)
        }
        daftarFilm = data.Search
        boxContent(daftarFilm) // tampilkan filmm
        info.textContent =""
    }catch(err){
        console.error(err)
    }
}

getMovie()

function boxContent(dataFetch){
    filmContainer.innerHTML = ""
    dataFetch.forEach(data => {
        filmContainer.innerHTML +=`
        <div class="bg-white w-150 h-auto shadow-xl rounded-md border-1 border-slate-200 px-2">
        <h1 class="text-3xl mt-4">${data.Title}</h1>
        <h2 class="text-2xl mt-4 mb-2">${data.Year}</h2>
        <img src="${data.Poster}" class="w-65 h-70 object-cover mb-2">
      </div>
        `
    })
}

function filterTahun(){
    const tahun = daftarFilm.filter(data => data.Year > 2010);
    boxContent(tahun)
    info.textContent = `🚀 ${tahun.length} Film di tampilkan setelah filter`
}

function totalFilm(){
    const total = daftarFilm.length
    const totalFilm = daftarFilm.reduce((acc,data) => acc + ", " + data.Title, " ").slice(2);

    info.textContent = `📊 ${total} Film di tampilkan: ${totalFilm}`
}

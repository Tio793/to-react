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

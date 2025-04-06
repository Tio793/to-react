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

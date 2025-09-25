// script.js
// E-book: Dari Gagal Menjadi Berhasil (10 Bab, 35 Halaman)

const pages = [
  // ================= BAB 1 =================
  {
    title: "Bab 1 - Halaman 1",
    content: "Kegagalan sering dianggap sebagai akhir dari segalanya. Padahal, kegagalan adalah bagian penting dari perjalanan menuju keberhasilan. Tidak ada seorang pun di dunia ini yang mencapai puncak tanpa pernah merasakan jatuh terlebih dahulu. Justru di titik jatuh itu, kita menemukan pelajaran yang tak ternilai."
  },
  {
    title: "Bab 1 - Halaman 2",
    content: "Thomas Alva Edison adalah contoh nyata. Ia gagal ribuan kali ketika mencoba menciptakan lampu pijar. Namun ia berkata dengan tegas: 'Aku tidak gagal, aku hanya menemukan 10.000 cara yang tidak berhasil.' Dari kata-kata itu, kita belajar bahwa kegagalan bukanlah musuh, melainkan sahabat yang memberi arah."
  },
  {
    title: "Bab 1 - Halaman 3",
    content: "Banyak orang berhenti setelah gagal sekali. Mereka mengira dunia menolak mereka. Padahal, keberhasilan sering kali hanya berjarak satu langkah setelah kegagalan terakhir. Mereka yang bertahanlah yang akhirnya mencapai garis akhir."
  },
  {
    title: "Bab 1 - Halaman 4",
    content: "Kita perlu mengubah cara pandang: gagal bukan berarti kita tidak mampu, melainkan kita sedang diberi kesempatan untuk mencoba cara lain. Dan setiap cara baru mendekatkan kita pada keberhasilan yang kita impikan."
  },

  // ================= BAB 2 =================
  {
    title: "Bab 2 - Halaman 5",
    content: "Dalam perjalanan hidup, kita sering dihadapkan pada ujian yang membuat kita ragu pada diri sendiri. Pertanyaan terbesar biasanya adalah: 'Apakah aku cukup baik?'"
  },
  {
    title: "Bab 2 - Halaman 6",
    content: "Kenyataannya, rasa ragu adalah hal yang manusiawi. Orang-orang hebat pun pernah merasa tidak mampu. Bedanya, mereka tidak berhenti. Mereka tetap melangkah meski hati bergetar."
  },
  {
    title: "Bab 2 - Halaman 7",
    content: "Kunci dari melawan kegagalan adalah percaya pada diri sendiri. Percaya bahwa setiap usaha tidak akan sia-sia, walau hasilnya belum terlihat. Percaya bahwa setiap tetes keringat akan dibalas dengan hasil di waktu yang tepat."
  },

  // ================= BAB 3 =================
  {
    title: "Bab 3 - Halaman 8",
    content: "Tidak ada keberhasilan tanpa proses. Proses itulah yang membentuk kita. Bayangkan sebuah benih yang ditanam. Ia tidak langsung tumbuh menjadi pohon besar. Ia harus melewati hujan, terik, angin, bahkan kemungkinan dicabut atau diinjak."
  },
  {
    title: "Bab 3 - Halaman 9",
    content: "Begitu juga manusia. Kita tidak bisa instan berhasil. Kita perlu melewati ujian, kegagalan, penolakan, bahkan hinaan. Semua itu adalah pupuk yang menumbuhkan kekuatan dalam diri kita."
  },
  {
    title: "Bab 3 - Halaman 10",
    content: "Orang-orang sukses tidak dilahirkan dengan segalanya. Mereka ditempa oleh waktu. Semakin keras ujian, semakin kuat mereka. Dan pada akhirnya, mereka berdiri dengan kokoh karena sudah terbiasa bangkit setiap kali jatuh."
  },
  {
    title: "Bab 3 - Halaman 11",
    content: "Proses inilah yang sering dihindari oleh banyak orang. Padahal, justru di situlah letak kunci keberhasilan. Jika kita mau bersabar, hasil yang indah pasti menunggu."
  },

  // ================= BAB 4 =================
  {
    title: "Bab 4 - Halaman 12",
    content: "Setiap kegagalan menyimpan pelajaran. Tugas kita adalah menemukan makna di balik jatuhnya kita. Apa yang salah? Apa yang bisa diperbaiki? Apa yang bisa dicoba lain kali?"
  },
  {
    title: "Bab 4 - Halaman 13",
    content: "Banyak orang melewati kegagalan tanpa belajar darinya. Akibatnya, kesalahan yang sama terulang. Tetapi mereka yang belajar, menjadikan kegagalan sebagai batu loncatan."
  },
  {
    title: "Bab 4 - Halaman 14",
    content: "Albert Einstein pernah berkata: 'Kegilaan adalah melakukan hal yang sama berulang-ulang dan mengharapkan hasil yang berbeda.' Dari sinilah kita belajar: gagal boleh, tapi jangan gagal dengan cara yang sama."
  },

  // ================= BAB 5 =================
  {
    title: "Bab 5 - Halaman 15",
    content: "Salah satu rahasia orang berhasil adalah konsistensi. Mereka terus bergerak walau lambat, walau kecil, walau tidak terlihat. Konsistensi lebih penting daripada kecepatan."
  },
  {
    title: "Bab 5 - Halaman 16",
    content: "Bayangkan air yang menetes di atas batu. Awalnya tidak ada perubahan. Tapi setelah waktu yang lama, batu itu berlubang. Bukan karena kerasnya air, melainkan karena konsistensinya."
  },
  {
    title: "Bab 5 - Halaman 17",
    content: "Begitu juga kita. Jika kita konsisten belajar, bekerja, mencoba, maka sekecil apa pun usaha kita, pada akhirnya akan membuahkan hasil besar."
  },
  {
    title: "Bab 5 - Halaman 18",
    content: "Kegagalan terbesar bukanlah ketika kita jatuh, melainkan ketika kita berhenti. Jadi teruslah melangkah, sekecil apa pun langkah itu."
  },

  // ================= BAB 6 =================
  {
    title: "Bab 6 - Halaman 19",
    content: "Lingkungan sangat berpengaruh dalam perjalanan kita. Jika kita berada di sekitar orang-orang yang mendukung, kita akan termotivasi. Tetapi jika kita berada di lingkungan yang negatif, kita bisa kehilangan semangat."
  },
  {
    title: "Bab 6 - Halaman 20",
    content: "Orang-orang yang berhasil biasanya punya mentor, sahabat, atau keluarga yang selalu memberi semangat. Mereka dikelilingi oleh energi positif yang membuat mereka tidak mudah menyerah."
  },
  {
    title: "Bab 6 - Halaman 21",
    content: "Pilihlah lingkunganmu dengan bijak. Dekatlah dengan orang-orang yang membuatmu lebih baik, bukan dengan mereka yang menarikmu ke bawah."
  },

  // ================= BAB 7 =================
  {
    title: "Bab 7 - Halaman 22",
    content: "Kegagalan sering membuat kita lupa bersyukur. Kita terlalu fokus pada apa yang tidak berhasil, sehingga melupakan hal-hal yang sudah kita capai."
  },
  {
    title: "Bab 7 - Halaman 23",
    content: "Padahal, rasa syukur memberi kekuatan luar biasa. Dengan bersyukur, kita menyadari bahwa hidup ini penuh berkah, walau kita belum mendapatkan semua yang kita inginkan."
  },
  {
    title: "Bab 7 - Halaman 24",
    content: "Bersyukur membuat hati lebih tenang, pikiran lebih jernih, dan langkah lebih ringan. Dan dari sanalah energi untuk bangkit kembali muncul."
  },

  // ================= BAB 8 =================
  {
    title: "Bab 8 - Halaman 25",
    content: "Setiap orang punya mimpi. Namun tidak semua berani mengejarnya. Kegagalan sering kali menghentikan banyak mimpi yang sebenarnya indah."
  },
  {
    title: "Bab 8 - Halaman 26",
    content: "Orang berhasil adalah mereka yang tidak membiarkan kegagalan mencuri mimpi mereka. Mereka mungkin jatuh, tetapi mereka selalu kembali bangkit dengan mimpi yang sama."
  },
  {
    title: "Bab 8 - Halaman 27",
    content: "Jangan pernah menyerah pada mimpimu hanya karena satu kegagalan. Jika mimpi itu penting bagimu, maka ia pantas diperjuangkan sampai akhir."
  },

  // ================= BAB 9 =================
  {
    title: "Bab 9 - Halaman 28",
    content: "Doa adalah kekuatan terbesar manusia. Saat kita gagal, doa memberi kita ketenangan. Saat kita bingung, doa memberi kita jalan."
  },
  {
    title: "Bab 9 - Halaman 29",
    content: "Banyak kisah sukses dimulai dari doa yang tulus. Doa membuat hati lebih kuat, pikiran lebih jernih, dan langkah lebih ringan."
  },
  {
    title: "Bab 9 - Halaman 30",
    content: "Jangan pernah meremehkan kekuatan doa. Sebab doa bukan hanya permintaan, melainkan energi yang menyalakan harapan di hati kita."
  },

  // ================= BAB 10 =================
  {
    title: "Bab 10 - Halaman 31",
    content: "Perjalanan dari gagal menjadi berhasil bukanlah perjalanan yang singkat. Ada air mata, ada luka, ada rasa ingin menyerah. Namun di balik semua itu, ada kekuatan yang membuat kita terus berjalan."
  },
  {
    title: "Bab 10 - Halaman 32",
    content: "Keberhasilan bukanlah garis akhir, melainkan perjalanan panjang. Ia bukan tentang seberapa cepat kita sampai, tetapi seberapa kuat kita bertahan."
  },
  {
    title: "Bab 10 - Halaman 33",
    content: "Maka, jangan takut gagal. Banggalah karena kamu sudah berani mencoba. Sebab orang yang berani gagal, adalah orang yang sedang menuju keberhasilan."
  },
  {
    title: "Bab 10 - Halaman 34",
    content: "Pada akhirnya, hidup adalah tentang berani melangkah, belajar dari jatuh, dan terus bangkit. Dari situlah kita belajar arti sejati dari keberhasilan."
  },
  {
    title: "Bab 10 - Halaman 35",
    content: "Doa sederhana: 'Tuhan, beri aku kekuatan untuk bangkit setiap kali aku jatuh. Beri aku kesabaran untuk bertahan dalam proses. Dan beri aku keberanian untuk terus melangkah.'"
  },
  {
    title: "📖 Halaman 36",
    makna: "Setiap kegagalan bukanlah akhir, melainkan tanda bahwa kita sedang belajar. Dari jatuh, kita tahu bagaimana cara berdiri lebih kuat. Dari kehilangan, kita belajar arti menghargai. Dan dari penolakan, kita paham bahwa belum tentu semua yang kita inginkan adalah yang terbaik untuk kita."
  },
  {
    title: "📖 Halaman 37",
    motivasi: "Bersyukurlah meski langkah terasa berat. Karena rasa syukur memberi kita tenaga baru untuk melanjutkan perjalanan. Ingatlah, orang yang sukses bukan mereka yang tak pernah gagal, melainkan mereka yang selalu bangkit setelah jatuh. Dan bangkitnya itu dimulai dari hati yang ikhlas dan bersyukur."
  },
];


// ================= Logic Navigasi =================
let currentPage = 0;

function renderPage() {
  document.getElementById("chapter-title").innerText = pages[currentPage].title;
  document.getElementById("page-content").innerText = pages[currentPage].content;
  document.getElementById("page-number").innerText = `Halaman ${currentPage + 1} / ${pages.length}`;
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
});

// Tampilkan halaman pertama
renderPage();
    

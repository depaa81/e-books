const chapters = [
  {
    title: "Bab 1 – Mengapa Kita Gagal?",
    content: `
      <p>Gagal adalah bagian alami dari perjalanan hidup. Bukan tanda akhir, tapi sinyal bahwa ada sesuatu yang perlu diperbaiki.</p>
      <p>Banyak tokoh besar (Thomas Edison, Jack Ma, J.K. Rowling) pernah gagal berkali-kali sebelum sukses.</p>
      <p><strong>Intinya:</strong> kegagalan bukan musuh, melainkan guru terbaik.</p>
    `
  },
  {
    title: "Bab 2 – Mengubah Pola Pikir",
    content: `
      <p><em>Fixed Mindset</em> vs <em>Growth Mindset</em>.</p>
      <p>- Orang yang gagal lalu berhenti → fixed mindset.<br>
         - Orang yang gagal lalu belajar → growth mindset.</p>
      <p><strong>Cara membangun pola pikir baru:</strong></p>
      <ul>
        <li>Ganti kata “gagal” dengan “proses”.</li>
        <li>Ubah pertanyaan dari “Kenapa aku gagal?” menjadi “Apa yang bisa kupelajari?”.</li>
        <li>Bersyukur atas setiap pengalaman, sekecil apapun.</li>
      </ul>
    `
  },
  {
    title: "Bab 3 – Bangkit dari Kegagalan",
    content: `
      <p><strong>Langkah praktis:</strong></p>
      <ol>
        <li>Akui kegagalan, jangan lari dari kenyataan.</li>
        <li>Evaluasi kesalahan.</li>
        <li>Susun strategi baru yang lebih realistis.</li>
        <li>Cari mentor atau dukungan dari orang sekitar.</li>
        <li>Mulai lagi dengan langkah kecil.</li>
      </ol>
      <blockquote>“Kegagalan hanyalah kesempatan untuk memulai lagi, kali ini dengan lebih cerdas.” – Henry Ford</blockquote>
    `
  },
  {
    title: "Bab 4 – Strategi Meraih Keberhasilan",
    content: `
      <ul>
        <li><strong>Tetapkan tujuan yang jelas</strong> → tulis secara spesifik.</li>
        <li><strong>Disiplin waktu & kebiasaan kecil</strong> → konsistensi adalah kunci.</li>
        <li><strong>Belajar terus-menerus</strong> → jangan berhenti menambah ilmu.</li>
        <li><strong>Bangun jaringan</strong> → hubungan baik membuka pintu.</li>
        <li><strong>Pantang menyerah</strong> → sukses datang ketika orang lain berhenti.</li>
      </ul>
    `
  },
  {
    title: "Bab 5 – Kisah Inspirasi Singkat",
    content: `
      <p><strong>Thomas Edison:</strong> 1.000 kali gagal sebelum menemukan lampu pijar.</p>
      <p><strong>Jack Ma:</strong> ditolak kerja berkali-kali, termasuk di KFC, sebelum mendirikan Alibaba.</p>
      <p><strong>Oprah Winfrey:</strong> pernah dipecat, kini ikon media dunia.</p>
    `
  },
  {
    title: "Bab 6 – Kamu Bisa!",
    content: `
      <p>Setiap orang pasti pernah gagal. Perbedaan hanya pada: apakah kamu menyerah, atau memilih bangkit.</p>
      <p>Kesuksesan bukan soal keberuntungan, tapi soal ketekunan.</p>
      <h3>👉 Jangan takut gagal, takutlah kalau kamu tidak mau mencoba lagi.</h3>
    `
  }
];

let currentChapter = 0;

const contentDiv = document.getElementById("content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderChapter(index) {
  const chapter = chapters[index];
  contentDiv.innerHTML = `<h2>${chapter.title}</h2>${chapter.content}`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === chapters.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentChapter > 0) {
    currentChapter--;
    renderChapter(currentChapter);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    renderChapter(currentChapter);
  }
});

// Load pertama
renderChapter(currentChapter);
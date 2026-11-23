// ======================================
// 1. ALERT SAAT WEBSITE DIBUKA
// ======================================

window.addEventListener("load", function () {
    alert("Selamat datang di Keanekaragaman Kragan / Mengenal Pesona Kragan.");
});


// ======================================
// 2. FITUR PENCARIAN
// ======================================

function cariData() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase().trim();

    let cards = document.querySelectorAll(".card");

    let ditemukan = false;
    let cardPertama = null;

    // Jika pencarian kosong, tampilkan semua card
    if (input === "") {

        cards.forEach(function (item) {
            item.style.display = "";
        });

        return;
    }

    // Memeriksa semua card
    cards.forEach(function (item) {

        let judul = item.querySelector("h3");
        let deskripsi = item.querySelector("p");

        let nama = judul ? judul.innerText.toLowerCase() : "";
        let keterangan = deskripsi ? deskripsi.innerText.toLowerCase() : "";

        if (nama.includes(input) || keterangan.includes(input)) {

            item.style.display = "";
            ditemukan = true;

            if (cardPertama === null) {
                cardPertama = item;
            }

        } else {

            item.style.display = "none";

        }

    });

    // Konfirmasi jika data ditemukan
    if (ditemukan) {

        let pilihan = confirm(
            "Data ditemukan! Apakah Anda ingin menjelajahi Kragan?"
        );

        if (pilihan && cardPertama) {

            cardPertama.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    } else {

        alert("Maaf, data yang Anda cari tidak ditemukan.");

    }

}


// ======================================
// 3. PENCARIAN DENGAN TOMBOL ENTER
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                cariData();
            }

        });

    }

});


// ======================================
// 4. MEMBUKA POPUP UNIVERSAL SEMUA CARD
// ======================================

function bukaModalDariCard(tombol) {

    // Mengambil card yang dipilih
    let card = tombol.closest(".card");

    if (!card) return;

    // Mengambil informasi dari card
    let judul = card.querySelector("h3");
    let gambar = card.querySelector("img");
    let deskripsi = card.querySelector("p");

    if (!judul || !gambar || !deskripsi) return;

    let kategori = tombol.dataset.kategori || "Keanekaragaman Kragan";

    // Memasukkan informasi ke popup
    document.getElementById("modalTitle").innerText = judul.innerText;

    document.getElementById("modalImage").src = gambar.src;

    document.getElementById("modalImage").alt = judul.innerText;

    document.getElementById("modalCategory").innerText = kategori;

    document.getElementById("modalDescription").innerText = deskripsi.innerText;

    // Menampilkan popup
    document.getElementById("detailModal").style.display = "flex";

    // Mengunci scroll halaman
    document.body.style.overflow = "hidden";

}


// ======================================
// 5. MENUTUP POPUP
// ======================================

function tutupModal() {

    document.getElementById("detailModal").style.display = "none";

    // Mengembalikan scroll halaman
    document.body.style.overflow = "auto";

}


// ======================================
// 6. MENUTUP POPUP KETIKA AREA LUAR DIKLIK
// ======================================

window.addEventListener("click", function (event) {

    let popup = document.getElementById("detailModal");

    if (popup && event.target === popup) {
        tutupModal();
    }

});


// ======================================
// 7. MENUTUP POPUP MENGGUNAKAN TOMBOL ESC
// ======================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        let popup = document.getElementById("detailModal");

        if (popup && popup.style.display === "flex") {
            tutupModal();
        }

    }

});


// KONFIGURASI EMAILJS
(function () {
 emailjs.init({
 publicKey: "5hdS2zMAPE_pwqMYf"
 });
})();

// FORM KONTAK KAMI
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  // Konfirmasi pengiriman
  const konfirmasi = confirm("Apakah Anda yakin ingin mengirim pesan ini?");

  if (!konfirmasi) {
    alert("Pengiriman pesan dibatalkan.");
    return;
  }

  const tombol = this.querySelector("button[type='submit']");
  tombol.disabled = true;
  tombol.textContent = "Mengirim...";

  try {
    // Mengirim pesan ke email admin
    await emailjs.sendForm(
      "service_3iax4wr",
      "template_zqe7u13",
      this
    );

    alert("Terima kasih! Pesan Anda berhasil dikirim ke admin Pesona Kragan.");

    this.reset();

  } catch (error) {
    console.error("Gagal mengirim pesan:", error);

    alert("Maaf, pesan gagal dikirim. Silakan coba kembali.");

  } finally {
    tombol.disabled = false;
    tombol.textContent = "Kirim Pesan";
  }

});


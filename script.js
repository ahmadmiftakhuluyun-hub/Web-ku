//Alert saat website dibuka
window.onload = function () 
{
   alert("Selamat datang di Keaneragaman Kragan/Mengenal pesona kragan.");
};
//pencarian
function cariData() {

    let input = document.getElementById("searchInput")
                            .value.tolowerCase();
    let card = document.querySelectAll(".card");

    let ditemukan = false;

    card.forEach(function(item) {

        let nama = item.querySelector("h3").innerText.tolowerCase();

        if (nama.includes(input)) {
            item.style.display = "block";
            ditemukan = true;
        } else {
            item.style.display = "none";
        }
    } 
);
}

if(ditemukan) {
    let pilihan = confirm("Apakah anda ingin menjelajahi Kragan");
}

//konfirmasi
let pilihan = confirm("")
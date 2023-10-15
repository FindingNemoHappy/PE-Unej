document.addEventListener("DOMContentLoaded", function() {
    const showRetnaButton = document.getElementById("show-retna");
    const showHetyButton = document.getElementById("show-hety");
    const imageRetna = document.getElementById("image-retna");
    const imageHety = document.getElementById("image-hety");
    const downloadRetnaButton = document.getElementById("download-retna");
    const downloadHetyButton = document.getElementById("download-hety");

    showRetnaButton.addEventListener("click", () => {
       imageRetna.style.display = "block";
       imageHety.style.display = "none";
       // Mengubah warna tombol menjadi crimson
       showRetnaButton.style.backgroundColor = "crimson";
       showHetyButton.style.backgroundColor = ""; // Menghapus warna tombol Hety

       // Menampilkan tombol download yang sesuai
       downloadRetnaButton.style.display = "block";
       downloadHetyButton.style.display = "none"; // Sembunyikan tombol download Hety
    });

    showHetyButton.addEventListener("click", () => {
       imageHety.style.display = "block";
       imageRetna.style.display = "none";
       // Mengubah warna tombol menjadi crimson
       showHetyButton.style.backgroundColor = "crimson";
       showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna

       // Menampilkan tombol download yang sesuai
       downloadHetyButton.style.display = "block";
       downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
    });
});





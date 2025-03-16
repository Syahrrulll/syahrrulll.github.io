let currentIndex = 0;

// Ambil semua gambar sertifikat
const certificates = document.querySelectorAll(".certificate-item img");
const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");

// Buka modal dan tampilkan gambar sesuai index
function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImage.src = certificates[currentIndex].src;
    modalImage.classList.add("slide");
    setTimeout(() => modalImage.classList.remove("slide"), 400);
}

// Tutup modal
function closeModal() {
    modal.style.display = "none";
}

// Navigasi slide kiri/kanan
function changeSlide(direction) {
    currentIndex += direction;

    // Balik ke awal/akhir kalau mentok
    if (currentIndex >= certificates.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = certificates.length - 1;

    // Efek transisi geser
    modalImage.classList.add("slide");
    modalImage.src = certificates[currentIndex].src;

    // Hilangkan animasi biar nggak ngulang terus
    setTimeout(() => modalImage.classList.remove("slide"), 400);
}

// Tutup modal kalau klik di luar gambar
window.onclick = (e) => {
    if (e.target === modal) closeModal();
};

// Navigasi pakai keyboard juga
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowRight") changeSlide(1);
        if (e.key === "ArrowLeft") changeSlide(-1);
        if (e.key === "Escape") closeModal();
    }
});

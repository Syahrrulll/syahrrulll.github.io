// Animasi tambahan saat halaman load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = `all 0.6s ease ${(index + 1) * 0.2}s`;
    });

    setTimeout(() => {
        sections.forEach((section) => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 500);
});

// Validasi Form dengan Efek
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
    } else {
        alert(`Terima kasih, ${name}! Pesan Anda berhasil terkirim.`);
        form.reset();
    }
});

// Efek Hover pada Foto Profil (Glow animasi)
const profilePic = document.querySelector(".profile-pic");
profilePic.addEventListener("mouseenter", () => {
    profilePic.style.boxShadow = "0 0 20px var(--primary-color)";
});
profilePic.addEventListener("mouseleave", () => {
    profilePic.style.boxShadow = "none";
});

// Fungsi Buka Modal
function openModal(imageSrc) {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Fungsi Tutup Modal
function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}

// Tutup Modal saat klik di luar gambar
window.onclick = (e) => {
    const modal = document.getElementById("certificateModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
// Animasi Footer Muncul Saat Scroll ke Bawah
window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const footerPos = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPos < windowHeight) {
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
    }

    // Tampilkan Tombol "Back to Top" saat scroll turun
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Fungsi Tombol "Back to Top"
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Cek error kalau footer tidak ada
window.onload = () => {
    const footer = document.querySelector("footer");
    if (!footer) {
        console.error("Footer tidak ditemukan! Pastikan ada tag footer di HTML.");
    }
};

// Ambil elemen form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Biar form nggak ke-refresh

    // Ambil data inputan
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Format pesan WhatsApp
    const whatsappMessage = `Halo, saya *${name}*.\nEmail: ${email}\nPesan: ${message}`;
    const phoneNumber = "6282235714799"; // Ganti dengan nomor WhatsApp kamu (pakai kode negara tanpa +)

    // Arahkan ke WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
});

// Animasi muncul saat scroll
const sections = document.querySelectorAll("section");

const showSection = () => {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", showSection);
window.addEventListener("load", showSection);

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

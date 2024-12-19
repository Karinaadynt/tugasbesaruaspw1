// Highlight menu aktif
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".sidebar ul li a");
    const currentPage = location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.backgroundColor = "#FFD700";
            link.style.color = "#333";
            link.style.fontWeight = "bold";
        }
    });
});

// Animasi klik di Gallery
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            item.style.transform = "scale(1.2)";
            item.style.transition = "transform 0.5s";

            setTimeout(() => {
                item.style.transform = "scale(1)";
            }, 500);
        });
    });
});

// Form validation (Opsional, tambahkan jika ada form di "Contact Us")
function validateForm() {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value.includes("@")) {
        alert("Masukkan email yang valid.");
        return false;
    }
    return true;
}
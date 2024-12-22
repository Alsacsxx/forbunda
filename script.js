const kucing = [
    "HAPPY MOTHER'S DAY, BUNDA!",
    "Thank you for always being there for me",
    "Thank you for your endless love and care",
    "Thank you for guiding me with your wisdom and patience",
    "Thank you for being my biggest supporter in everything i do",
    "Thank you for being the most AMAZING MOTHER!",
    "I'M SO GRATEFUL TO HAVE YOU IN MY LIFE <33",
    "₍ ᐢ.ˬ.ᐢ₎˚୨୧"
];

// Memainkan audio otomatis saat halaman dimuat
let currentIndex = 0; // Index awal untuk array teks

window.onload = () => {
    const audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.error("Audio tidak dapat diputar:", error);
    });
};

document.getElementById("kucingButton").addEventListener("click", () => {
    const kucingDisplay = document.getElementById("kucingDisplay");

    // Tampilkan teks secara berurutan
    kucingDisplay.innerText = kucing[currentIndex];
    currentIndex++;

    // Reset index jika sudah sampai akhir array
    if (currentIndex >= kucing.length) {
        currentIndex = 0;
    }
});
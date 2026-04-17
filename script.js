/**
 * Fungsi untuk melihat detail status proyek
 * @param {string} type - Jenis proyek yang diklik
 */
function viewProject(type) {
    const preview = document.getElementById('preview-box');
    let detailText = "";
    
    // Memberikan efek transisi sebelum teks berubah
    preview.style.opacity = "0";
    
    setTimeout(() => {
        switch(type) {
            case 'web':
                detailText = "💻 WEB: Menggunakan CSS Grid & Flexbox. Status: Live di GitHub Pages.";
                break;
            case 'db':
                detailText = "📊 DB: Fokus pada relasi One-to-Many & Many-to-Many. Status: Tugas Besar Selesai.";
                break;
            case 'ux':
                detailText = "🎨 UI/UX: Dikerjakan dengan Figma, fokus pada user flow yang simpel.";
                break;
            default:
                detailText = "Silakan klik salah satu proyek untuk melihat status detail.";
        }
        
        preview.innerHTML = `<strong style="color: #22d3ee">${detailText}</strong>`;
        preview.style.opacity = "1";
        preview.style.transition = "0.5s ease";
    }, 300);
}

/**
 * Fungsi sederhana untuk tombol hubungi
 */
function contactMe() {
    alert("Halo! Tombol ini siap dihubungkan ke WhatsApp atau Email kamu.");
}

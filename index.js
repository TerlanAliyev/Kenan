// Menü açma ve kapama
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show'); // "show" sınıfını ekle/kaldır
}

// Menü dışına tıklanırsa kapat
window.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// Fonksiyon: Tıklanan kategoriye göre formu göster
function toggleCategory(index) {
    const allCategories = document.querySelectorAll('.category');
    const allContents = document.querySelectorAll('.categoryContent');

    allCategories.forEach((category, i) => {
        if (i === index) {
            category.classList.add('active');
            allContents[i].classList.add('active'); // "active" sınıfını ekler
        } else {
            category.classList.remove('active');
            allContents[i].classList.remove('active'); // "active" sınıfını kaldırır
        }
    });
}

// Sayfa yüklendiğinde Category1'in görünmesini sağla
window.addEventListener('DOMContentLoaded', () => {
    toggleCategory(0); // İlk kategoriyi aktif yap
});

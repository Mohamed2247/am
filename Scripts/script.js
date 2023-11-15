document.getElementById('searchIcon').addEventListener('click', function() {
    this.classList.toggle('active');

    // Focus on the input when the icon is clicked
    if (this.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const contactForm = document.getElementById("contactForm");
    const openContact = document.getElementById("openContact");
  
    
    openContact.addEventListener("click", function() {
      overlay.style.display = "block";
      contactForm.style.display = "block";
    });
  
    overlay.addEventListener("click", function() {
      overlay.style.display = "none";
      contactForm.style.display = "none";
    });
  });



// في ملف script.js
document.addEventListener("DOMContentLoaded", function() {
  const openModal = document.getElementById("openModal");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");

  // عرض النافذة الفوقية
  openModal.addEventListener("click", function() {
    modal.style.display = "block";
  });

  // إغلاق النافذة الفوقية
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
});

  
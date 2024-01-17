//---------------------------------------//
// 
//
//
//
//
//---------------------------------------//

// // Toggle & Responsive Navigation
// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const navLists = document.querySelector("nav");

//   burger.addEventListener("click", () => {
//     // Toggle nav list and burger class
//     navLists.classList.toggle("nav-active");
//     burger.classList.toggle("toggle-burger");
//   });
// };

// navSlide();

// // Clear form before unload
// window.onbeforeunload = () => {
//   for (const form of document.getElementsByTagName("form")) {
//     form.reset();
//   }
// };
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    // Tampilkan tombol ketika pengguna menggulir ke bawah
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Atur scroll ke atas saat tombol diklik
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // Untuk browser Safari
    document.documentElement.scrollTop = 0; // Untuk browser lainnya
  });
});



// Animasi ------------------------------ Animasi

        document.addEventListener("DOMContentLoaded", function () {
            showPopup();
        });

        function showPopup() {
            var popupContainer = document.getElementById("popup-container");
            popupContainer.style.visibility = "visible";
        }

        function closePopup() {
            var popupContainer = document.getElementById("popup-container");
            popupContainer.style.visibility = "hidden";
        }

        //  progresbar
        document.addEventListener('DOMContentLoaded', function () {
          let progress = document.getElementById('progresbar'); // Fixed the method name and added 'getElementById'

          let totalHeight = document.body.scrollHeight - window.innerHeight;
          window.onscroll = function(){
              let progressHeight = (window.pageYOffset / totalHeight) * 100;
              progress.style.height = progressHeight + "%";
          };
      });




// -------------------------------- Mematikan mode inspek atau klick kanan -------------------------------- //


document.addEventListener('contextmenu', function (e) {
  e.preventDefault();

  var confirmation = confirm('Menu konteks dinonaktifkan! Klik "OK" untuk menghubungi kami melalui GitHub atau WhatsApp.');

  if (confirmation) {
    var githubLink = 'https://github.com/Nugraa21';
    var whatsappLink = 'https://wa.me/your-whatsapp';

    var userChoice = prompt('Pilih salah satu:\n1. GitHub\n2. WhatsApp');

    if (userChoice === '1') {
      window.location.href = githubLink;
    } else if (userChoice === '2') {
      window.location.href = whatsappLink;
    } else {
      alert('Pilihan tidak valid.');
    }
  }
});

// -------------------------------- Mencegah agar tidak bisa di copy -------------------------------- //


document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Cegah menggunakan kombinasi keyboard untuk membuka developer tools
  if (e.key === 'F12' || (e.key === 'Shift' && e.key === 'Ctrl' && e.key === 'I')) {
    e.preventDefault();
  }
});
    // Mencegah drop gambar
    document.addEventListener('drop', function (e) {
      e.preventDefault();
    });
        // Menyembunyikan gambar saat diambil dari sumber lain
        document.addEventListener('dragstart', function (e) {
          if (e.target.tagName.toLowerCase() === 'img') {
            e.preventDefault();
          }
        });
    

// -------------------------------- Animasi loading -------------------------------- //


document.addEventListener("DOMContentLoaded", function () {
  // Simulasi waktu loading
  setTimeout(function () {
      // Sembunyikan elemen loading
      document.getElementById("loadingContainer").style.display = "none";
      // Tampilkan elemen konten utama
      document.getElementById("mainContent").style.display = "block";
  }, 2000 ); // Ganti 2000 dengan waktu loading yang diinginkan dalam milidetik
});


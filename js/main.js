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



            window.addEventListener('scroll', function () {
                var header = document.getElementById('navigasi');
                var scrollPosition = window.scrollY;

                if (scrollPosition > 100) {
                    header.style.backgroundColor = ' #ff0051';
                    // header.style.backgroundColor = '#60b5df44'; // sebelum
                } else {
                     header.style.backgroundColor = ' #00000000';
                    // header.style.backgroundColor = '#60b4df'; // sesudah 
                }
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


// style 1-2

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


            window.addEventListener('scroll', function () {
                var header = document.getElementById('navigasi');
                var scrollPosition = window.scrollY;

                if (scrollPosition > 100) {
                    header.style.backgroundColor = '#60b4df';
                    // header.style.backgroundColor = '#60b5df44'; // sebelum
                } else {
                     header.style.backgroundColor = ' #00000000';
                    // header.style.backgroundColor = '#60b4df'; // sesudah 
                }
            });
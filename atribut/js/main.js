document.addEventListener("DOMContentLoaded", function () {
    var scrol = document.getElementById("scrol");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 20) {
            scrol.style.display = "block";
        } else {
            scrol.style.display = "none";
        }
    }

    scrol.addEventListener("click", function () {
        document.body.scrollTop = 0; // Untuk Safari
        document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
    });
});


function openLink(link) {
    window.open(link, '_self');
}
window.onscroll = function () {
    stick()
};

var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var sticky = navbar.offsetTop;

function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

// 🔁 Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.documentElement.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// 🌗 Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');

    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Header Animation
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }); 

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

function camera(){
  /** @format */

const canvas = document.querySelector(".hero-section>#canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})


function files(index) {
  var data = `
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0009.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0009.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0010.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0011.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0012.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0013.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0014.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0015.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0016.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0017.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0018.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0019.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0020.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0021.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0022.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0023.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0024.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0025.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0026.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0027.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0028.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0029.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0030.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0031.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0032.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0033.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0034.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0035.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0036.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0037.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0038.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0039.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0040.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0041.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0042.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0043.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0044.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0045.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0046.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0047.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0048.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0049.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0050.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0051.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0052.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0053.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0054.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0055.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0056.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0057.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0058.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0059.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0060.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0061.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0062.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0063.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0064.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0065.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0066.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0067.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0068.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0069.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0070.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0071.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0072.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0073.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0074.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0075.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0076.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0077.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0078.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0079.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0080.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0081.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0082.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0083.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0084.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0085.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0086.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0087.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0088.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0089.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0090.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0091.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0092.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0093.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0094.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0095.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0096.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0097.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0098.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0099.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0100.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0101.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0102.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0103.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0104.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0105.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0106.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0107.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0108.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0109.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0110.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0111.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0112.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0113.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0114.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0115.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0116.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0117.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0118.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0119.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0120.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0121.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0122.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0123.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0124.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0125.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0126.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0127.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0128.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0129.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0130.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0131.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0132.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0133.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0134.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0135.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0136.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0137.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0138.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0139.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0140.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0141.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0142.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0143.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0144.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0145.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0146.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0147.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0148.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0149.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0150.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0151.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0152.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0153.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0154.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0155.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0156.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0157.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0158.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0159.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0160.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0161.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0162.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0163.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0164.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0165.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0166.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0167.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0168.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0169.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0170.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0171.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0172.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0173.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0174.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0175.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0176.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0177.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0178.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0179.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0180.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0181.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0182.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0183.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0184.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0185.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0186.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0187.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0188.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0189.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0190.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0191.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0192.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0193.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0194.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0195.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0196.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0197.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0198.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0199.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0199.jpg?imwidth=568
    https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0200.jpg?imwidth=568

   `;

   return data.split("\n")[index];

}

const frameCount = 162;

const images = [];
const imageSeq ={
    frame: 8
};

for (let i=0; i < frameCount; i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);

}

function scaleImage(img, ctx){
    var canvas = ctx.canvas;
    var hRatio = canvas.width/img.width;
    var vRatio = canvas.height/img.height;
    var ratio = Math.max(hRatio,vRatio);
    
    var centerShift_x = (canvas.width - img.width * ratio)/2;
    var centerShift_y = (canvas.height - img.height * ratio)/2;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,1,1,img.width,img.height,centerShift_x,centerShift_y,img.width*ratio,img.height*ratio);
}

function render(){
    scaleImage(images[imageSeq.frame], context)
}
images[8].onload = render;

gsap.to(imageSeq, {
  frame: frameCount-1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 2,
    trigger: ".hero-section",
    start: "top top",
    end: "+=500%",
    pin: true,
    anticipatePin: 1,
    markers: false,
    fastScrollEnd: true,
    preventOverlaps: true
  },
  onUpdate: render
});

}
camera()

// Marketplace Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample car data
    const cars = [
        {
            id: 1,
            brand: 'BMW',
            model: 'M5 Competition',
            year: 2024,
            price: 120000,
            mileage: 5000,
            color: 'Alpine White',
            image: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0009.jpg',
            description: 'High-performance luxury sedan with 617 horsepower',
            images: [
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0009.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0010.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0011.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0012.jpg'
            ]
        },
        {
            id: 2,
            brand: 'Mercedes',
            model: 'AMG GT 63',
            year: 2024,
            price: 145000,
            mileage: 3000,
            color: 'Obsidian Black',
            image: 'https://bmcnews.com.br/wp-content/uploads/2024/09/amg.jpg',
            description: 'Powerful luxury sports car with cutting-edge technology',
            images: [
                // 'https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330',
                // 'https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330',
                // 'https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330',
                // 'https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330'
            ]
        },
        {
            id: 3,
            brand: 'Audi',
            model: 'RS7 Sportback',
            year: 2024,
            price: 135000,
            mileage: 2000,
            color: 'Nardo Gray',
            image: 'https://cdn.arstechnica.net/wp-content/uploads/2024/09/2024-Audi-RS7-1-scaled.jpg',
            description: 'Luxury sportback with quattro all-wheel drive',
            images: [
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0017.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0018.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0019.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0020.jpg'
            ]
        },
        {
            id: 4,
            brand: 'Porsche',
            model: '911 Turbo S',
            year: 2024,
            price: 220000,
            mileage: 1000,
            color: 'Guards Red',
            image: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmHlCgI7Zl2dioCLiF%25vUqj7AuWXsOWoxeV6iTdzctBvo1Duf8dXFOSiPE3pUWFYRpwY4EJMGViko6c09ItDVW8u1',
            description: 'Ultimate sports car with unmatched performance',
            images: [
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0021.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0022.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0023.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0024.jpg'
            ]
        },
        {
            id: 5,
            brand: 'Ferrari',
            model: 'F8 Tributo',
            year: 2024,
            price: 350000,
            mileage: 500,
            color: 'Rosso Corsa',
            image: 'https://cdn.motor1.com/images/mgl/ykkwb/s3/novitec-ferrari-f8-tributo-n-largo.jpg',
            description: 'Exotic supercar with breathtaking performance',
            images: [
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0025.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0026.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0027.jpg',
                // 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/neu-scrolly-intro-9x16/0028.jpg'
            ]
        }
    ];

    // State management
    let wishlist = [];
    let cart = [];
    let userListings = [];

    // DOM Elements
    const carListings = document.getElementById('carListings');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const cartBtn = document.getElementById('cartBtn');
    const sellCarBtn = document.getElementById('sellCarBtn');
    const wishlistModal = document.getElementById('wishlistModal');
    const cartModal = document.getElementById('cartModal');
    const sellCarModal = document.getElementById('sellCarModal');
    const sellCarForm = document.getElementById('sellCarForm');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            wishlistModal.style.display = 'none';
            cartModal.style.display = 'none';
            sellCarModal.style.display = 'none';
        });
    });

    // Modal open buttons
    wishlistBtn.addEventListener('click', () => {
        wishlistModal.style.display = 'block';
        updateWishlistModal();
    });

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateCartModal();
    });

    sellCarBtn.addEventListener('click', () => {
        sellCarModal.style.display = 'block';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === wishlistModal) wishlistModal.style.display = 'none';
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === sellCarModal) sellCarModal.style.display = 'none';
    });

    // Render car listings
    function renderCars(carsToRender = cars) {
        const carListings = document.querySelector('.car-listings');
        carListings.innerHTML = '';

        carsToRender.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = `car-card ${car.isSold ? 'sold' : ''}`;
            
            carCard.innerHTML = `
                <div class="car-gallery">
                    <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image main-image">
                    ${car.images ? `
                        <div class="thumbnail-container">
                            ${car.images.map((img, index) => `
                                <img src="${img}" alt="Thumbnail ${index + 1}" 
                                    class="thumbnail ${index === 0 ? 'active' : ''}"
                                    onclick="changeMainImage(this, '${car.id}')">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="car-details">
                    <h3>${car.brand} ${car.model}</h3>
                    <p class="car-year">${car.year}</p>
                    <p class="car-price">$${car.price.toLocaleString()}</p>
                    ${car.mileage ? `<p class="car-mileage">Mileage: ${car.mileage.toLocaleString()} km</p>` : ''}
                    ${car.color ? `<p class="car-color">Color: ${car.color}</p>` : ''}
                    <p class="car-description">${car.description}</p>
                    ${car.contact ? `<p class="seller-contact">Contact: ${car.contact}</p>` : ''}
                    <div class="car-actions">
                        <button class="add-to-cart" onclick="addToCart(${car.id})">Add to Cart</button>
                        <button class="add-to-wishlist" onclick="addToWishlist(${car.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    ${car.sellerId === 'user123' ? `
                        <div class="listing-actions">
                            <button class="mark-sold" onclick="markAsSold(${car.id})">
                                ${car.isSold ? 'Mark as Available' : 'Mark as Sold'}
                            </button>
                            <button class="remove-listing" onclick="removeListing(${car.id})">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
            
            carListings.appendChild(carCard);
        });
    }

    // Change main image function
    window.changeMainImage = function(thumbnail, carId) {
        const carCard = thumbnail.closest('.car-card');
        const mainImage = carCard.querySelector('.main-image');
        mainImage.src = thumbnail.src;
        
        // Update active thumbnail
        carCard.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    };

    // Enhanced payment system
    const paymentMethods = {
        creditCard: {
            name: 'Credit Card',
            icon: 'fa-credit-card',
            fields: ['cardName', 'cardNumber', 'expiryDate', 'cvv']
        },
        paypal: {
            name: 'PayPal',
            icon: 'fa-paypal',
            fields: ['paypalEmail']
        },
        bankTransfer: {
            name: 'Bank Transfer',
            icon: 'fa-university',
            fields: ['accountNumber', 'routingNumber']
        }
    };

    // Update payment form based on selected method
    function updatePaymentForm(method) {
        const paymentForm = document.getElementById('paymentForm');
        paymentForm.innerHTML = `
            <div class="payment-method-header">
                <i class="fab ${paymentMethods[method].icon}"></i>
                <h3>${paymentMethods[method].name}</h3>
            </div>
            ${paymentMethods[method].fields.map(field => {
                switch(field) {
                    case 'cardName':
                        return `
                            <div class="form-group">
                                <label for="cardName">Cardholder Name</label>
                                <input type="text" id="cardName" required placeholder="Name on card">
                            </div>
                        `;
                    case 'cardNumber':
                        return `
                            <div class="form-group">
                                <label for="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" required placeholder="1234 5678 9012 3456" maxlength="19">
                            </div>
                        `;
                    case 'expiryDate':
                        return `
                            <div class="form-group">
                                <label for="expiryDate">Expiry Date</label>
                                <input type="text" id="expiryDate" required placeholder="MM/YY" maxlength="5">
                            </div>
                        `;
                    case 'cvv':
                        return `
                            <div class="form-group">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" required placeholder="123" maxlength="3">
                            </div>
                        `;
                    case 'paypalEmail':
                        return `
                            <div class="form-group">
                                <label for="paypalEmail">PayPal Email</label>
                                <input type="email" id="paypalEmail" required placeholder="your@email.com">
                            </div>
                        `;
                    case 'accountNumber':
                        return `
                            <div class="form-group">
                                <label for="accountNumber">Account Number</label>
                                <input type="text" id="accountNumber" required placeholder="Enter account number">
                            </div>
                        `;
                    case 'routingNumber':
                        return `
                            <div class="form-group">
                                <label for="routingNumber">Routing Number</label>
                                <input type="text" id="routingNumber" required placeholder="Enter routing number">
                            </div>
                        `;
                }
            }).join('')}
            <button type="submit" class="submit-btn">Pay Now</button>
        `;

        // Reattach event listeners
        attachPaymentFormListeners();
    }

    // Attach payment form listeners
    function attachPaymentFormListeners() {
        const cardNumber = document.getElementById('cardNumber');
        const expiryDate = document.getElementById('expiryDate');
        
        if (cardNumber) {
            cardNumber.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                let formattedValue = '';
                for(let i = 0; i < value.length; i++) {
                    if(i > 0 && i % 4 === 0) {
                        formattedValue += ' ';
                    }
                    formattedValue += value[i];
                }
                e.target.value = formattedValue;
            });
        }

        if (expiryDate) {
            expiryDate.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                if (value.length >= 2) {
                    value = value.slice(0,2) + '/' + value.slice(2);
                }
                e.target.value = value;
                
                if (validateExpiryDate(value)) {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else {
                    this.classList.remove('valid');
                    this.classList.add('invalid');
                }
            });
        }
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/gi, '');
            e.target.value = value;
            
            if (validateCVV(value)) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }

    // Initialize payment methods
    const paymentMethodSelect = document.createElement('div');
    paymentMethodSelect.className = 'payment-methods';
    paymentMethodSelect.innerHTML = `
        <h3>Select Payment Method</h3>
        <div class="payment-method-options">
            ${Object.entries(paymentMethods).map(([key, method]) => `
                <button class="payment-method-btn" onclick="updatePaymentForm('${key}')">
                    <i class="fab ${method.icon}"></i>
                    ${method.name}
                </button>
            `).join('')}
        </div>
    `;

    document.querySelector('.payment-summary').insertAdjacentElement('beforebegin', paymentMethodSelect);

    // Add to wishlist
    window.addToWishlist = function(carId) {
        const car = cars.find(c => c.id === carId);
        if (!wishlist.find(item => item.id === carId)) {
            wishlist.push(car);
            updateWishlistCount();
            showNotification('Added to wishlist!');
        }
    };

    // Add to cart
    window.addToCart = function(carId) {
        const car = cars.find(c => c.id === carId);
        if (!cart.find(item => item.id === carId)) {
            cart.push(car);
            updateCartCount();
            showNotification('Added to cart!');
        }
    };

    // Update wishlist modal
    function updateWishlistModal() {
        const wishlistItems = document.getElementById('wishlistItems');
        wishlistItems.innerHTML = '';
        wishlist.forEach(car => {
            const item = document.createElement('div');
            item.className = 'wishlist-item';
            item.innerHTML = `
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="item-image">
                <div class="item-details">
                    <h4 class="item-title">${car.brand} ${car.model} ${car.year}</h4>
                    <p class="item-price">$${car.price.toLocaleString()}</p>
                </div>
                <button class="remove-item" onclick="removeFromWishlist(${car.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            wishlistItems.appendChild(item);
        });
    }

    // Update cart modal
    function updateCartModal() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(car => {
            total += car.price;
            const item = document.createElement('div');
            item.className = 'cart-item';
            item.innerHTML = `
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="item-image">
                <div class="item-details">
                    <h4 class="item-title">${car.brand} ${car.model} ${car.year}</h4>
                    <p class="item-price">$${car.price.toLocaleString()}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${car.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            cartItems.appendChild(item);
        });
        cartTotal.textContent = total.toLocaleString();
    }

    // Remove from wishlist
    window.removeFromWishlist = function(carId) {
        wishlist = wishlist.filter(car => car.id !== carId);
        updateWishlistCount();
        updateWishlistModal();
    };

    // Remove from cart
    window.removeFromCart = function(carId) {
        cart = cart.filter(car => car.id !== carId);
        updateCartCount();
        updateCartModal();
    };

    // Update counts
    function updateWishlistCount() {
        document.querySelector('.wishlist-count').textContent = wishlist.length;
    }

    function updateCartCount() {
        document.querySelector('.cart-count').textContent = cart.length;
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Handle sell car form submission
    sellCarForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newCar = {
            id: Date.now(),
            brand: document.getElementById('carBrand').value,
            model: document.getElementById('carModel').value,
            year: parseInt(document.getElementById('carYear').value),
            price: parseFloat(document.getElementById('carPrice').value),
            mileage: parseInt(document.getElementById('carMileage').value),
            color: document.getElementById('carColor').value,
            image: document.getElementById('carImages').files[0] ? URL.createObjectURL(document.getElementById('carImages').files[0]) : 'https://via.placeholder.com/300x200?text=No+Image',
            images: Array.from(document.getElementById('carImages').files).map(file => URL.createObjectURL(file)),
            description: document.getElementById('carDescription').value,
            contact: document.getElementById('sellerContact').value,
            isSold: false,
            sellerId: 'user123' // This would normally come from user authentication
        };

        // Add to cars array and user listings
        cars.push(newCar);
        userListings.push(newCar);
        
        // Update UI
        renderCars();
        sellCarModal.style.display = 'none';
        showNotification('Car listed successfully!');
        
        // Reset form
        this.reset();
    });

    // Mark car as sold
    window.markAsSold = function(carId) {
        const car = cars.find(c => c.id === carId);
        if (car) {
            car.isSold = true;
            renderCars(cars);
            showNotification('Car marked as sold!');
        }
    };

    // Remove car listing
    window.removeListing = function(carId) {
        if (confirm('Are you sure you want to remove this listing?')) {
            cars = cars.filter(car => car.id !== carId);
            userListings = userListings.filter(car => car.id !== carId);
            renderCars(cars);
            showNotification('Listing removed successfully!');
        }
    };

    // Filter functionality
    function applyFilters() {
        let filteredCars = [...cars];
        
        if (brandFilter.value) {
            filteredCars = filteredCars.filter(car => 
                car.brand.toLowerCase() === brandFilter.value.toLowerCase()
            );
        }

        if (priceFilter.value) {
            const [min, max] = priceFilter.value.split('-').map(Number);
            filteredCars = filteredCars.filter(car => {
                if (max) {
                    return car.price >= min && car.price <= max;
                } else {
                    return car.price >= min;
                }
            });
        }

        if (yearFilter.value) {
            filteredCars = filteredCars.filter(car => 
                car.year === parseInt(yearFilter.value)
            );
        }

        renderCars(filteredCars);
    }

    // Add filter event listeners
    brandFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    yearFilter.addEventListener('change', applyFilters);

    // Initial render
    renderCars(cars);
});

// Wishlist and Cart Functionality

// Payment System
function initializePaymentSystem() {
    const paymentModal = document.getElementById('paymentModal');
    const paymentForm = document.getElementById('paymentForm');
    const successModal = document.getElementById('successModal');
    const checkoutBtn = document.querySelector('.checkout-btn');

    if (!paymentModal || !paymentForm || !successModal || !checkoutBtn) {
        console.error('Payment system elements not found');
        return;
    }

    // Payment validation functions
    function validateCardNumber(number) {
        return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(number);
    }

    function validateExpiryDate(date) {
        return /^\d{2}\/\d{2}$/.test(date);
    }

    function validateCVV(cvv) {
        return /^\d{3}$/.test(cvv);
    }

    // Add input validation
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = '';
            for(let i = 0; i < value.length; i++) {
                if(i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            e.target.value = formattedValue;
            
            if (validateCardNumber(formattedValue)) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }

    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            if (value.length >= 2) {
                value = value.slice(0,2) + '/' + value.slice(2);
            }
            e.target.value = value;
            
            if (validateExpiryDate(value)) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/gi, '');
            e.target.value = value;
            
            if (validateCVV(value)) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }

    // Payment processing function
    function processPayment(paymentData) {
        return new Promise((resolve, reject) => {
            // Simulate payment processing
            setTimeout(() => {
                const success = Math.random() > 0.1; // 90% success rate
                if (success) {
                    resolve({
                        success: true,
                        transactionId: 'TXN' + Date.now(),
                        message: 'Payment processed successfully'
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Payment failed. Please try again.'
                    });
                }
            }, 2000);
        });
    }

    // Handle payment form submission
    paymentForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        if (!submitBtn) return;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        try {
            // Validate required fields
            const cardName = document.getElementById('cardName')?.value;
            const cardNumber = document.getElementById('cardNumber')?.value;
            const expiryDate = document.getElementById('expiryDate')?.value;
            const cvv = document.getElementById('cvv')?.value;

            if (!cardName || !cardNumber || !expiryDate || !cvv) {
                throw new Error('Please fill in all required fields');
            }

            // Validate card number format
            if (!validateCardNumber(cardNumber)) {
                throw new Error('Invalid card number format');
            }

            // Validate expiry date format
            if (!validateExpiryDate(expiryDate)) {
                throw new Error('Invalid expiry date format');
            }

            // Validate CVV format
            if (!validateCVV(cvv)) {
                throw new Error('Invalid CVV format');
            }

            const paymentData = {
                cardName,
                cardNumber,
                expiryDate,
                cvv
            };

            const result = await processPayment(paymentData);
            
            if (result.success) {
                paymentModal.style.display = 'none';
                successModal.style.display = 'block';
                
                // Clear cart after successful payment
                cart = [];
                updateCartCount();
                updateCartModal();
                
                showNotification('Payment successful! Your order has been confirmed.');
            }
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Pay Now';
        }
    });

    // Close success modal
    const closeSuccessBtn = document.querySelector('.close-success-btn');
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.style.display = 'none';
        });
    }

    // Show payment modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            return;
        }
        updatePaymentSummary();
        paymentModal.style.display = 'block';
    });

    // Update payment summary
    function updatePaymentSummary() {
        const paymentItems = document.getElementById('paymentItems');
        const paymentTotal = document.getElementById('paymentTotal');
        
        if (!paymentItems || !paymentTotal) return;
        
        let total = 0;
        paymentItems.innerHTML = '';
        
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'payment-item';
            itemElement.innerHTML = `
                <span>${item.brand} ${item.model}</span>
                <span>$${item.price.toLocaleString()}</span>
            `;
            paymentItems.appendChild(itemElement);
            total += item.price;
        });
        
        paymentTotal.textContent = total.toLocaleString();
    }

    // Close payment modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });
}

// Initialize payment system when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePaymentSystem);

// Wishlist and Cart Functionality
function updateWishlistCountFromStorage() {
    const count = (JSON.parse(localStorage.getItem('wishlist')) || []).length;
    const headerCount = document.querySelector('.wishlist-count');
    if (headerCount) headerCount.textContent = count;
}

function updateWishlistModalFromStorage() {
    const wishlistItems = document.getElementById('wishlistItems');
    if (!wishlistItems) return;
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.innerHTML = '';
    wishlist.forEach(car => {
        const item = document.createElement('div');
        item.className = 'wishlist-item';
        item.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="item-image">
            <div class="item-details">
                <h4 class="item-title">${car.name}</h4>
                <p class="item-price">${car.price}</p>
            </div>
            <button class="remove-item" onclick="removeFromWishlistStorage('${car.id}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        wishlistItems.appendChild(item);
    });
}

window.removeFromWishlistStorage = function(carId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(car => car.id !== carId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCountFromStorage();
    updateWishlistModalFromStorage();
};

document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCountFromStorage();
    // If wishlist modal is opened, update its content
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', updateWishlistModalFromStorage);
    }
});


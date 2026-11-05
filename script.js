// AILIXI的驿站 —— 交互脚本

// 移动端菜单
function toggleMenu() {
   const nav = document.getElementById('mainNav');
   const toggle = document.querySelector('.menu-toggle');
   nav.classList.toggle('active');
   toggle.classList.toggle('active');
}

// 点击导航后收起菜单
document.querySelectorAll('#mainNav a').forEach(link => {
   link.addEventListener('click', function () {
      document.getElementById('mainNav').classList.remove('active');
      document.querySelector('.menu-toggle').classList.remove('active');
   });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         e.preventDefault();
         const top = target.getBoundingClientRect().top + window.pageYOffset - 90;
         window.scrollTo({ top: top, behavior: 'smooth' });
      }
   });
});

// 滚动时高亮当前导航项
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#mainNav a');

function updateActiveNav() {
   let current = '';
   sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 220) {
         current = section.getAttribute('id');
      }
   });
   navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
   });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// 关于我图片放大
const aboutPhoto = document.getElementById('aboutPhoto');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

if (aboutPhoto && lightbox) {
   aboutPhoto.addEventListener('click', () => {
      lightboxImg.src = aboutPhoto.src;
      lightbox.classList.add('open');
   });

   lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
   });

   document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
         lightbox.classList.remove('open');
         lightboxImg.src = '';
      }
   });
}

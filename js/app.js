window.addEventListener("scroll", function () {
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll("nav a");
   sections.forEach((section, index) => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
         navLinks[index].classList.add("active");
      } else {
         navLinks[index].classList.remove("active");
      }
   });
});
document.addEventListener("DOMContentLoaded", function () {
   const homeLink = document.querySelector("nav a[href='#home']");
   if (homeLink) {
      homeLink.classList.add("active");
   }
});
var focusedCard = document.querySelector('.spotlight');
window.addEventListener('mousemove', e => {
   var percentageX = e.pageX / window.innerWidth * 100;
   var percentageY = e.pageY / window.innerHeight * 100;
   if (focusedCard) {
      focusedCard.style.backgroundImage = `radial-gradient(circle at ${percentageX}% ${percentageY}%, transparent 8.9rem, #131417 9rem`;
   }
});
document.addEventListener('contextmenu', function (e) {
   e.preventDefault();
   showCustomNotification('Klik kanan tidak diizinkan!');
});

document.addEventListener('keydown', function (e) {
   if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u') || (e.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.key === 'J')) {
      showCustomNotification('Akses telah di blokir!');
      e.preventDefault();
      return false;
   }
});
function showCustomNotification(message, type) {
   var notification = document.createElement('div');
   notification.className = 'notification ' + type;
   notification.textContent = message;
   document.body.appendChild(notification);
   setTimeout(function () {
      notification.style.display = 'block';
   }, 100);
   setTimeout(function () {
      notification.style.display = 'none';
      setTimeout(function () {
         document.body.removeChild(notification);
      }, 500);
   }, 3000);
}

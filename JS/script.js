// const toggleButton = document.getElementById('toggleTheme');
// const rootElement = document.documentElement; // Cache the root element

// toggleButton.addEventListener('change', () => {
//   const currentTheme = rootElement.getAttribute('data-theme');
  
//   if (currentTheme === 'dark') {
//     // إذا كان الوضع الحالي هو Dark Mode، نعود إلى Light Mode
//     rootElement.setAttribute('data-theme', 'light');
//   } else {
//     // إذا كان الوضع الحالي هو Light Mode، ننتقل إلى Dark Mode
//     rootElement.setAttribute('data-theme', 'dark');
//   }
// });




    // عند تحميل الصفحة، نقوم بتحديد القسم #home كـ target
    window.addEventListener('load', function () {
      if (!window.location.hash) {
          window.location.hash = '#home'; // تحديد القسم #home كـ target
      }
  });
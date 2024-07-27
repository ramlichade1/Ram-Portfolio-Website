document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('active');
});
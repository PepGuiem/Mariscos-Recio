$(window).ready(function(){
        const carouselItems = document.querySelector('.carousel-item');
        let currentIndex = 1;
        const images = ['/src/img/bogavante.jpg', '/src/img/gambas.jpg', '/src/img/Mariscos-fritos.jpg'];
        function changeBackground() {
            carouselItems.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        setInterval(changeBackground, 6000);
});
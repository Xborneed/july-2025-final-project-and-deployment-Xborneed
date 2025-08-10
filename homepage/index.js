




document.addEventListener('scroll', function() {
    
let headerContainer = document.querySelector('.main-container');

headerContainer.style.backgroundColor = 'rgba(199, 173, 27, 0.8)'; // Set the background color to black with 80% opacity
headerContainer.style.padding = '10px'; // Add some padding for better appearance
headerContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)'; // Add a subtle shadow for depth


// use keyframes from css
headerContainer.style.transition = 'background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease'; // Smooth transition for background color and padding










});

toggleButton = document.querySelector('.material-icons');

toggleButton.addEventListener('click', function() {

    let navList = document.querySelector('#nav-list');
    navList.style.display = 'block';
});








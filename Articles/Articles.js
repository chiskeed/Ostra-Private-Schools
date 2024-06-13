const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/Ostra-Private-Schools/";
}
favicon.href = "https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/1637462766929Jiu7G4vSXuOD2ZSs6-pzvM-27rb41KAl.png";
banner.textContent = 'Ostra Schools';
banner.style.backgroundColor = '#EEC230';
banner.style.color = '#053705';
heroHead.textContent = 'Welcome To Ostra Schools';
heroText.textContent = 'In God We Trust';
footerImg.src = 'https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/1637462766929Jiu7G4vSXuOD2ZSs6-pzvM-27rb41KAl.png';
//footerText.textContent = 'Ostra Schools';

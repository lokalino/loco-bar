function startExperience() {
    window.location.href = 'main.html'; 
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup1').style.display = 'block';
        setTimeout(function() {
            document.getElementById('popup2').style.display = 'block';
        }, 5000); 
    }, 500); 

 
    document.getElementById('background-music').play();
};

function changeLanguage(language) {
    if (language === 'en') {
        document.documentElement.lang = 'en';
      
        document.querySelector('header h1').textContent = 'Beach Bar';
        document.querySelector('nav ul li a[href="#home"]').textContent = 'Home';
        document.querySelector('nav ul li a[href="#about"]').textContent = 'About Us';
        document.querySelector('nav ul li a[href="#menu"]').textContent = 'Menu';
        document.querySelector('nav ul li a[href="#gallery"]').textContent = 'Gallery';
        document.querySelector('nav ul li a[href="#contact"]').textContent = 'Contact';
        document.querySelector('#about h2').textContent = 'About Us';
        document.querySelector('#about p').textContent = 'Our beach bar is the perfect place to relax and enjoy sunny days with refreshing drinks and delicious food.';
        document.querySelector('#menu h2').textContent = 'Menu';
        document.querySelector('#menu h3:first-of-type').textContent = 'Food';
        document.querySelector('#menu h3:last-of-type').textContent = 'Drinks';
        document.querySelector('#contact h2').textContent = 'Contact';
        document.querySelector('#contact form label[for="name"]').textContent = 'Name:';
        document.querySelector('#contact form label[for="email"]').textContent = 'Email:';
        document.querySelector('#contact form label[for="message"]').textContent = 'Message:';
        document.querySelector('#contact form button').textContent = 'Send';
        document.querySelector('.contact-info p:nth-of-type(1)').textContent = 'Phone: +385 123 4567';
        document.querySelector('.contact-info p:nth-of-type(2)').textContent = 'Email: info@beachbar.com';
        document.querySelector('.contact-info p:nth-of-type(3)').textContent = 'Address: Beach 1, 21000 Split, Croatia';
        document.querySelector('.popup-content p').textContent = 'Welcome to our beach bar!';
        document.querySelectorAll('.popup-content p')[1].textContent = 'Relax and enjoy sunbathing with our cocktails!';
    } else {
        document.documentElement.lang = 'hr';
        
        document.querySelector('header h1').textContent = 'Bar na Plaži';
        document.querySelector('nav ul li a[href="#home"]').textContent = 'Naslovna';
        document.querySelector('nav ul li a[href="#about"]').textContent = 'O nama';
        document.querySelector('nav ul li a[href="#menu"]').textContent = 'Meni';
        document.querySelector('nav ul li a[href="#gallery"]').textContent = 'Galerija';
        document.querySelector('nav ul li a[href="#contact"]').textContent = 'Kontakt';
        document.querySelector('#about h2').textContent = 'O nama';
        document.querySelector('#about p').textContent = 'Naš bar na plaži je savršeno mjesto za opuštanje i uživanje u sunčanim danima uz osvježavajuće piće i ukusnu hranu.';
        document.querySelector('#menu h2').textContent = 'Meni';
        document.querySelector('#menu h3:first-of-type').textContent = 'Hrana';
        document.querySelector('#menu h3:last-of-type').textContent = 'Piće';
        document.querySelector('#contact h2').textContent = 'Kontakt';
        document.querySelector('#contact form label[for="name"]').textContent = 'Ime:';
        document.querySelector('#contact form label[for="email"]').textContent = 'Email:';
        document.querySelector('#contact form label[for="message"]').textContent = 'Poruka:';
        document.querySelector('#contact form button').textContent = 'Pošalji';
        document.querySelector('.contact-info p:nth-of-type(1)').textContent = 'Telefon: +385 123 4567';
        document.querySelector('.contact-info p:nth-of-type(2)').textContent = 'Email: info@barnaplazi.hr';
        document.querySelector('.contact-info p:nth-of-type(3)').textContent = 'Adresa: Plaža 1, 21000 Split, Hrvatska';
        document.querySelector('.popup-content p').textContent = 'Dobrodošli u naš bar na plaži!';
        document.querySelectorAll('.popup-content p')[1].textContent = 'Opustite se i uživajte u sunčanju uz naše koktele!';
    }
}

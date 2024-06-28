window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('nav-transparent');
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-blur');
    }
});

function drawHexagon(ctx, x, y, radius, rotation) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(
            x + radius * Math.cos(rotation + (i * Math.PI) / 3),
            y + radius * Math.sin(rotation + (i * Math.PI) / 3)
        );
    }
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
}

window.onload = function() {
    const canvas = document.getElementById('hexagonCanvas');
    const ctx = canvas.getContext('2d');

    // Center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200; // Larger radius for a bigger hexagon
    const rotation = Math.PI / 2; // 90 degrees rotation

    drawHexagon(ctx, centerX, centerY, radius, rotation);
}
function toggleMenu() {
    var navbarUl = document.querySelector("#navbar ul");
    navbarUl.classList.toggle("show");
}


const avatar = document.getElementById('avatar');

avatar.addEventListener('mousemove', (e) => {
    const avatarRect = avatar.getBoundingClientRect();
    const halfWidth = avatarRect.width / 2;
    const halfHeight = avatarRect.height / 2;

    const x = e.clientX - avatarRect.left - halfWidth;
    const y = e.clientY - avatarRect.top - halfHeight;

    const rotateX = (y / halfHeight) * 40;
    const rotateY = (x / halfWidth) * 40;

    avatar.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

avatar.addEventListener('mouseleave', () => {
    avatar.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

// emailjs

// (function() {
//     emailjs.init('KC0zT48WxudHeXGXU');
//   })();

//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);

//     const templateParams = {
//       from_name: formData.get('name'),
//       to_name: 'Kush',
//       from_email: formData.get('email'),
//     //   from_contact: formData.get('contact'),
//         contact_number: formData.get('contact'),
//       to_email: 'kush60513@gmail.com',
//       message: formData.get('message')
//     };
//     // emailjs.send("service_gfqk62x","template_yii0ra8");
//     emailjs.send('service_swjx5wd', 'template_ftrw94a', templateParams)
//       .then(function(response) {
//         alert('Thank you for your message. I will get back to you soon!');
//         form.reset();
//       }, function(error) {
//         alert('Sorry, something went wrong. Please try again later.');
//         console.log(error);
//       });
//   });

        function sendEmail() {
            var templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                message: document.getElementById('message').value
            };

            emailjs.send('service_gfqk62x', 'template_yii0ra8', templateParams)
                .then(alert("Email sent!.."));
        } 
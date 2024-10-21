   // Smooth Scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Perform basic validation (can be enhanced)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Show a message after submission
        alert("Thank you for your message! We will get back to you soon.");

        // Optionally, reset the form
        contactForm.reset();
        
        // Uncomment below to actually submit the form
        // contactForm.submit();
    });
    (function(){
        emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your service and template IDs
            .then(function(response) {
                alert('Message sent successfully!', response.status, response.text);
                document.getElementById('contact-form').reset(); // Reset the form after successful submission
            }, function(error) {
                alert('Failed to send message. Please try again.', error);
            });
    });

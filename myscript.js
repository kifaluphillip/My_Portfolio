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

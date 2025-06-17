// Create particles
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation duration
    const duration = Math.random() * 3 + 2;
    particle.style.animationDuration = duration + 's';
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Create particles on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.7) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        
        const size = Math.random() * 8 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const duration = Math.random() * 3 + 2;
        particle.style.animationDuration = duration + 's';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
});

// Add this script before the closing </body> tag in your contact.html file

// First, add the EmailJS CDN script tag:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/emailjs-com/3.2.0/email.min.js"></script>

// Initialize EmailJS with your public key
(function(){
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: 'sbahlesithole707@gmail.com' // Your email
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                .then(function(response) {
                    // Success - show success message
                    showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                }, function(error) {
                    // Error - show error message
                    showMessage('Failed to send message. Please try again or contact me directly at sbahlesithole707@gmail.com', 'error');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        });
    }
});

// Function to show status messages
function showMessage(message, type) {
    // Create message element if it doesn't exist
    let messageEl = document.getElementById('statusMessage');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'statusMessage';
        messageEl.style.cssText = `
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-weight: bold;
            display: none;
        `;
        
        // Insert before the form
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(messageEl, form);
    }
    
    // Set message content and style
    messageEl.textContent = message;
    messageEl.className = type === 'success' ? 'success-message' : 'error-message';
    
    if (type === 'success') {
        messageEl.style.cssText += `
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            display: block;
        `;
    } else {
        messageEl.style.cssText += `
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
            display: block;
        `;
    }
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
}

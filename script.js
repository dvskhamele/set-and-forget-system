document.addEventListener('DOMContentLoaded', function() {
    // Get all CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    // Add click handlers to CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Welcome! Sign up functionality coming soon.');
        });
    });

    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('Set and Forget System loaded successfully');
});

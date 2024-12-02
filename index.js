// Testimonial Carousel functionality
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// Function to change testimonial
function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = 'none';
    });
    
    // Show the current testimonial
    testimonials[index].style.display = 'block';
}

// Set an interval to automatically change testimonials
setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    showTestimonial(currentTestimonialIndex);
}, 3000); // Change every 3 seconds

// Initialize the first testimonial
showTestimonial(currentTestimonialIndex);

// Smooth scrolling for CTA button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Offset to avoid header overlap
            behavior: 'smooth'
        });
    }
}

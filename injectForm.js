document.addEventListener('DOMContentLoaded', function () {
    const contactFormContainer = document.querySelector('.contact-form-inject');
    fetch('contact-form.html')
        .then(response => response.text())
        .then(data => {
            contactFormContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the contact form:', error);
        });
});

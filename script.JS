
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate form inputs (basic example)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const reason = document.getElementById('reason').value;

        if (!name || !email || !phone || !date || !time || !reason) {
            alert('Please fill in all fields.');
            return;
        }

        // You can process the form data here, e.g., send it to a server
        console.log('Appointment Scheduled:', {
            name,
            email,
            phone,
            date,
            time,
            reason
        });

        alert('Your appointment has been scheduled!');
        form.reset(); // Reset the form
    });
});
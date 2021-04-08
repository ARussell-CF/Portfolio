const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_t9eysns';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Email Sent',
                    text: 'Your email was sent successfully. I will respond within 24 hours',
                    icon: 'success',
                    confirmButtonText: 'Great!'
                })
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Error!',
                    html: 'Looks like something went wrong! <hr /> I\'m always available on <a href="https://coderfoundry.com" target="_blank">LinkedIn</a>',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
            });
    });
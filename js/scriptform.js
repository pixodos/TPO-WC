const $form = document.querySelector('form');
const $messageTextarea = document.querySelector('textarea');

$form.addEventListener('submit', handleSubmit);

$messageTextarea.addEventListener('input', function() {
    validateInput(this);
});
async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        alert('Muchas gracias! Un profesional se pondrá en contacto con vos.');
    }
}


function validateInput(element) {
    const inputValue = element.value;
    const validCharacters = /^[a-zA-Z0-9\s]*$/;

    if (!validCharacters.test(inputValue)) {
        element.setCustomValidity('Por favor, no incluyas caracteres especiales');
    } else {
        element.setCustomValidity('');
    }
}
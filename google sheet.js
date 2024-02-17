const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="img/loading.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPsZIdFxE_BYu3RYC7UmwJLG94cf0Evyv3Tb3Pf7ffkCPYUKjMESv9rsaCD2ckRsEg/exec';

const form = document.forms['formulario-contato'];

form.addEventListener('submit', e => {
    e.preventDefault();
    addLoading();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        removeLoading();
        window.location.reload();
        
    })
    .catch(error => console.error('Error!', error.message));
});
enviarAlert
const showAlert = () => {
    Swal.fire({
        title: 'Compra',
        text: 'Message successfully sent',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

let button = document.getElementById('enviarAlert');
button.onclick = showAlert

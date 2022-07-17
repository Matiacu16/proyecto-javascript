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


// const getDataByAJAX = () => {
//     $.ajax({
//         url: 'https://swapi.dev/api/people',
//         success: function (result) {
//             console.log('result: ', result);
//         },
//     });
// }

const fetchData = async (prams) => {
    return new Promise ((resolve, reject) => {
        try {
            const options = {
                method: params.method,
                Headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        if (params.body) {
            options.body = JSON.stringify(params.body)
        }
        let url = params.url;
        if (params.query) {
            url += '?' + Object.keys(params.query).map((k) => {
                if (params.query[k] == '') {
                    return;
                }
                return k + '=' + params.query[k];
            }).join('&');
        }
        fetch(url, options)
        .then((response) => response.json())
        .then((resp) => {
            if (resp.error && (typeof resp.status == 'number') && Math.floor(resp.status / 100) !=2) {
                reject(resp);
                return;
            }
            console.log('resp: ', resp);
            resolve(resp);
        }).catch((err) => {
            reject(err);
        });
        } catch (err) {
            reject(err);
        }
    })
}

fetchData(
    {
        method: 'GET',
        url: 'https://swapi.dev/api/people',
    }
)
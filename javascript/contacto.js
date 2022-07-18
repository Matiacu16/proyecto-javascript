function datosform (params) {
    let name=document.getElementById("fname").value;
    let surname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let message=document.getElementById("message").value;
    if (name=="")  { alert ("Enter your Name")
    } else {
    if (surname=="")  { alert ("Enter your Surname")} }
    if (email=="")  { alert ("Enter your Email")}
    if (phone=="")  { alert ("Enter your Phone")}
    if (message=="")  { alert ("Leave your Message")};
    let datos = [ { name: name, surname: surname, email: email, phone: phone, message: message}];
    console.log(datos); 
    localStorage.setItem("datos", JSON.stringify (datos)  )}
let submitbutton = document.getElementById("sendAlert"); 
submitbutton.addEventListener("click", datosform)



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
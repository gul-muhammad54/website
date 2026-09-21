var data = document.querySelector('data')

function displaydata() {

    return new Promise(function(resolve, reject) {

        var userdata = "hello world";

        if (userdata) {
            resolve(userdata);
        } else {
            reject("Data not found");
        }

    });

}

displaydata()
    .then((success) => {
        console.log(success);
    })
    .catch((error) => {
        console.log(error);
    });

    const api_code = 'b22d1aa9dabcdc0d09e56727896ac25e'
var city = 'karachi';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
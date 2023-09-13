function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };
    const serviceID = "service_mquu3sm";
    const templateID = "template_i1q5zke";

    emailjs.send(serviceID,templateID,params)
    .then(
    res => {
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            console.log(res)
            alert('Your message has been sent sucessfully')

        })
    .catch((err) => console.log(err))
}


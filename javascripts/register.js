function doRegister() 
{
    // let urlBase = "http://161.35.130.120/";
    let firstName = document.getElementById("registerFirstName").value;
    let lastName = document.getElementById("registerLastName").value;
    let login = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    // document.getElementById("registerResult").innerHTML = "";

    let tmp = {first_name: firstName, last_name: lastName, email: "testing4@example.com", user_name: login, user_password: password};
    let jsonPayload = JSON.stringify(tmp);
    
    // let url = urlBase + 'api/register.php';
    let url = "/FallKnightHack/api/register.php"

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    
    try 
    {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                let jsonObject = JSON.parse(xhr.responseText);

                if (jsonObject.error === "") 
                {        
                    window.location.href = "../index.html";
                } else 
                {
                    document.getElementById("registerResult").innerHTML = "* " + jsonObject.error;
                }
            }
        };
        xhr.send(jsonPayload);
    } catch(err) 
    {
        document.getElementById("registerResult").innerHTML = "* " + err.message;
    }
}
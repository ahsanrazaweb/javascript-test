
let users = []
 
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right,rgb(0, 255, 0) , rgb(51, 139, 147))";
            break;
        case "error":
            bgColor = "linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)";
            break;

        default:
            bgColor: "#fff"
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
           background : bgColor
        },
        onClick: function () { } 
    }).showToast();

}



const register = () => {
    let newUser = document.getElementById("registerField").value;
    isUserFound = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i] == newUser) {
            isUserFound = true;
            showNotification("you have already register")
            return
        }
    }
    if (isUserFound == false) {
        users.push(newUser)
        showNotification("Thanks FOR  Registeration", "success")
    }
    console.log(users)
}
const login = () => {
    let user = document.getElementById("loginField").value;
    let isUserFound = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i] == user) {
            isUserFound = true;
            document.write(`You Are Successfully Logged in With Email: ${user}`)
            return
        }
    }
    if (isUserFound == false) {
        showNotification("please register first", "error")
    }
    console.log(users)
}

const submit= () => {
    let user = document.getElementById("submit").value;
    let isUserFound = false;
    if (isUserFound ==" ") {
       showNotification("SUBMITTED IT!")}
    console.log(users)
}
